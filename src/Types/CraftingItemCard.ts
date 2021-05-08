import { CraftingCard } from "./CraftingCard";
import { ClearingTypeEnum } from "../Enums/ClearingType";
import { CraftingItemTypeEnum } from "../Enums/CraftingItemTypeEnum";
import { CardTypeEnum } from "../Enums/CardTypeEnum";

export class CraftingItemCard extends CraftingCard {
    victoryPoints: number;
    craftinItemType: CraftingItemTypeEnum;

    constructor(cardType: CardTypeEnum,
        craftingClearings: ClearingTypeEnum[],
        imageName: string,
        victoryPoints: number,
        craftinItemType: CraftingItemTypeEnum) {

        super(cardType, imageName, craftingClearings);

        this.victoryPoints = victoryPoints;
        this.craftinItemType = craftinItemType;
    }
}