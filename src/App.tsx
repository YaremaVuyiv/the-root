import React from 'react';
import Modal from 'react-modal';
import { SlotModel } from './Models/SlotModel';
import Background from './Assets/map.jpg';
import marquiseTablet from './InitialState/MarquiseTabletState';
import eyrieTablet from './InitialState/EyrieTabletState';
import { Clearing } from './store/Clearings/models/ClearingsState';
import { Faction } from './Enums/Faction';
import { CardDictionaryType } from './Types/CardDictionaryType';
import Cards from './InitialState/Cards';
import { CardsComponent } from './Components/CardsComponent';
import { connect } from 'react-redux';
import { AppState, store } from './store/store';
import ClearingComponent from './Components/ClearingComponent';
import { dominanceCheckService } from './Services/IDominanceCheckService';
import { getAllClearings } from './store/Selectors';
import { activateClearingsAction } from './store/Clearings/ClearingsActions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    maxWidth: '90vw'
  }
};

const backgroundStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '109vh',
  position: 'relative' as 'relative'
}

interface IAppProps {
  faction: Faction;
  clearings: Clearing[];
}

export interface IAppState {
  modalIsOpen: boolean;
  actionDialogTop: number;
  actionDialogLeft: number;
  marquiseTablet: {
    sawmills: SlotModel[],
    recruiters: SlotModel[],
    workshops: SlotModel[],
    woodTokens: number;
  },
  eyrieTablet: {
    nests: SlotModel[]
  }
  chosenBuilding: SlotModel | null;
  actionDialogVisible: boolean;
  selectedClearing: Clearing | null;
}

Modal.setAppElement(document.getElementById('root') ?? 'App');
class App extends React.Component<IAppProps, IAppState>{
  warriorsToMove: number;
  allCards: CardDictionaryType;

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      modalIsOpen: false,
      actionDialogTop: 0,
      actionDialogLeft: 0,
      marquiseTablet: marquiseTablet,
      eyrieTablet: eyrieTablet,
      chosenBuilding: null,
      actionDialogVisible: false,
      selectedClearing: null
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onActionDialogClose = this.onActionDialogClose.bind(this);
    this.onMovementSubmit = this.onMovementSubmit.bind(this);

    this.warriorsToMove = 0;
    this.allCards = Cards;
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  onActionDialogClose() {
    this.setState({
      actionDialogVisible: false
    })

    this.warriorsToMove = 0;
  }

  onMovementSubmit(warriorsNumber: number) {
    this.setState({
      actionDialogVisible: false
    })

    this.warriorsToMove = warriorsNumber;
  }

  getCardsModal() {
    const rnd1 = Math.floor(Math.random() * 54) + 1;
    const rnd2 = Math.floor(Math.random() * 54) + 1;
    const rnd3 = Math.floor(Math.random() * 54) + 1;

    const cards = [
      this.allCards['card' + rnd1].card,
      this.allCards['card' + rnd2].card,
      this.allCards['card' + rnd3].card
    ];

    return <CardsComponent cards={cards} />
  }

  onMoveClick = () => {
    const clearings: Clearing[] = getAllClearings();
    const dominatingClearings = clearings
      .filter(clearing => dominanceCheckService.isDominating(clearing.id, this.props.faction))
      .map(clearing => clearing.id);
    store.dispatch(activateClearingsAction(dominatingClearings));
  }

  render() {
    const clearingElements = [];

    for (let el of this.props.clearings) {
      clearingElements.push(<ClearingComponent
        id={el.id}
        key={el.id}
      />);
    }
    return (
      <div className='row m-0 h-100 w-100'>
        <div className='col-xl-9 p-0'>
          <div style={backgroundStyle}>
            {clearingElements}
          </div>
        </div>
        <div
          style={{
            'maxHeight': '100vh',
            'overflowY': 'scroll'
          }}
          className='col-xl-3 p-0'>
          <button onClick={this.openModal}>Open Modal</button>
          <button onClick={this.onMoveClick}>Move</button>
          <button>Battle</button>
          <button>Build</button>
          {this.getCardsModal()}
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
          </Modal>
        </div>

      </div>
    );
  };
}

const mapStateToProps = (state: AppState): IAppProps => ({
  clearings: state.clearingsReducer.ids.map(id => state.clearingsReducer.byId[id]),
  faction: Faction.MarquiseDeCat
})

export default connect(mapStateToProps)(App);