import { CardTypeEnum } from "../Enums/CardTypeEnum";

export class BaseCard {
    protected cardType: CardTypeEnum;
    protected imageName: string;

    constructor(cardType: CardTypeEnum, imageName: string) {
        this.cardType = cardType;
        this.imageName = imageName;
    }

    public get GetImageName() {
        return this.imageName;
    }

    public get GetCardType() {
        return this.cardType;
    }
}