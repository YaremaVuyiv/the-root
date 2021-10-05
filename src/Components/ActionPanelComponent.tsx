import React, { useState } from "react";
import Modal from 'react-modal';
import { Faction } from "../Enums/Faction";
import { BuildingTypeEnum } from "../Enums/SlotTypeEnum";
import build from "../Services/BuildService";
import moveWarriors from "../Services/MoveService";
import { ActivateClearingsAction, ACTIVATE_CLEARINGS } from "../store/Clearings/models/actions";
import { SelectedClearingEnum } from "../store/Clearings/models/ClearingsState";
import EyrieTabletComponent from "./Tablet/EyrieTabletConponent";
import MarquiseTabletComponent from "./Tablet/MarquiseTabletComponent";

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

interface IActionPanelProps {
    faction: Faction;
}

interface IActionPanelState {
    modalIsOpen: boolean;
}

Modal.setAppElement(document.getElementById('root') ?? 'App');

export default function ActionPanelComponent(props: IActionPanelProps) {
    const [state, setState] = useState<IActionPanelState>({
        modalIsOpen: false
    })

    const onMoveClick = () => {

        const activateClearingsAction: ActivateClearingsAction = {
            type: ACTIVATE_CLEARINGS,
            payload: {
                clearingIds: [],
                clearingActionType: SelectedClearingEnum.movement
            }
        }

        moveWarriors(6, 8, 2, Faction.EyrieDynasties);
    }

    const onBuildClick = () => {
        build(19, BuildingTypeEnum.nest)
    }

    const openModal = () => {
        setState({
            modalIsOpen: true
        });
    }

    const closeModal = () => {
        setState({
            modalIsOpen: false
        });
    }

    return (
        <div
            style={{
                'maxHeight': '100vh',
                'overflowY': 'scroll'
            }}
            className='col-xl-3 p-0'>
            <button onClick={openModal}>Open Modal</button>
            <button onClick={onMoveClick}>Move</button>
            <button>Battle</button>
            <button onClick={onBuildClick}>Build</button>
            {/*this.getCardsModal() HERE SHOULD BE CARDS COMPONENTS*/}
            <Modal
                isOpen={state.modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                    <MarquiseTabletComponent/>
            </Modal>
        </div>
    );
}