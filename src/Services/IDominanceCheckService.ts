import { Faction } from "../Enums/Faction";
import getClearingPiecesCount from "./Marquise/MarquisePiecesService";

type DominantFactionType = {
    faction: Faction,
    piecesCount: number
}

const isFactionDominant = (clearingId: number, faction: Faction): boolean => {
    return false;
}

const getDominantFactionInClearing = (clearingId: number): Faction | null => {
    const factionsMap = getClearingPiecesCount(clearingId)

    const factions = Array.from(factionsMap.keys());
    if (factions.length === 0) return null;

    const list: DominantFactionType[] = factions
        .map(faction => {
            const factionPiecesCount: number = factionsMap.get(faction)!;

            const dominantFaction: DominantFactionType = {
                faction: faction,
                piecesCount: factionPiecesCount
            }

            return dominantFaction;
        })
        .sort((x1, x2) => x2.piecesCount - x1.piecesCount)
        .filter((x, index, array) => x.piecesCount === array[0].piecesCount);

    if (list.length === 1) return list[0].faction;

    if (list.find(x => x.faction === Faction.EyrieDynasties)) return Faction.EyrieDynasties;

    return null;
}

export default getDominantFactionInClearing;