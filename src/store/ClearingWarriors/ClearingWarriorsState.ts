import { Faction } from "../../Enums/Faction";

interface ClearingWarriors {
    id: number,
    faction: Faction,
    warriorsNumber: number,
    clearingId: number
}

export type ClearingWarriorsDictionary = {
    [id: number]: ClearingWarriors
}

export type ClearingWarriorsState = {
    ids: number[],
    byId: ClearingWarriorsDictionary
}

export const initialState: ClearingWarriorsState = {
    ids: [1, 2, 3, 4, 5],
    byId: {
        1: {
            id: 1,
            faction: Faction.MarquiseDeCat,
            warriorsNumber: 4,
            clearingId: 4
        },
        2: {
            id: 2,
            faction: Faction.EyrieDynasties,
            warriorsNumber: 3,
            clearingId: 6
        },
        3: {
            id: 3,
            faction: Faction.MarquiseDeCat,
            warriorsNumber: 2,
            clearingId: 6
        },
        4: {
            id: 4,
            faction: Faction.MarquiseDeCat,
            warriorsNumber: 1,
            clearingId: 8
        },
        5: {
            id: 5,
            faction: Faction.EyrieDynasties,
            warriorsNumber: 1,
            clearingId: 8
        }
    }
}