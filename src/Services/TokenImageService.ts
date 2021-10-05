import { TokenTypeEnum } from "../Enums/TokenTypeEnum";
import supportImage from '../Assets/support.png';
import woodImage from '../Assets/wood.png';
import keepImage from '../Assets/keep.png';

export default function GetImageNameByTokenType(tokenType: TokenTypeEnum): string {
    switch (tokenType) {
        case TokenTypeEnum.keep: return keepImage;
        case TokenTypeEnum.support: return supportImage;
        case TokenTypeEnum.wood: return woodImage;
        default: return '';
    }
}