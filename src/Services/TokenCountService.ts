import { TokenTypeEnum } from "../Enums/TokenTypeEnum";

export default function ShouldShowCountByTokenType(tokenType: TokenTypeEnum): boolean {
    switch (tokenType) {
        case TokenTypeEnum.wood: return true;
        default: return false;
    }
}