import { Faction } from "../../Enums/Faction";
import { AppState, store } from "../../store/store"
import getFactionBySlotType from "../SlotFactionService";

interface IClearingPieces {
    faction: Faction,
    piecesCount: number
}

const getClearingPiecesCount = (clearingId: number): Map<Faction, number> => {
    const storeState: AppState = store.getState();
    const map = new Map<Faction, number>();

    const warriors: IClearingPieces[] = storeState.clearingWarriorsReducer.ids.map(id => storeState.clearingWarriorsReducer.byId[id])
            .filter(x => x.clearingId === clearingId && x.warriorsNumber > 0)
            .map(x => {
                return {
                    faction: x.faction,
                    piecesCount: x.warriorsNumber
                }
            });

    const buildings: IClearingPieces[] = storeState.slotsReducer.ids.map(id => storeState.slotsReducer.byId[id])
            .filter(x => x.clearingId === clearingId && x.type !== null)
            .map(x => {
                return {
                    faction: getFactionBySlotType(x.type)!,
                    piecesCount: 1
                }
            });

    warriors.forEach(x => {
        map.set(x.faction, (map.get(x.faction) ?? 0) + x.piecesCount);
    });

    buildings.forEach(x => {
        map.set(x.faction, (map.get(x.faction) ?? 0) + x.piecesCount);
    });

    return map;
}

export default getClearingPiecesCount;