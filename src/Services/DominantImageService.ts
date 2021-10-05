import { Faction } from "../Enums/Faction";

export default function getImageByFaction(faction: Faction | null): string {
    switch (faction) {
        case Faction.MarquiseDeCat: return '#ff0000';
        case Faction.EyrieDynasties: return '#0000ff';
        case Faction.WoodlandAllianse: return '#00ff00';
        default: return '#000000';
    }
}