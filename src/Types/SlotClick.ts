import { IAppState } from "../App";
import { SlotTypeEnum } from "../Enums/SlotType";
import { LocationTypeEnum } from "../Enums/LocationTypeEnum";
import { Faction } from "../Enums/Faction";

export default function slotClick(prevState: IAppState, id: string, location: LocationTypeEnum, type: SlotTypeEnum): IAppState {
    if (location === LocationTypeEnum.tablet) {
        switch (type) {
            case SlotTypeEnum.sawmill:
                const sawmills = prevState.marquiseTablet.sawmills.filter((sawmill, index) =>
                    index !== prevState.marquiseTablet.sawmills.length - 1);

                prevState.marquiseTablet.sawmills = sawmills;
                prevState.modalIsOpen = false;
                prevState.chosenBuilding = {
                    id: '',
                    slotType: SlotTypeEnum.sawmill,
                    locationType: LocationTypeEnum.tablet,
                    fractionType: Faction.MarquiseDeCat
                }
                return prevState;

                break;
            case SlotTypeEnum.workshop:

                const workshops = prevState.marquiseTablet.workshops.filter((workshop, index) =>
                    index !== prevState.marquiseTablet.workshops.length - 1);

                prevState.marquiseTablet.workshops = workshops;
                prevState.modalIsOpen = false;
                prevState.chosenBuilding = {
                    id: '',
                    slotType: SlotTypeEnum.workshop,
                    locationType: LocationTypeEnum.tablet,
                    fractionType: Faction.MarquiseDeCat
                }
                return prevState;

            case SlotTypeEnum.recruiter:

                const recruiters = prevState.marquiseTablet.recruiters.filter((recruiter, index) =>
                    index !== prevState.marquiseTablet.recruiters.length - 1);

                prevState.marquiseTablet.recruiters = recruiters;
                prevState.modalIsOpen = false;
                prevState.chosenBuilding = {
                    id: '',
                    slotType: SlotTypeEnum.recruiter,
                    locationType: LocationTypeEnum.tablet,
                    fractionType: Faction.MarquiseDeCat
                }
                return prevState;
        }
    } else if (location === LocationTypeEnum.map) {
        for (let cl in prevState.clearings) {
            let slots = prevState.clearings[cl].slots;
            for (let sl in slots) {
                if (sl === id && slots[sl].type === SlotTypeEnum.empty) {
                    slots[sl].type = prevState.chosenBuilding === null ? slots[sl].type : prevState.chosenBuilding?.slotType;
                    prevState.chosenBuilding = null;
                }
            }
        }
        return prevState;
    }

    return prevState;
}