import { CraftingItemTypeEnum } from "../Enums/CraftingItemTypeEnum";
import bagImage from "../Assets/Items/bag.png";
import bootImage from "../Assets/Items/boot.png";
import crossbowImage from "../Assets/Items/crossbow.png";
import hammerImage from "../Assets/Items/hammer.png";
import swordImage from "../Assets/Items/sword.png";
import teapotImage from "../Assets/Items/teapot.png";
import moneypotImage from "../Assets/Items/money.png";
import React from "react";

interface IProps {
    craftingItemType?: CraftingItemTypeEnum;
}

export function CraftingItemComponent(props: IProps) {

    const getItemImage = (): string | undefined => {
        switch (props.craftingItemType) {
            case CraftingItemTypeEnum.bag:
                return bagImage;
            case CraftingItemTypeEnum.boot:
                return bootImage;
            case CraftingItemTypeEnum.crossbow:
                return crossbowImage;
            case CraftingItemTypeEnum.hammer:
                return hammerImage;
            case CraftingItemTypeEnum.sword:
                return swordImage;
            case CraftingItemTypeEnum.teapot:
                return teapotImage;
            case CraftingItemTypeEnum.money:
                return moneypotImage;
            default:
                return undefined;
        }
    }

    return (
        <img className="h-100" src={getItemImage()} />
    )
}