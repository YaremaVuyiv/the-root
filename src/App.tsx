import React from 'react';
import Modal from 'react-modal';
import { MarquiseTablet } from './Components/MarquiseTablet';
import { SlotModel } from './Models/SlotModel';
import { SlotTypeEnum } from './Enums/SlotType';
import Background from './Assets/map.jpg';
import { Slot } from './Components/Slot';
import { ClearingComponent } from './Components/Clearing';
import clearings from './InitialState/Clearings';
import { ClearingDictionaryType } from './Types/ClearingDictionaryType';
import { LocationTypeEnum } from './Enums/LocationTypeEnum';
import marquiseTablet from './InitialState/MarquiseTabletState';
import eyrieTablet from './InitialState/EyrieTabletState';
import slotClick from './Types/SlotClick';
import { ActionDialog } from './Components/ActionDialog';
import { Clearing } from './Types/ClearingType';
import { Faction } from './Enums/Faction';
import { canMove } from './Types/CanMove';
import { canBattle } from './Types/CanBattle';
import { canRecruit } from './Types/CanRecruit';
import { EyrieTablet } from './Components/EyrieTablet';

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

const clearingHeight = 13;

interface IAppProps {
  faction: Faction;
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
  clearings: ClearingDictionaryType;
  actionDialogVisible: boolean;
  selectedClearing: Clearing | null;
  selectedClearingId: string;
}

Modal.setAppElement(document.getElementById('root') ?? 'App');

export class App extends React.Component<IAppProps, IAppState>{
  warriorsToMove: number;

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      modalIsOpen: false,
      actionDialogTop: 0,
      actionDialogLeft: 0,
      marquiseTablet: marquiseTablet,
      eyrieTablet: eyrieTablet,
      chosenBuilding: null,
      clearings: clearings,
      actionDialogVisible: false,
      selectedClearing: null,
      selectedClearingId: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.slotClick = this.slotClick.bind(this);
    this.onClearingClick = this.onClearingClick.bind(this);
    this.onActionDialogClose = this.onActionDialogClose.bind(this);
    this.onMovementSubmit = this.onMovementSubmit.bind(this);
    this.getActionDialogElement = this.getActionDialogElement.bind(this);
    this.onRecruitSubmit = this.onRecruitSubmit.bind(this);
    this.onRecruitSubmit = this.onRecruitSubmit.bind(this);
    this.onBattleSubmit = this.onBattleSubmit.bind(this);

    this.warriorsToMove = 0;
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

  slotClick(id: string, location: LocationTypeEnum, type: SlotTypeEnum): void {
    this.setState(slotClick(this.state, id, location, type));
  }

  onClearingClick(id: string, left: number, top: number) {
    if (this.warriorsToMove > 0) {
      const clearings = this.state.clearings;
      const connectedClearings = clearings[this.state.selectedClearingId].connectedClearings;
      if (connectedClearings.some(x => x === id)) {
        switch (this.props.faction) {
          case Faction.MarquiseDeCat:
            clearings[this.state.selectedClearingId].catWarriorsNumber -= this.warriorsToMove;
            clearings[id].catWarriorsNumber += this.warriorsToMove;
            break;

          case Faction.EyrieDynasties:
            clearings[this.state.selectedClearingId].birdWarriorsNumber -= this.warriorsToMove;
            clearings[id].birdWarriorsNumber += this.warriorsToMove;
            break;
        }

        this.setState({
          clearings: clearings
        })
      }

      this.warriorsToMove = 0;
    }
    else {
      this.setState((state: IAppState) => {
        state.actionDialogVisible = true;
        state.actionDialogLeft = left;
        state.actionDialogTop = top;
        state.selectedClearing = state.clearings[id];
        state.selectedClearingId = id;

        return state;
      });
    }
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

  onRecruitSubmit() {
    const clearings = this.state.clearings;
    for (let clearingId in clearings) {
      const clearing = clearings[clearingId];
      for (let slotId in clearing.slots) {
        switch (this.props.faction) {
          case Faction.MarquiseDeCat:
            if (clearing.slots[slotId].type === SlotTypeEnum.recruiter) {
              clearings[clearingId].catWarriorsNumber++;
            }
            break;
        }
      }
    }

    this.setState({
      clearings: clearings
    });
  }

  onBattleSubmit(faction: Faction) {
    const rnd1 = Math.floor(Math.random() * 4);
    const rnd2 = Math.floor(Math.random() * 4);
    let attackerWarriorToRemove = 0;
    let defenderWarriorToRemove = 0;

    const clearings = this.state.clearings;
    switch (faction) {
      case Faction.EyrieDynasties:
        attackerWarriorToRemove = Math.min(clearings[this.state.selectedClearingId].birdWarriorsNumber, Math.min(rnd1, rnd2));
        break;
      case Faction.MarquiseDeCat:
        attackerWarriorToRemove = Math.min(clearings[this.state.selectedClearingId].catWarriorsNumber, Math.min(rnd1, rnd2));
        break;
    }

    switch (this.props.faction) {
      case Faction.MarquiseDeCat:
        clearings[this.state.selectedClearingId].catWarriorsNumber -= attackerWarriorToRemove;
        break;
      case Faction.EyrieDynasties:
        clearings[this.state.selectedClearingId].birdWarriorsNumber -= attackerWarriorToRemove;
        break;
    }

    switch (this.props.faction) {
      case Faction.MarquiseDeCat:
        defenderWarriorToRemove = Math.min(clearings[this.state.selectedClearingId].catWarriorsNumber, Math.max(rnd1, rnd2));
        break;
      case Faction.EyrieDynasties:
        defenderWarriorToRemove = Math.min(clearings[this.state.selectedClearingId].birdWarriorsNumber, Math.max(rnd1, rnd2));
        break;
    }

    switch (faction) {
      case Faction.EyrieDynasties:
        clearings[this.state.selectedClearingId].birdWarriorsNumber -= defenderWarriorToRemove;
        break;
      case Faction.MarquiseDeCat:
        clearings[this.state.selectedClearingId].catWarriorsNumber -= defenderWarriorToRemove;
        break;
    }

    this.setState({
      clearings: clearings,
      actionDialogVisible: false
    })

    alert(rnd1 + ":" + rnd2);
  }

  getActionDialogElement(): JSX.Element | null {
    if (!this.state.actionDialogVisible) {
      return null;
    }

    const canMoveOnClearing = canMove(this.props.faction, this.state.clearings, this.state.selectedClearingId).length > 0;
    const canBattleOnClearing = canBattle(this.props.faction, this.state.clearings, this.state.selectedClearingId);
    const canRecruitOnClearing = canRecruit(this.props.faction, this.state.clearings, this.state.selectedClearingId);

    return canMoveOnClearing || canBattleOnClearing || canRecruitOnClearing ?
      <ActionDialog
        onBattleSubmit={this.onBattleSubmit}
        onRecruitSubmit={this.onRecruitSubmit}
        onMovementSubmit={this.onMovementSubmit}
        canMove={canMoveOnClearing}
        canBattle={canBattleOnClearing}
        canRecruit={canRecruitOnClearing}
        faction={this.props.faction}
        selectedClearing={this.state.selectedClearing}
        top={this.state.actionDialogTop + clearingHeight}
        left={this.state.actionDialogLeft}
        onDialogClose={this.onActionDialogClose} />
      : null
  }

  getTabletElement(): JSX.Element | null {
    switch (this.props.faction) {
      case Faction.MarquiseDeCat:
        return <MarquiseTablet
          sawmills={this.state.marquiseTablet.sawmills}
          recruiters={this.state.marquiseTablet.recruiters}
          workshops={this.state.marquiseTablet.workshops}
          slotClick={this.slotClick} />

      case Faction.EyrieDynasties:
        return <EyrieTablet
          nests={this.state.eyrieTablet.nests}
          slotClick={this.slotClick}
        />
    }

    return null;
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
      elements.push(<ClearingComponent
        id={el}
        key={this.state.clearings[el].key}
        left={this.state.clearings[el].left}
        top={this.state.clearings[el].top}
        type={this.state.clearings[el].type}
        hasSupportToken={this.state.clearings[el].hasSupportToken}
        hasKeepToken={this.state.clearings[el].hasKeepToken}
        woodTokens={this.state.clearings[el].woodTokenNumber}
        hasWagabond={this.state.clearings[el].hasWagabond}
        catWarriorsNumber={this.state.clearings[el].catWarriorsNumber}
        birdWarriorsNumber={this.state.clearings[el].birdWarriorsNumber}
        allianceWarriorsNumber={this.state.clearings[el].allianceWarriorsNumber}
        onClearingClick={this.onClearingClick}
        children={slots}
      />);
    }
    return (
      <div className='row m-0 h-100 w-100'>
        <div className='col-9 p-0'>
          <div style={backgroundStyle}>
            {elements}
            {this.getActionDialogElement()}
          </div>
        </div>
        <div className='col-3 p-0'>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {this.getTabletElement()}
          </Modal>
        </div>
      </div>
    );
  };
}

