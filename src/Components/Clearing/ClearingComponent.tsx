import React from "react";
import { ClearingTypeEnum } from "../../Enums/ClearingType";
import { AppState } from "../../store/store";
import { useSelector } from "react-redux";
import SlotComponent from "../SlotComponent";
import TokenBarComponent from "./TokenBarComponent";
import WarriorBarComponent from "./WarriorBarComponent";
import DominanceMarkerCOmponent from "./DominanceMarkerComponent";

interface IClearingDetails {
    top: number;
    left: number;
    type: ClearingTypeEnum;
    slotIds: number[];
}

interface IProps {
    clearingId: number;
}

const clearingHeight = 13;

export default function ClearingComponent(props: IProps) {
    const selectedClearingId: number | null = useSelector((storeState: AppState) =>
        storeState.clearingsReducer.selectedClearingId);

    const isActivated: boolean = useSelector((storeState: AppState) =>
        storeState.clearingsReducer.byId[props.clearingId].isActive);

    const clearingDetails: IClearingDetails = useSelector((storeState: AppState) => {
        return {
            type: storeState.clearingsReducer.byId[props.clearingId].type,
            slotIds: storeState.slotsReducer.ids.filter(x => storeState.slotsReducer.byId[x].clearingId === props.clearingId),
            top: storeState.clearingsReducer.byId[props.clearingId].topLocation,
            left: storeState.clearingsReducer.byId[props.clearingId].leftLocation,
        }
    });

    const onClearingClick = () => {
        console.log(selectedClearingId);
        /*if (selectedClearingId === null) {
            props.selectClearing(props.clearingId, SelectedClearingEnum.movement);
        } else {
    
        }*/
    }

    const getBorderColor = (): string => {
        if (isActivated === true) {
            return '#ffffff';
        }
        switch (clearingDetails.type) {
            case ClearingTypeEnum.fox:
                return '#ff0000';
            case ClearingTypeEnum.mouse:
                return '#ffa500';
            case ClearingTypeEnum.rabbit:
                return '#ffff00';
        }
    }

    const clearingStyle = {
        width: '12%',
        height: clearingHeight + '%',
        left: clearingDetails.left + '%',
        top: clearingDetails.top + '%',
        position: 'absolute' as 'absolute',
        border: '2px solid ' + getBorderColor(),
    }

    return (
        <div>
            <TokenBarComponent clearingId={props.clearingId}></TokenBarComponent>
            <WarriorBarComponent clearingId={props.clearingId}></WarriorBarComponent>
            <div
                style={clearingStyle}
                onClick={onClearingClick}>
                {
                    clearingDetails.slotIds.map(slotId =>
                        <SlotComponent
                            key={slotId}
                            slotId={slotId}
                        />)
                }
                <p>{props.clearingId}</p>

                <DominanceMarkerCOmponent clearingId={props.clearingId}></DominanceMarkerCOmponent>
            </div>
        </div>
    );
}
