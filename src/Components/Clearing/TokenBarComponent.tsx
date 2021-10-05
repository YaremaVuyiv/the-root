import React, { useState } from "react";
import { AppState } from "../../store/store";
import { useSelector } from "react-redux";
import TokenComponent from "./TokenComponent";

interface IProps {
    clearingId: number;
}

interface ITokenBarState {
    tokenBarWidth: number;
    tokenBarHeight: number;
    tokenBarLeft: number;
    tokenBarColor: string | undefined;
    tokenBarZIndex: number | undefined;
    shouldShowDetailedInfo: boolean;
}

export default function TokenBarComponent(props: IProps) {

    const tokenBarLeft: number = useSelector((storeState: AppState) =>
        storeState.clearingsReducer.byId[props.clearingId].leftLocation);

    const tokenBarTop: number = useSelector((storeState: AppState) =>
        storeState.clearingsReducer.byId[props.clearingId].topLocation);

    const clearingTokenIds = useSelector((storeState: AppState) =>
        storeState.clearingTokensReducer.ids.filter(id =>
            storeState.clearingTokensReducer.byId[id].clearingId === props.clearingId));

    const shouldShowTokenBar: boolean = useSelector((storeState: AppState) =>
        clearingTokenIds.some(clearingTokenId => storeState.clearingTokensReducer.byId[clearingTokenId].tokensNumber > 0));

    const [state, setState] = useState<ITokenBarState>({
        tokenBarLeft: tokenBarLeft,
        tokenBarWidth: 12,
        tokenBarHeight: 3,
        tokenBarColor: undefined,
        tokenBarZIndex: undefined,
        shouldShowDetailedInfo: false,
    })

    const tokenImages: JSX.Element[] = clearingTokenIds.map(clearingTokenId =>
        <TokenComponent 
        key={clearingTokenId}
        clearingTokenId={clearingTokenId}
        shouldShowDetailedInfo={state.shouldShowDetailedInfo}></TokenComponent>
    );

    const onTokenBarMouseMove = () => {
        if (shouldShowTokenBar) {
            let tokenBarWidth = 23;
            let tokenBarLeft = state.tokenBarLeft;
            if (tokenBarLeft + tokenBarWidth > 100) {
                tokenBarLeft += 100 - tokenBarLeft - tokenBarWidth;
            }

            setState({
                tokenBarLeft: tokenBarLeft,
                tokenBarWidth: tokenBarWidth,
                tokenBarHeight: 7,
                tokenBarColor: '#bfae86',
                tokenBarZIndex: 1,
                shouldShowDetailedInfo: true
            });
        }
    }

    const onTokenBarMouseLeave = () => {
        setState({
            tokenBarLeft: tokenBarLeft,
            tokenBarWidth: 12,
            tokenBarHeight: 3,
            tokenBarColor: undefined,
            tokenBarZIndex: undefined,
            shouldShowDetailedInfo: false
        })
    }

    const tokenBarStyle = {
        width: state.tokenBarWidth + '%',
        height: state.tokenBarHeight + '%',
        position: 'absolute' as 'absolute',
        left: state.tokenBarLeft + '%',
        top: tokenBarTop - 3 + '%',
        backgroundColor: state.tokenBarColor,
        zIndex: state.tokenBarZIndex
    }

    return (
        <div
            style={tokenBarStyle}
            className='row m-0'
            onMouseMove={onTokenBarMouseMove}
            onMouseLeave={onTokenBarMouseLeave}>
            {tokenImages}
        </div>
    );
}