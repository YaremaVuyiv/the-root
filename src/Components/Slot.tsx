import React from "react";
import sawmillImage from "../Assets/sawmill.png";
import workshopImage from "../Assets/workshop.png";
import recruiterImage from "../Assets/recruiter.png";
import nestImage from "../Assets/nest.png";
import ruinImage from "../Assets/ruin.png";
import { SlotTypeEnum } from "../Enums/SlotType";
import { LocationTypeEnum } from "../Enums/LocationTypeEnum";

export interface ISlotProps {
    id: string;
    left: number;
    top: number;
    side: number;
    type?: SlotTypeEnum;
    locationType: LocationTypeEnum;
    slotClick(id: string, location: LocationTypeEnum, type?: SlotTypeEnum): void;
}

export class Slot extends React.Component<ISlotProps>{
    constructor(props: ISlotProps) {
        super(props);
        this.onBuildingClick = this.onBuildingClick.bind(this);
    }

    onBuildingClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.props.slotClick(this.props.id, this.props.locationType, this.props.type);
    }

    render() {
        let image = "";
        switch (this.props.type) {
            case SlotTypeEnum.nest:
                image = nestImage;
                break;
            case SlotTypeEnum.recruiter:
                image = recruiterImage;
                break;
            case SlotTypeEnum.sawmill:
                image = sawmillImage;
                break;
            case SlotTypeEnum.workshop:
                image = workshopImage;
                break;
            case SlotTypeEnum.ruin:
                image = ruinImage;
                break;
            default:
                break;
        }

        const buildingStyle = {
            width: this.props.side + '%',
            height: this.props.side + '%',
            left: this.props.left + '%',
            top: this.props.top + '%',
            position: 'absolute' as 'absolute',
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        }

        return (
            <div style={buildingStyle} onClick={this.onBuildingClick}></div>
        )
    }
}