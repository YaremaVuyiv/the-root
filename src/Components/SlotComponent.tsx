import React from "react";
import sawmillImage from "../Assets/sawmill.png";
import workshopImage from "../Assets/workshop.png";
import recruiterImage from "../Assets/recruiter.png";
import nestImage from "../Assets/nest.png";
import ruinImage from "../Assets/ruin.png";
import { SlotTypeEnum } from "../Enums/SlotTypeEnum";
import { AppState } from "../store/store";
import { connect } from "react-redux";

interface ISlotProps {
    id: string;
    left: number;
    top: number;
    type?: SlotTypeEnum;
}

interface OwnProps {
    id: number
}

function mapStateToProps(state: AppState, ownProps: OwnProps): ISlotProps {
    const slot = state.slotsReducer.byId[ownProps.id];

    return {
        id: 'slot' + slot.id,
        left: slot.left,
        top: slot.top,
        type: slot.type
    };
}

const side: number = 25;

class SlotComponent extends React.Component<ISlotProps>{
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
            width: side + '%',
            height: side + '%',
            left: this.props.left + '%',
            top: this.props.top + '%',
            position: 'absolute' as 'absolute',
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        }

        return (
            <div style={buildingStyle}></div>
        )
    }
}

export default connect(mapStateToProps)(SlotComponent);