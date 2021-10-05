import React from "react";
import { useSelector } from "react-redux";
import ShouldShowCountByTokenType from "../../Services/TokenCountService";
import GetImageNameByTokenType from "../../Services/TokenImageService";
import { AppState } from "../../store/store";

interface IProps {
    clearingTokenId: number;
    shouldShowDetailedInfo: boolean;
}

export default function TokenComponent(props: IProps) {
    const tokenType = useSelector((storeState: AppState) => 
        storeState.clearingTokensReducer.byId[props.clearingTokenId].tokenType);

    const tokenImage: string = GetImageNameByTokenType(tokenType);

    const tokenCount: number = useSelector((storeState: AppState) => 
        storeState.clearingTokensReducer.byId[props.clearingTokenId].tokensNumber
    );

    const displayConfig: string = ShouldShowCountByTokenType(tokenType) && props.shouldShowDetailedInfo ?
        'initial':
        'none';

    return (
        <div className='h-100 row m-0'>
            <img key={0} src={tokenImage} alt={tokenImage} className='h-100'></img>
            <p key={1} style={{ display: displayConfig }}>x{tokenCount}</p>
        </div>
    )
}