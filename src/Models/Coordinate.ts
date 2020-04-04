export class Coordinate{
    constructor(left: number, top: number){
        this._left = left;
        this._top = top;
    }

    private _left: number;
    private _top: number;

    public get Left(): number{
        return this._left;
    }

    public get Top(): number{
        return this._top;
    }
}