import React from "react";
import { SlotTypeEnum } from "../Enums/SlotTypeEnum";
import { AppState } from "../store/store";
import { useSelector } from "react-redux";
import GetImageNameBySlotType from "../Services/SlotImageService";

interface ISlotProps {
    slotId: number
}

export default function SlotComponent(props: ISlotProps) {
    const side: number = 25;

    const leftPosition: number = useSelector((storeState: AppState) =>
        storeState.slotsReducer.byId[props.slotId].left);

    const topPosition: number = useSelector((storeState: AppState) =>
        storeState.slotsReducer.byId[props.slotId].top);

    const slotType: SlotTypeEnum | null = useSelector((storeState: AppState) =>
        storeState.slotsReducer.byId[props.slotId].type);

    const buildingStyle = {
        width: side + '%',
        height: side + '%',
        left: leftPosition + '%',
        top: topPosition + '%',
        position: 'absolute' as 'absolute',
        backgroundImage: `url(${GetImageNameBySlotType(slotType)})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div style={buildingStyle}></div>
    )
}