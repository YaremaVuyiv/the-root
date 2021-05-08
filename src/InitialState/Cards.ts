import fox_AnvilImage from '../Assets/Cards/Anvil.png';
import bird_ArmorersImage from '../Assets/Cards/Armorers.png';
import bird_AmbushImage from '../Assets/Cards/BirdAmbush.png';
import bird_ArmsTraderImage from '../Assets/Cards/ArmsTrader.png';
import rabbit_BakeSaleImage from '../Assets/Cards/BakeSale.png';
import rabbit_BetterBorrowBankImage from '../Assets/Cards/BetterBorrowBank.png';
import bird_CrossbowImage from '../Assets/Cards/BirdCrossbow.png'
import bird_BirdyBindleImage from '../Assets/Cards/BirdyBindle.png';
import bird_BrutalTacticsImage from '../Assets/Cards/BrutalTactics.png';
import rabbit_CobblerImage from '../Assets/Cards/Cobbler.png';
import mouse_CodeBreakersImage from '../Assets/Cards/CodeBreakers.png';
import rabbit_CommandWarrenImage from '../Assets/Cards/CommandWarren.png';
import fox_FavorImage from '../Assets/Cards/FavorOfTheFoxes.png';
import mouse_FavorImage from '../Assets/Cards/FavorOfTheMice.png';
import rabbit_FavorImage from '../Assets/Cards/FavorOfTheRabbits.png';
import fox_AmbushImage from '../Assets/Cards/FoxAmbush.png';
import fox_DominanceImage from '../Assets/Cards/FoxDominance.png';
import fox_FolkSteelImage from '../Assets/Cards/FoxFolkSteel.png';
import fox_RootTeaImage from '../Assets/Cards/FoxRootTea.png';
import fox_TravelGearImage from '../Assets/Cards/FoxTravelGear.png';
import fox_GentlyUsedKnapsackImage from '../Assets/Cards/GentlyUsedKnapsack.png';
import mouse_InvestmentsImage from '../Assets/Cards/Investments.png';
import mouse_AmbushImage from '../Assets/Cards/MouseAmbush.png';
import mouse_CrossbowImage from '../Assets/Cards/MouseCrossbow.png';
import mouse_DominanceImage from '../Assets/Cards/MouseDominance.png';
import mouse_MouseInASackImage from '../Assets/Cards/MouseInASack.png';
import mouse_RootTeaImage from '../Assets/Cards/MouseRootTea.png';
import mouse_TravelGearImage from '../Assets/Cards/MouseTravelGear.png';
import fox_ProtectionRacketImage from '../Assets/Cards/ProtectionRacket.png';
import rabbit_AmbushImage from '../Assets/Cards/RabbitAmbush.png';
import rabbit_DominanceImage from '../Assets/Cards/RabbitDominance.png';
import rabbit_RootTeaImage from '../Assets/Cards/RabbitRootTea.png';
import bird_RoyalClaimImage from '../Assets/Cards/RoyalClaim.png';
import bird_SappersImage from '../Assets/Cards/Sappers.png';
import mouse_ScoutingPartyImage from '../Assets/Cards/ScoutingParty.png';
import rabbit_SmugglersTrailImage from '../Assets/Cards/SmugglersTrail.png';
import fox_StandAndDeliverImage from '../Assets/Cards/StandAndDeliver.png';
import mouse_SwordImage from '../Assets/Cards/Sword.png';
import fox_TaxCollectorImage from '../Assets/Cards/TaxCollector.png';
import rabbit_VisitorToFriendsImage from '../Assets/Cards/VisitorToFriends.png';
import bird_WoodlandRunnersImage from '../Assets/Cards/WoodlandRunners.png';
import bird_DominanceImage from '../Assets/Cards/BirdDominance.png';
import { ClearingTypeEnum } from '../Enums/ClearingType';
import { BaseCard } from '../Types/BaseCard';
import { CardTypeEnum } from '../Enums/CardTypeEnum';
import { CardActionTypeEnum } from '../Enums/CardActionTypeEnum';
import { CraftingItemCard } from '../Types/CraftingItemCard';
import { CraftingItemTypeEnum } from '../Enums/CraftingItemTypeEnum';
import { CraftingCard } from '../Types/CraftingCard';

export default {
    'card1': {
        card: new BaseCard(CardTypeEnum.bird, bird_AmbushImage),
        cardActionType: CardActionTypeEnum.ambush
    },
    'card2': {
        card: new BaseCard(CardTypeEnum.bird, bird_AmbushImage),
        cardActionType: CardActionTypeEnum.ambush
    },
    'card3': {
        card: new CraftingItemCard(
            CardTypeEnum.bird, 
            [
                ClearingTypeEnum.mouse
            ], 
            bird_BirdyBindleImage, 
            1, 
            CraftingItemTypeEnum.bag),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card4': {
        card: new CraftingCard(CardTypeEnum.bird, bird_ArmorersImage, [ClearingTypeEnum.fox]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card5': {
        card: new CraftingCard(CardTypeEnum.bird, bird_ArmorersImage, [ClearingTypeEnum.fox]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card6': {
        card: new CraftingItemCard(
            CardTypeEnum.bird, 
            [
                ClearingTypeEnum.rabbit
            ], 
            bird_WoodlandRunnersImage, 
            1, 
            CraftingItemTypeEnum.boot),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card7': {
        card: new CraftingItemCard(
            CardTypeEnum.bird, 
            [
                ClearingTypeEnum.fox,
                ClearingTypeEnum.fox
            ], 
            bird_ArmsTraderImage, 
            2, 
            CraftingItemTypeEnum.sword),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card8': {
        card: new CraftingItemCard(
            CardTypeEnum.bird, 
            [
                ClearingTypeEnum.fox
            ], 
            bird_CrossbowImage, 
            1, 
            CraftingItemTypeEnum.crossbow),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card9': {
        card: new CraftingCard(CardTypeEnum.bird, bird_BrutalTacticsImage, [ClearingTypeEnum.fox, ClearingTypeEnum.fox]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card10': {
        card: new CraftingCard(CardTypeEnum.bird, bird_BrutalTacticsImage, [ClearingTypeEnum.fox, ClearingTypeEnum.fox]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card11': {
        card: new CraftingCard(CardTypeEnum.bird, bird_SappersImage, [ClearingTypeEnum.mouse]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card12': {
        card: new CraftingCard(CardTypeEnum.bird, bird_SappersImage, [ClearingTypeEnum.mouse]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card13': {
        card: new CraftingCard(
            CardTypeEnum.bird, 
            bird_RoyalClaimImage, 
            [
                ClearingTypeEnum.fox,
                ClearingTypeEnum.fox,
                ClearingTypeEnum.fox,
                ClearingTypeEnum.fox
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card14': {
        card: new BaseCard(CardTypeEnum.bird, bird_DominanceImage),
        cardActionType: CardActionTypeEnum.dominance
    },
    'card15': {
        card: new CraftingCard(
            CardTypeEnum.rabbit, 
            rabbit_CobblerImage, 
            [
                ClearingTypeEnum.rabbit,
                ClearingTypeEnum.rabbit
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card16': {
        card: new CraftingCard(
            CardTypeEnum.rabbit, 
            rabbit_CobblerImage, 
            [
                ClearingTypeEnum.rabbit,
                ClearingTypeEnum.rabbit
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card17': {
        card: new CraftingCard(
            CardTypeEnum.rabbit, 
            rabbit_CommandWarrenImage, 
            [
                ClearingTypeEnum.rabbit,
                ClearingTypeEnum.rabbit
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card18': {
        card: new CraftingCard(
            CardTypeEnum.rabbit, 
            rabbit_CommandWarrenImage, 
            [
                ClearingTypeEnum.rabbit,
                ClearingTypeEnum.rabbit
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card19': {
        card: new CraftingCard(
            CardTypeEnum.rabbit, 
            rabbit_BetterBorrowBankImage, 
            [
                ClearingTypeEnum.rabbit,
                ClearingTypeEnum.rabbit
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card20': {
        card: new CraftingCard(
            CardTypeEnum.rabbit, 
            rabbit_BetterBorrowBankImage, 
            [
                ClearingTypeEnum.rabbit,
                ClearingTypeEnum.rabbit
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card21': {
        card: new CraftingItemCard(
            CardTypeEnum.rabbit, 
            [
                ClearingTypeEnum.rabbit
            ], 
            rabbit_VisitorToFriendsImage, 
            1, 
            CraftingItemTypeEnum.boot),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card22': {
        card: new CraftingItemCard(
            CardTypeEnum.rabbit, 
            [
                ClearingTypeEnum.rabbit,
                ClearingTypeEnum.rabbit
            ], 
            rabbit_BakeSaleImage, 
            3, 
            CraftingItemTypeEnum.money),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card23': {
        card: new CraftingItemCard(
            CardTypeEnum.rabbit, 
            [
                ClearingTypeEnum.mouse
            ], 
            rabbit_RootTeaImage, 
            2, 
            CraftingItemTypeEnum.teapot),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card24': {
        card: new CraftingItemCard(
            CardTypeEnum.rabbit, 
            [
                ClearingTypeEnum.mouse
            ], 
            rabbit_SmugglersTrailImage, 
            1, 
            CraftingItemTypeEnum.bag),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card25': {
        card: new BaseCard(CardTypeEnum.rabbit, rabbit_DominanceImage),
        cardActionType: CardActionTypeEnum.dominance
    },
    'card26': {
        card: new BaseCard(CardTypeEnum.rabbit, rabbit_AmbushImage),
        cardActionType: CardActionTypeEnum.ambush
    },
    'card27': {
        card: new CraftingCard(
            CardTypeEnum.rabbit, 
            rabbit_FavorImage,
            [
                ClearingTypeEnum.rabbit,
                ClearingTypeEnum.rabbit,
                ClearingTypeEnum.rabbit
            ]),
        cardActionType: CardActionTypeEnum.immidiateEfectCrafting
    },
    'card28': {
        card: new CraftingCard(
            CardTypeEnum.mouse, 
            mouse_ScoutingPartyImage, 
            [
                ClearingTypeEnum.mouse,
                ClearingTypeEnum.mouse
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card29': {
        card: new CraftingCard(
            CardTypeEnum.mouse, 
            mouse_ScoutingPartyImage, 
            [
                ClearingTypeEnum.mouse,
                ClearingTypeEnum.mouse
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card30': {
        card: new CraftingCard(
            CardTypeEnum.mouse, 
            mouse_CodeBreakersImage, 
            [
                ClearingTypeEnum.mouse
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card31': {
        card: new CraftingCard(
            CardTypeEnum.mouse, 
            mouse_CodeBreakersImage, 
            [
                ClearingTypeEnum.mouse
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card32': {
        card: new CraftingItemCard(
            CardTypeEnum.mouse, 
            [
                ClearingTypeEnum.mouse
            ],
            mouse_MouseInASackImage,
            1,
            CraftingItemTypeEnum.bag),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card33': {
        card: new CraftingItemCard(
            CardTypeEnum.mouse, 
            [
                ClearingTypeEnum.mouse
            ],
            mouse_RootTeaImage,
            2,
            CraftingItemTypeEnum.teapot),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card34': {
        card: new CraftingItemCard(
            CardTypeEnum.mouse, 
            [
                ClearingTypeEnum.rabbit,
                ClearingTypeEnum.rabbit
            ], 
            mouse_InvestmentsImage, 
            3, 
            CraftingItemTypeEnum.money),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card35': {
        card: new CraftingItemCard(
            CardTypeEnum.mouse, 
            [
                ClearingTypeEnum.fox
            ], 
            mouse_CrossbowImage, 
            1, 
            CraftingItemTypeEnum.crossbow),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card36': {
        card: new CraftingItemCard(
            CardTypeEnum.mouse, 
            [
                ClearingTypeEnum.rabbit
            ], 
            mouse_TravelGearImage, 
            2, 
            CraftingItemTypeEnum.boot),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card37': {
        card: new CraftingItemCard(
            CardTypeEnum.mouse, 
            [
                ClearingTypeEnum.mouse
            ], 
            mouse_SwordImage, 
            1, 
            CraftingItemTypeEnum.sword),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card38': {
        card: new BaseCard(CardTypeEnum.mouse, mouse_DominanceImage),
        cardActionType: CardActionTypeEnum.dominance
    },
    'card39': {
        card: new BaseCard(CardTypeEnum.mouse, mouse_AmbushImage),
        cardActionType: CardActionTypeEnum.ambush
    },
    'card40': {
        card: new CraftingCard(
            CardTypeEnum.mouse, 
            mouse_FavorImage,
            [
                ClearingTypeEnum.mouse,
                ClearingTypeEnum.mouse,
                ClearingTypeEnum.mouse
            ]),
        cardActionType: CardActionTypeEnum.immidiateEfectCrafting
    },
    'card41': {
        card: new CraftingCard(
            CardTypeEnum.fox, 
            fox_StandAndDeliverImage, 
            [
                ClearingTypeEnum.mouse,
                ClearingTypeEnum.mouse,
                ClearingTypeEnum.mouse
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card42': {
        card: new CraftingCard(
            CardTypeEnum.fox, 
            fox_StandAndDeliverImage, 
            [
                ClearingTypeEnum.mouse,
                ClearingTypeEnum.mouse,
                ClearingTypeEnum.mouse
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card43': {
        card: new CraftingCard(
            CardTypeEnum.fox, 
            fox_TaxCollectorImage, 
            [
                ClearingTypeEnum.mouse,
                ClearingTypeEnum.fox,
                ClearingTypeEnum.rabbit
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card44': {
        card: new CraftingCard(
            CardTypeEnum.fox, 
            fox_TaxCollectorImage, 
            [
                ClearingTypeEnum.mouse,
                ClearingTypeEnum.fox,
                ClearingTypeEnum.rabbit
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card45': {
        card: new CraftingCard(
            CardTypeEnum.fox, 
            fox_TaxCollectorImage, 
            [
                ClearingTypeEnum.mouse,
                ClearingTypeEnum.fox,
                ClearingTypeEnum.rabbit
            ]),
        cardActionType: CardActionTypeEnum.permanentEffectCrafting
    },
    'card46': {
        card: new CraftingItemCard(
            CardTypeEnum.fox, 
            [
                ClearingTypeEnum.mouse
            ],
            fox_GentlyUsedKnapsackImage,
            1,
            CraftingItemTypeEnum.bag),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card47': {
        card: new CraftingItemCard(
            CardTypeEnum.fox, 
            [
                ClearingTypeEnum.mouse,
            ], 
            fox_RootTeaImage, 
            2, 
            CraftingItemTypeEnum.teapot),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card48': {
        card: new CraftingItemCard(
            CardTypeEnum.fox, 
            [
                ClearingTypeEnum.rabbit
            ], 
            fox_TravelGearImage, 
            1, 
            CraftingItemTypeEnum.boot),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card49': {
        card: new CraftingItemCard(
            CardTypeEnum.fox, 
            [
                ClearingTypeEnum.rabbit,
                ClearingTypeEnum.rabbit
            ], 
            fox_ProtectionRacketImage, 
            3, 
            CraftingItemTypeEnum.money),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card50': {
        card: new CraftingItemCard(
            CardTypeEnum.fox, 
            [
                ClearingTypeEnum.fox,
                ClearingTypeEnum.fox
            ], 
            fox_FolkSteelImage, 
            2, 
            CraftingItemTypeEnum.sword),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card51': {
        card: new CraftingItemCard(
            CardTypeEnum.fox, 
            [
                ClearingTypeEnum.fox
            ], 
            fox_AnvilImage, 
            2, 
            CraftingItemTypeEnum.hammer),
        cardActionType: CardActionTypeEnum.itemCrafting
    },
    'card52': {
        card: new BaseCard(CardTypeEnum.fox, fox_DominanceImage),
        cardActionType: CardActionTypeEnum.dominance
    },
    'card53': {
        card: new BaseCard(CardTypeEnum.fox, fox_AmbushImage),
        cardActionType: CardActionTypeEnum.ambush
    },
    'card54': {
        card: new CraftingCard(
            CardTypeEnum.fox, 
            fox_FavorImage,
            [
                ClearingTypeEnum.fox,
                ClearingTypeEnum.fox,
                ClearingTypeEnum.fox
            ]),
        cardActionType: CardActionTypeEnum.immidiateEfectCrafting
    },
}