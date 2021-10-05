import React from "react";
import { useSelector } from "react-redux";
import ClearingComponent from "./Clearing/ClearingComponent";
import Background from '../Assets/map.jpg';
import { AppState } from "../store/store";
import CraftingItemsComponent from "./CraftingItemsComponent";

export default function MapComponent() {
    const clearingIds: number[] = useSelector((storeState: AppState) =>
        storeState.clearingsReducer.ids);

    const clearingElements: JSX.Element[] = clearingIds.map(id =>
        <ClearingComponent clearingId={id} key={id} />);

    const backgroundStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '109vh',
        position: 'relative' as 'relative'
    }

    return (
        <div className='col-xl-9 p-0'>
            <div style={backgroundStyle}>
                {clearingElements}
                <CraftingItemsComponent/>
            </div>
        </div>
    )
}