import { CardTypeEnum } from "../../Enums/CardTypeEnum";

export const ADD_EYRIETABLET_MOVEMENT = 'ADD_EYRIETABLET_MOVEMENT';
export const ADD_EYRIETABLET_RECRUIT = 'ADD_EYRIETABLET_RECRUIT';
export const ADD_EYRIETABLET_BATTLE = 'ADD_EYRIETABLET_BATTLE';
export const ADD_EYRIETABLET_BUILD = 'ADD_EYRIETABLET_BUILD';

interface EyrieTabletAction {
    payload: CardTypeEnum;
}

interface AddMovementAction extends EyrieTabletAction {
    type: "ADD_EYRIETABLET_MOVEMENT";
}

interface AddRecruitAction extends EyrieTabletAction {
    type: "ADD_EYRIETABLET_RECRUIT";
}

interface AddBattleAction extends EyrieTabletAction {
    type: "ADD_EYRIETABLET_BATTLE";
}

interface AddBuidAction extends EyrieTabletAction {
    type: "ADD_EYRIETABLET_BUILD";
}

export type EyrieTabletActions = AddMovementAction |
AddRecruitAction |
AddBattleAction |
AddBuidAction;