import React, { useState } from "react";
import { AppState } from "../../store/store";
import { useSelector } from "react-redux";
import WarriorComponent from "./WarriorComponent";

interface IWarriorBarPosition {
    top: number;
    left: number;
}

interface IOwnProps {
    clearingId: number;
}

interface IWarriorBarState {
    warriorBarWidth: number;
    warriorBarHeight: number;
    warriorBarColor: string | undefined;
    warriorBarZIndex: number | undefined;
    shouldDisplayDetailedInfo: boolean;
    warriorBarTop: number;
}

const clearingHeight = 13;

export default function WarriorBarComponent(props: IOwnProps) {
    const warriorBarPosition: IWarriorBarPosition = useSelector((appState: AppState) => {
        return {
            top: appState.clearingsReducer.byId[props.clearingId].topLocation,
            left: appState.clearingsReducer.byId[props.clearingId].leftLocation
        }
    });

    const clearingWarriorIds: number[] = useSelector((appState: AppState) =>
        appState.clearingWarriorsReducer.ids.filter(clearingWarriorId =>
            appState.clearingWarriorsReducer.byId[clearingWarriorId].clearingId === props.clearingId));

    const shouldShowWarriorsBar: boolean = useSelector((appState: AppState) =>
        clearingWarriorIds.some(clearingWarriorId =>
            appState.clearingWarriorsReducer.byId[clearingWarriorId].warriorsNumber > 0));

    const [state, setState] = useState<IWarriorBarState>({
        warriorBarWidth: 3,
        warriorBarHeight: clearingHeight,
        warriorBarColor: undefined,
        warriorBarZIndex: undefined,
        shouldDisplayDetailedInfo: false,
        warriorBarTop: warriorBarPosition.top,
    });

    const warriorElements: JSX.Element[] = clearingWarriorIds.map(clearingWarriorId =>
        <WarriorComponent
            key={clearingWarriorId}
            clearingWarriorId={clearingWarriorId}
            shouldDisplayDetailedInfo={state.shouldDisplayDetailedInfo}></WarriorComponent>)

    const onWarriorBarMouseMove = () => {
        if (shouldShowWarriorsBar) {
            const warriorBarHeight = 23;
            let warriorBarTop = state.warriorBarTop;
            if (warriorBarTop + warriorBarHeight > 100) {
                warriorBarTop += 100 - warriorBarPosition.top - warriorBarHeight;
            }

            setState({
                warriorBarWidth: 7,
                warriorBarHeight: warriorBarHeight,
                warriorBarColor: '#bfae86',
                warriorBarZIndex: 1,
                shouldDisplayDetailedInfo: true,
                warriorBarTop: warriorBarTop,
            });
        }
    }

    const onWarriorBarMouseLeave = () => {
        setState({
            warriorBarWidth: 3,
            warriorBarHeight: clearingHeight,
            warriorBarColor: undefined,
            warriorBarZIndex: undefined,
            shouldDisplayDetailedInfo: false,
            warriorBarTop: warriorBarPosition.top,
        })
    }

    const warriorBarStyle = {
        width: state.warriorBarWidth + '%',
        height: state.warriorBarHeight + '%',
        position: 'absolute' as 'absolute',
        left: warriorBarPosition.left + 12 + '%',
        top: state.warriorBarTop + '%',
        backgroundColor: state.warriorBarColor,
        zIndex: state.warriorBarZIndex
    }

    return (
        <div
            style={warriorBarStyle}
            onMouseMove={onWarriorBarMouseMove}
            onMouseLeave={onWarriorBarMouseLeave}>
            {warriorElements}
        </div>
    );
}