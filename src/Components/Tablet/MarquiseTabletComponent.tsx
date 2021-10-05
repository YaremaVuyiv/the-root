import React, { CSSProperties } from 'react';
import image from '../../Assets/marquiseTablet.png';
import { BuildingTypeEnum } from '../../Enums/SlotTypeEnum';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import GetImageNameBySlotType from '../../Services/SlotImageService';
import { Faction } from '../../Enums/Faction';
import { CraftingItemComponent } from '../CraftingItemComponent';

const modalStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '77vh',
    width: '99vh',
    position: 'relative' as 'relative'
};

const slotsXPositions = [
    87,
    79.2,
    71.4,
    63.6,
    55.9,
    48.4,
]

const sawmillYPosition = 38.7;
const workshopYPorsition = 49;
const recruiterYPosition = 59.5;

export default function MarquiseTabletComponent() {
    const slots = useSelector((appState: AppState) =>
        appState.slotsReducer.ids.map(id => appState.slotsReducer.byId[id]));

    const craftedItems = useSelector((appState: AppState) =>
        appState.craftingItemsReducer.ids
            .map(id => appState.craftingItemsReducer.byId[id])
            .filter(x => x.faction === Faction.MarquiseDeCat));

    const craftedItemsElements = (): JSX.Element[] =>
        craftedItems.map(item => <CraftingItemComponent craftingItemType={item.itemType} />);

    const getlElements = (buildingType: BuildingTypeEnum): JSX.Element[] => {
        const slotsNumber = slots.filter(slot => slot.type === buildingType).length;
        const elements: JSX.Element[] = [];
        for (let i = 0; i < slotsXPositions.length - slotsNumber; i++) {
            const elementStyle = buildingStyle(slotsXPositions[i], getTopPosition(buildingType), buildingType);
            elements.push(
                <div style={elementStyle}></div>
            )
        }

        return elements;
    }

    const getTopPosition = (buildingType: BuildingTypeEnum): number => {
        switch (buildingType) {
            case BuildingTypeEnum.sawmill:
                return sawmillYPosition;
            case BuildingTypeEnum.workshop:
                return workshopYPorsition;
            case BuildingTypeEnum.recruiter:
                return recruiterYPosition;
            default:
                return 0;
        }
    }

    const craftedItemsStyle: CSSProperties = {
        position: 'absolute',
        left: '73%',
        top: '16.5%',
        height: '7%'
    }

    const buildingStyle = (leftPosition: number, topPosition: number, buildingType: BuildingTypeEnum) => {
        return {
            width: 8 + '%',
            height: 8 + '%',
            left: leftPosition + '%',
            top: topPosition + '%',
            position: 'absolute' as 'absolute',
            backgroundImage: `url(${GetImageNameBySlotType(buildingType)})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }
    }

    return (
        <div style={modalStyle}>
            {getlElements(BuildingTypeEnum.sawmill)}
            {getlElements(BuildingTypeEnum.workshop)}
            {getlElements(BuildingTypeEnum.recruiter)}
            <div style={craftedItemsStyle} className="row">
                {craftedItemsElements()}
            </div>
        </div>
    );
}