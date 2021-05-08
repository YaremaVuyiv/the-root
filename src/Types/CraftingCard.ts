import { BaseCard } from "./BaseCard";
import { ClearingTypeEnum } from "../Enums/ClearingType";
import { CardTypeEnum } from "../Enums/CardTypeEnum";

export class CraftingCard extends BaseCard {
    craftingClearings: ClearingTypeEnum[];

    constructor(cardType: CardTypeEnum,
        imageName: string,
        craftingClearings: ClearingTypeEnum[]) {

        super(cardType, imageName);

        this.craftingClearings = craftingClearings;
    }
}