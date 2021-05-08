import React from 'react';
import image from '../Assets/eyrieTablet.png';
import { SlotModel } from '../Models/SlotModel';
import { SlotTypeEnum } from '../Enums/SlotTypeEnum';

const modalStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '77vh',
    width: '99vh',
    position: 'relative' as 'relative'
};

const slotsXPositions = [
    89.7,
    82.6,
    75.5,
    68.4,
    61.3,
    54.2,
    47.1
]

const sawmillYPosition = 41.7;

interface IEyrieTabletProps {
    nests: SlotModel[];
    slotClick(id: string, type?: SlotTypeEnum): void;
}

export class EyrieTablet extends React.Component<IEyrieTabletProps>{
    render() {
        /*let nests = this.props.nests.map((nest: SlotModel, index: number) => {
            return <SlotComponent
                key={index}
                locationType={LocationTypeEnum.tablet}
                id={'sawmill' + index}
                top={sawmillYPosition}
                left={slotsXPositions[index]}
                side={8}
                type={nest?.slotType}
                slotClick={this.props.slotClick} />
        })*/

        return (
            <div style={modalStyle}>
            </div>
        );
    }
}