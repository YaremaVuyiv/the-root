import { Faction } from '../../../Enums/Faction'

export interface FactionsState {
    factions: FactionState[];
}

export interface FactionState {
    faction: Faction;
    victoryPoints: number | null;
}

export const initialState: FactionsState = {
    factions: [
        {
            faction: Faction.MarquiseDeCat,
            victoryPoints: 0
        },
        {
            faction: Faction.EyrieDynasties,
            victoryPoints: 0
        }
    ]
}