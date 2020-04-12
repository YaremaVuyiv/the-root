export enum Faction{
    MarquiseDeCat,
    EyrieDynasties,
    WoodlandAllianse
}

export function getFactionNameById(faction: Faction): string {
    switch (faction) {
        case Faction.MarquiseDeCat:
            return 'Marquise';
        case Faction.EyrieDynasties:
            return 'Eyrie';
        case Faction.WoodlandAllianse:
            return 'Alliance';
        default:
            return '';
    }
}