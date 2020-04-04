import { Coordinate } from "./Coordinate";
import { SlotModel } from "./SlotModel";
import { ClearingTypeEnum } from "../Enums/ClearingType";

export class ClearingModel {
    constructor(coordinates: Coordinate, slots: SlotModel[], type: ClearingTypeEnum){
        this._coordinates = coordinates;
        this._slots = slots;
        this._type = type;
    }

    private _coordinates: Coordinate;
    private _slots: SlotModel[];
    private _type: ClearingTypeEnum;

    public get Slots(): SlotModel[]{
        return [...this._slots];
    }

    public get Coordinates(): Coordinate{
        return this._coordinates;
    }

    public get Type(): ClearingTypeEnum{
        return this._type;
    }
}