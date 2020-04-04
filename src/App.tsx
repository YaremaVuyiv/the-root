import React from 'react';
import Modal from 'react-modal';
import { MarquiseTablet } from './Components/MarquiseTablet';
import { SlotModel } from './Models/SlotModel';
import { SlotTypeEnum } from './Enums/SlotType';
import Background from './map.jpg';
import { Slot } from './Components/Slot';
import { Clearing } from './Components/Clearing';
import clearings from './InitialState/Clearings';
import { ClearingDictionaryType } from './Types/ClearingDictionaryType';
import { LocationTypeEnum } from './Enums/LocationTypeEnum';
import marquiseTablet from './InitialState/MarquiseTabletState';
import slotClick from './Types/SlotClick';
import sawmillImage from './Assets/sawmill.png';

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

const mainStyle = {
  height: '100%',
  width: '100%'
}

export interface IAppState {
  modalIsOpen: boolean;
  marquiseTablet: {
    sawmills: SlotModel[],
    recruiters: SlotModel[],
    workshops: SlotModel[],
    woodTokens: number;
  },
  chosenBuilding: SlotModel | null;
  clearings: ClearingDictionaryType;
}

Modal.setAppElement(document.getElementById('root') ?? 'App');

export class App extends React.Component<{}, IAppState>{
  constructor(props: {}) {
    super(props);

    this.state = {
      modalIsOpen: false,
      marquiseTablet: marquiseTablet,
      chosenBuilding: null,
      clearings: clearings
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.slotClick = this.slotClick.bind(this);
  }

  openModal() {
    this.setState((state) => ({
      modalIsOpen: true
    }));
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  slotClick(id: string, location: LocationTypeEnum, type: SlotTypeEnum): void {
    this.setState(slotClick(this.state, id, location, type));
  }

  render() {
    const elements = [];
    for (let el in this.state.clearings) {
      const slots = [];
      for (let sl in this.state.clearings[el].slots) {
        slots.push(<Slot
          key={sl}
          locationType={LocationTypeEnum.map}
          top={this.state.clearings[el].slots[sl].top}
          left={this.state.clearings[el].slots[sl].left}
          type={this.state.clearings[el].slots[sl].type}
          id={sl}
          side={25}
          slotClick={this.slotClick}
        />);
      }
      elements.push(<Clearing
        key={this.state.clearings[el].key}
        left={this.state.clearings[el].left}
        top={this.state.clearings[el].top}
        type={this.state.clearings[el].type}
        hasSupportToken={this.state.clearings[el].hasSupportToken}
        hasKeepToken={this.state.clearings[el].hasKeepToken}
        woodTokens={this.state.clearings[el].woodTokenNumber}
        children={slots}
      />);
    }
    return (
      <div style={mainStyle} className='row'>
        <div style={backgroundStyle}>
          {elements}
        </div>
        <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <MarquiseTablet
              sawmills={this.state.marquiseTablet.sawmills}
              recruiters={this.state.marquiseTablet.recruiters}
              workshops={this.state.marquiseTablet.workshops}
              slotClick={this.slotClick} />
          </Modal>
        </div>
      </div>
    );
  };
}
