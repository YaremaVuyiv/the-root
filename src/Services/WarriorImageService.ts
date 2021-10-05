import { Faction } from "../Enums/Faction";
import birdWarriorImage from '../Assets/birdWarrior.png';
import catWarriorImage from '../Assets/catWarrior.png';
import allianceWarriorImage from '../Assets/allianceWarrior.png';

export default function GetWarriorImageByFactionType(faction: Faction): string {
    switch (faction) {
        case Faction.MarquiseDeCat: return catWarriorImage;
        case Faction.EyrieDynasties: return birdWarriorImage;
        case Faction.WoodlandAllianse: return allianceWarriorImage;
        default: return '';
    }
}