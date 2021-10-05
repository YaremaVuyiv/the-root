import React, { CSSProperties } from "react"
import { useSelector } from "react-redux"
import { CraftingItemTypeEnum } from "../Enums/CraftingItemTypeEnum";
import { AppState } from "../store/store"
import { CraftingItemComponent } from "./CraftingItemComponent";

export default function CraftingItemsComponent() {
    const missingCraftingItems = useSelector((appState: AppState) => {
        const items = appState.craftingItemsReducer.ids.map(id => appState.craftingItemsReducer.byId[id]);
        return items.filter(item => item.faction !== null).map(x => x.itemType);
    });

    const padding_margin = 2;

    const itemStyle: CSSProperties = {
        paddingRight: padding_margin + '%',
        paddingLeft: padding_margin + '%'
    }

    const getItemElement = (itemType: CraftingItemTypeEnum): JSX.Element => {
        if (missingCraftingItems.includes(itemType)) {
            missingCraftingItems.splice(missingCraftingItems.indexOf(itemType), 1);
            return <div style={itemStyle} className="col-2 h-100">
                <CraftingItemComponent craftingItemType={undefined} />
            </div>
        }

        return <div style={itemStyle} className="col-2 h-100">
            <CraftingItemComponent craftingItemType={itemType} />
        </div>
    }

    const rowStyle: CSSProperties = {
        marginRight: -1 * padding_margin + '%',
        marginLeft: -1 * padding_margin + '%'
    }

    const getItemsElement = (): JSX.Element => {
        return <div className="position-absolute" style={clearingStyle}>
            <div style={rowStyle} className="row h-50">
                {getItemElement(CraftingItemTypeEnum.bag)}
                {getItemElement(CraftingItemTypeEnum.boot)}
                {getItemElement(CraftingItemTypeEnum.crossbow)}
                {getItemElement(CraftingItemTypeEnum.sword)}
                {getItemElement(CraftingItemTypeEnum.teapot)}
                {getItemElement(CraftingItemTypeEnum.money)}
            </div>
            <div style={rowStyle} className="row h-50">
                {getItemElement(CraftingItemTypeEnum.bag)}
                {getItemElement(CraftingItemTypeEnum.boot)}
                {getItemElement(CraftingItemTypeEnum.hammer)}
                {getItemElement(CraftingItemTypeEnum.sword)}
                {getItemElement(CraftingItemTypeEnum.teapot)}
                {getItemElement(CraftingItemTypeEnum.money)}
            </div>
        </div>
    }

    const clearingStyle: CSSProperties = {
        width: '20.8%',
        height: '6.8%',
        left: '21.1%',
        top: '2%'
    }

    return (
        getItemsElement()
    )
}