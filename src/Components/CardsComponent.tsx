import React from "react";
import { BaseCard } from "../Types/BaseCard";

export interface ICardsComponentProps {
    cards: BaseCard[];
}

export interface ICardsComponentState {
    cards: BaseCard[];
}

export class CardsComponent extends React.Component<ICardsComponentProps, ICardsComponentState>{
    constructor(props: ICardsComponentProps) {
        super(props);

        this.state = {
            cards: this.props.cards
        }
    }

    getCardElements(): JSX.Element[] | null {
        return this.state.cards.map((card, index) =>
            <li
                key={index}
                className='mx-1 p-0'
                style={{
                    textAlign: 'center',
                    backgroundImage: `url(${card.GetImageName})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: '26vh',
                    height: '35vh',
                    position: 'relative' as 'relative'
                }}>
            </li>
        );
    }

    render() {
        return (
            <ul
            className="p-0 m-0"
            style=
            {{
                'listStyleType': 'none'
            }}>
                {this.getCardElements()}
            </ul>
        );
    }
}
