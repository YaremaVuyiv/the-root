import { Faction } from "../Enums/Faction";
import { ClearingDictionaryType } from "./ClearingDictionaryType";

export function canMove(fraction: Faction, clearings: ClearingDictionaryType, clearingId: string): string[] {
    const clearing = clearings[clearingId];
    const catTokens = clearing.getCatPiecesNumber();
    const birdTokens = clearing.getBirdPiecesNumber();
    const clearingIds = clearings[clearingId].connectedClearings;
    const resultClearingIds = [];

    switch (fraction) {
        case Faction.MarquiseDeCat:
            if (clearing.catWarriorsNumber <= 0) {
                return [];
            }
            
            if (catTokens > birdTokens) {
                return clearingIds;
            }

            for (let id of clearingIds) {
                if (clearings[id].getCatPiecesNumber() > clearings[id].getBirdPiecesNumber()) {
                    resultClearingIds.push(id);
                }
            }

            break;

        case Faction.EyrieDynasties:
            if (clearing.birdWarriorsNumber <= 0) {
                return [];
            }

            if (birdTokens >= catTokens) {
                return clearingIds;
            }

            for (let id of clearingIds) {
                if (clearings[id].getBirdPiecesNumber() >= clearings[id].getCatPiecesNumber()) {
                    resultClearingIds.push(id);
                }
            }

            break;
        default:
            break;
    }

    return resultClearingIds;
}