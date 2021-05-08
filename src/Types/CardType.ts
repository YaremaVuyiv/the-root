import { BaseCard } from "./BaseCard";
import { CardActionTypeEnum } from "../Enums/CardActionTypeEnum";

export type CardType = {
    card: BaseCard;
    cardActionType: CardActionTypeEnum;
}