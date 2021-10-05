import React from "react";
import { useSelector } from "react-redux";
import { Faction } from "../../Enums/Faction";
import getImageByFaction from "../../Services/DominantImageService";
import getDominantFactionInClearing from "../../Services/IDominanceCheckService";
import { AppState } from "../../store/store";

interface IProps {
    clearingId: number;
}

export default function DominanceMarkerCOmponent(props: IProps) {
    const dominantFaction: Faction | null = useSelector((appState: AppState) => 
        getDominantFactionInClearing(props.clearingId));

    const dominantFactionStyle = {
        width: '15%',
        height: '15%',
        left: '85%',
        top: '85%',
        position: 'absolute' as 'absolute',
        backgroundColor: getImageByFaction(dominantFaction)
    }

    return (
        <div style={dominantFactionStyle}>
        </div>
    )
}