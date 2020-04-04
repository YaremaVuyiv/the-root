import React from 'react';
import image from '../Assets/marquiseTablet.png';
import { Slot } from './Slot';
import { SlotModel } from '../Models/SlotModel';
import { SlotTypeEnum } from '../Enums/SlotType';
import { LocationTypeEnum } from '../Enums/LocationTypeEnum';

const modalStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '77vh',
    width: '99vh',
    position: 'relative' as 'relative'
};

const slotsXPositions = [
    87,
    79.2,
    71.4,
    63.6,
    55.9,
    48.4,
]

const sawmillYPosition = 38.7;
const workshopYPorsition = 49;
const recruiterYPosition = 59.5;

interface IMarquiseTabletProps {
    sawmills: SlotModel[];
    recruiters: SlotModel[];
    workshops: SlotModel[]
    slotClick(id: string, location: LocationTypeEnum, type?: SlotTypeEnum): void;
}

export class MarquiseTablet extends React.Component<IMarquiseTabletProps>{
    render() {
        let sawmills = this.props.sawmills.map((sawmill: SlotModel, index: number) => {
            return <Slot
                key={index}
                locationType={LocationTypeEnum.tablet}
                id={'sawmill'+index}
                top={sawmillYPosition}
                left={slotsXPositions[index]}
                side={8}
                type={sawmill?.slotType}
                slotClick={this.props.slotClick} />
        })

        let workshops = this.props.workshops.map((workshop: SlotModel, index: number) => {
            return <Slot
                key={index}
                id={'workshop'+index}
                locationType={LocationTypeEnum.tablet}
                top={workshopYPorsition}
                left={slotsXPositions[index]}
                side={8}
                type={workshop?.slotType}
                slotClick={this.props.slotClick} />
        })

        let recruiters = this.props.recruiters.map((recruiter: SlotModel, index: number) => {
            return <Slot
                key={index}
                id={'recruiter'+index}
                locationType={LocationTypeEnum.tablet}
                top={recruiterYPosition}
                left={slotsXPositions[index]}
                side={8}
                type={recruiter?.slotType}
                slotClick={this.props.slotClick} />
        })

        return (
            <div style={modalStyle}>
                {sawmills}
                {workshops}
                {recruiters}
            </div>
        );
    }
}