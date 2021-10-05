import { Faction } from "../Enums/Faction";
import { BuildingTypeEnum, RuinTypeEnum, SlotTypeEnum } from "../Enums/SlotTypeEnum";

export default function getFactionBySlotType(slotType: SlotTypeEnum | null): Faction | null {
    switch (slotType) {
        case BuildingTypeEnum.nest: return Faction.EyrieDynasties;
        case BuildingTypeEnum.recruiter: return Faction.MarquiseDeCat;
        case BuildingTypeEnum.sawmill: return Faction.MarquiseDeCat;
        case BuildingTypeEnum.workshop: return Faction.MarquiseDeCat;
        case RuinTypeEnum.ruin: return Faction.WoodlandAllianse;
        default: return null;
    }
}