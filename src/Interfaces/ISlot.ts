import { IBuilding } from "./IBuilding";

export interface ISlot{
    building: IBuilding;
    
    isEmpty(): boolean;
    buid(building: IBuilding): void;
}