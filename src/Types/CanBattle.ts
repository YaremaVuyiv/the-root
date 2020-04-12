import { ClearingDictionaryType } from "./ClearingDictionaryType";
import { Faction } from "../Enums/Faction";

export function canBattle(faction: Faction, clearings: ClearingDictionaryType, clearingId: string): boolean {
    let canBattle = false;
    const clearing = clearings[clearingId];

    switch (faction) {
        case Faction.MarquiseDeCat:
            canBattle = clearing.catWarriorsNumber > 0 &&
                (clearing.birdWarriorsNumber > 0 ||
                    clearing.allianceWarriorsNumber > 0 ||
                    clearing.hasWagabond);

            break;
        case Faction.EyrieDynasties:
            canBattle = clearing.birdWarriorsNumber > 0 &&
                (clearing.catWarriorsNumber > 0 ||
                    clearing.allianceWarriorsNumber > 0 ||
                    clearing.hasWagabond);
            break;

        case Faction.WoodlandAllianse:
            canBattle = clearing.allianceWarriorsNumber > 0 &&
                (clearing.catWarriorsNumber > 0 ||
                    clearing.birdWarriorsNumber > 0 ||
                    clearing.hasWagabond);

            break;
    }

    return canBattle;
}