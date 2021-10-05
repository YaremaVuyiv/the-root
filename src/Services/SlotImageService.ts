import sawmillImage from "../Assets/sawmill.png";
import workshopImage from "../Assets/workshop.png";
import recruiterImage from "../Assets/recruiter.png";
import nestImage from "../Assets/nest.png";
import ruinImage from "../Assets/ruin.png";
import { BuildingTypeEnum, RuinTypeEnum, SlotTypeEnum } from "../Enums/SlotTypeEnum";

export default function GetImageNameBySlotType(slotType: SlotTypeEnum | null): string {
    switch (slotType) {
        case BuildingTypeEnum.nest:
            return nestImage;
        case BuildingTypeEnum.recruiter:
            return recruiterImage;
        case BuildingTypeEnum.sawmill:
            return sawmillImage;
        case BuildingTypeEnum.workshop:
            return workshopImage;
        case RuinTypeEnum.ruin:
            return ruinImage;
        default:
            return '';
    }
}