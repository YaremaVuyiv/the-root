import { Faction } from "../../Enums/Faction";
import { SlotTypeEnum } from "../../Enums/SlotTypeEnum";
import { getClearingById } from "../../store/Selectors";
import { store } from "../../store/store"

const getClearingPiecesCount = (clearingId: number, faction: Faction, buildingTypes: SlotTypeEnum[]): number => {
    const clearing = getClearingById(clearingId);
    const warriorsCount = clearing.warriors
        .filter(warrior => warrior.type === faction)
        .length;
    const slots = clearing.slotIds.map(id => store.getState().slotsReducer.byId[id]);
    const marquiseBuildingsCount = slots.filter(x =>
        buildingTypes.includes(x.type))
        .length;

    return warriorsCount + marquiseBuildingsCount;
}

export interface FactionPiecesCountService {
    getClearingPiecesCount(clearingId: number): number;
}

class MarquisePiecesService implements FactionPiecesCountService {
    public getClearingPiecesCount(clearingId: number): number {
        return getClearingPiecesCount(clearingId, Faction.MarquiseDeCat, [SlotTypeEnum.recruiter, SlotTypeEnum.sawmill, SlotTypeEnum.workshop]);
    }
}

class EyriePiecesService implements FactionPiecesCountService {
    public getClearingPiecesCount(clearingId: number): number {
        return getClearingPiecesCount(clearingId, Faction.EyrieDynasties, [SlotTypeEnum.nest]);
    }
}

class WoodlandAlliansePiecesService implements FactionPiecesCountService {
    public getClearingPiecesCount(clearingId: number): number {
        return getClearingPiecesCount(clearingId, Faction.WoodlandAllianse, [SlotTypeEnum.ruin]);
    }
}

const marquisePiecesService: FactionPiecesCountService = new MarquisePiecesService();
const eyriePiecesService: FactionPiecesCountService = new EyriePiecesService();
const woodlandAlliansePiecesService: FactionPiecesCountService = new WoodlandAlliansePiecesService();

export function FactionPiecesServiceFactory(faction: Faction): FactionPiecesCountService {
    switch (faction) {
        case Faction.MarquiseDeCat:
            return marquisePiecesService;
        case Faction.EyrieDynasties:
            return eyriePiecesService;
        case Faction.WoodlandAllianse:
            return woodlandAlliansePiecesService;
        default:
            return marquisePiecesService;
    }
}