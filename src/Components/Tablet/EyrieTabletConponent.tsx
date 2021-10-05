import React, { CSSProperties } from 'react';
import { BuildingTypeEnum } from '../../Enums/SlotTypeEnum';
import image from '../../Assets/eyrieTablet.png';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import GetImageNameBySlotType from '../../Services/SlotImageService';
import { Faction } from '../../Enums/Faction';
import { CraftingItemComponent } from '../CraftingItemComponent';

const modalStyle: CSSProperties = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '77vh',
    width: '99vh',
    position: 'relative'
};

const slotsXPositions = [
    89.7,
    82.6,
    75.5,
    68.4,
    61.3,
    54.2,
    47.1
]

const nestYPosition = 41.7;

export default function EyrieTabletComponent() {
    const slots = useSelector((appState: AppState) =>
        appState.slotsReducer.ids.map(id => appState.slotsReducer.byId[id]));

    const craftedItems = useSelector((appState: AppState) => 
        appState.craftingItemsReducer.ids
            .map(id => appState.craftingItemsReducer.byId[id])
            .filter(x => x.faction === Faction.EyrieDynasties));

    const getlElements = (): JSX.Element[] => {
        const slotsNumber = slots.filter(slot => slot.type === BuildingTypeEnum.nest).length;
        const elements: JSX.Element[] = [];
        for (let i = 0; i < slotsXPositions.length - slotsNumber; i++) {
            const style = nestStyle(slotsXPositions[i], nestYPosition, BuildingTypeEnum.nest);
            elements.push(
                <div style={style}></div>
            )
        }

        return elements;
    }

    const craftedItemsElements = (): JSX.Element[] =>
        craftedItems.map(item => <CraftingItemComponent craftingItemType={item.itemType}/>);
    

    const nestStyle = (leftPosition: number, topPosition: number, buildingType: BuildingTypeEnum): CSSProperties => {
        return {
            width: 8 + '%',
            height: 8 + '%',
            left: leftPosition + '%',
            top: topPosition + '%',
            position: 'absolute',
            backgroundImage: `url(${GetImageNameBySlotType(buildingType)})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }
    }

    const craftedItemsStyle: CSSProperties = {
        position: 'absolute',
        left: '70%',
        top: '29.5%',
        height: '7%'
    }

    return (
        <div style={modalStyle}>
            {getlElements()}
            <div style={craftedItemsStyle} className="row">
                {craftedItemsElements()}
            </div>
        </div>
    )
}