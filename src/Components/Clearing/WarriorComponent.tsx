import React from "react";
import { useSelector } from "react-redux";
import { Faction } from "../../Enums/Faction";
import GetWarriorImageByFactionType from "../../Services/WarriorImageService";
import { AppState } from "../../store/store";

interface IProps {
    clearingWarriorId: number;
    shouldDisplayDetailedInfo: boolean;
}

export default function WarriorComponent(props: IProps) {
    const warriorImage: string = useSelector((storeState: AppState) => {
        const warriorFaction: Faction = storeState.clearingWarriorsReducer.byId[props.clearingWarriorId].faction;
        return GetWarriorImageByFactionType(warriorFaction);
    });

    const warriorsCount: number = useSelector((storeState: AppState) =>
        storeState.clearingWarriorsReducer.byId[props.clearingWarriorId].warriorsNumber
    );

    const displayConfig: string = props.shouldDisplayDetailedInfo ?
        'initial' :
        'none';

    const classConfig: string = props.shouldDisplayDetailedInfo ?
        'col-7 p-0 w-100' :
        'w-100';

    return (
        <div className='row m-0'>
            <img src={warriorImage} alt={warriorImage} className={classConfig} />
            <div className='col-5 p-0' style={
                {
                    display: displayConfig,
                    fontSize: '1.7vh'
                }}>
                x{warriorsCount}
            </div>
        </div>
    )
}