import { Faction } from "../Enums/Faction";
import { getAllFactions } from "../store/Selectors";
import { FactionPiecesCountService, FactionPiecesServiceFactory } from "./Marquise/MarquisePiecesService";

interface IDominanceCheckService {
    isDominating(clearingId: number, faction: Faction): boolean;
}

class DominanceCheckService implements IDominanceCheckService {
    public isDominating(clearingId: number, faction: Faction): boolean {
        let factionPiecesService: FactionPiecesCountService = FactionPiecesServiceFactory(faction);
        const factionPiecesCount: number = factionPiecesService.getClearingPiecesCount(clearingId);

        if (factionPiecesCount <= 0) {
            return false;
        }

        const factions = getAllFactions();
        let isDominating: boolean = true;
        factions.forEach(currentFaction => {
            if (currentFaction.faction !== faction) {

                factionPiecesService = FactionPiecesServiceFactory(currentFaction.faction);
                const currentFactionPiecesCount = factionPiecesService.getClearingPiecesCount(clearingId);

                if (currentFactionPiecesCount >= factionPiecesCount) {
                    isDominating = false;
                }
            }
        })

        return isDominating;
    }
}

export const dominanceCheckService: IDominanceCheckService = new DominanceCheckService();