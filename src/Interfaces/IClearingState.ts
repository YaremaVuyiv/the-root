import { ISlot } from "./ISlot";
import { IWarrior } from "./IWarrior";
import { IToken } from "./IToken";

export interface IClearingState{
    slots: ISlot[];
    warriors: IWarrior[];
    tokens: IToken[];
    
    addToken(token: IToken): void;
    addWariors(warriors: IWarrior[]): void;
}