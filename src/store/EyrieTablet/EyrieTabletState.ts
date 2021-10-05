import { CardTypeEnum } from "../../Enums/CardTypeEnum";
import { EyrieLeaderEnum } from "../../Enums/EyrieLeaderEnum";


export interface EyrieTabletState {
    leader: EyrieLeaderEnum | null;
    recruitList: CardTypeEnum[];
    moveList: CardTypeEnum[];
    battleList: CardTypeEnum[];
    buildList: CardTypeEnum[];
}

export const initialState: EyrieTabletState = {
    leader: null,
    moveList: [],
    recruitList: [],
    battleList: [],
    buildList: []
}
