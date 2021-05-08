import React from 'react';
import image from '../Assets/marquiseTablet.png';
import { SlotModel } from '../Models/SlotModel';
import { SlotTypeEnum } from '../Enums/SlotTypeEnum';
import SlotComponent from './SlotComponent';

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
    workshops: SlotModel[];
    slotClick(id: string, type?: SlotTypeEnum): void;
    onRecruitClick(clearingId?: string): void;
}

export class MarquiseTablet extends React.Component<IMarquiseTabletProps>{
    constructor(props: IMarquiseTabletProps) {
        super(props);

        this.onRecruitClick = this.onRecruitClick.bind(this);
    }

    getSawmillElements(): JSX.Element[] | null {
        return this.props.sawmills.map((sawmill: SlotModel, index: number) => {
            return <SlotComponent
                key={index}
                id={index}/>
        });
    }

    getWorkShopElements(): JSX.Element[] | null {
        return this.props.workshops.map((workshop: SlotModel, index: number) => {
            return <SlotComponent
                key={index}
                id={index}/>
        });
    }

    getRecruiterElements(): JSX.Element[] | null {
        return this.props.recruiters.map((recruiter: SlotModel, index: number) => {
            return <SlotComponent
                key={index}
                id={index} />
        });
    }

    onRecruitClick() {
        this.props.onRecruitClick();
    }

    render() {
        return (
            <div style={modalStyle}>
                {this.getSawmillElements()}
                {this.getWorkShopElements()}
                {this.getRecruiterElements()}
                <button
                    onClick={this.onRecruitClick}
                    className='btn btn-default'
                    style={{
                        position: 'absolute',
                        top: '72%',
                        left: '45.5%',
                        width: '20%'
                    }}>Recruit</button>
            </div>
        );
    }
}