import { TokenTypeEnum } from "../../Enums/TokenTypeEnum";

interface ClearingTokens {
    id: number,
    tokenType: TokenTypeEnum,
    tokensNumber: number,
    clearingId: number
}

type ClearingTokensDictionary = {
    [id: number]: ClearingTokens
}

export type ClearingTokensState = {
    ids: number[],
    byId: ClearingTokensDictionary
}

export const initialState: ClearingTokensState = {
    ids: [1, 2, 3],
    byId: {
        1: {
            id: 1,
            tokenType: TokenTypeEnum.wood,
            tokensNumber: 4,
            clearingId: 4
        },
        2: {
            id: 2,
            tokenType: TokenTypeEnum.keep,
            tokensNumber: 1,
            clearingId: 6
        },
        3: {
            id: 3,
            tokenType: TokenTypeEnum.support,
            tokensNumber: 1,
            clearingId: 6
        }
    }
}