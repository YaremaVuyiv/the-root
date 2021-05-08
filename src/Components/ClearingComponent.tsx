import React from "react";
import { ClearingTypeEnum } from "../Enums/ClearingType";
import supportImage from '../Assets/support.png';
import woodImage from '../Assets/wood.png';
import keepImage from '../Assets/keep.png';
import birdWarriorImage from '../Assets/birdWarrior.png';
import catWarriorImage from '../Assets/catWarrior.png';
import allianceWarriorImage from '../Assets/allianceWarrior.png';
import { AppState, store } from "../store/store";
import { TokenType } from "../Enums/TokenTypeEnum";
import { Faction } from "../Enums/Faction";
import { connect } from "react-redux";
import { Clearing } from "../store/Clearings/models/ClearingsState";
import SlotComponent from "./SlotComponent";
import { selectClearingAction } from "../store/Clearings/ClearingsActions";

interface IClearingProps {
    id: number,
    top: number;
    left: number;
    type: ClearingTypeEnum;
    hasSupportToken: boolean;
    woodTokens: number;
    hasKeepToken: boolean;
    hasWagabond: boolean;
    catWarriorsNumber: number;
    birdWarriorsNumber: number;
    allianceWarriorsNumber: number;
    isActivated: boolean;
    slotIds: number[];
}

function mapStateToProps(state: AppState, ownProps: { id: number }): IClearingProps {
    const clearing: Clearing = state.clearingsReducer.byId[ownProps.id];

    return {
        id: ownProps.id,
        top: clearing.topLocation,
        left: clearing.leftLocation,
        type: clearing.type,
        hasSupportToken: getTokensNumber(clearing, TokenType.support) > 0,
        woodTokens: getTokensNumber(clearing, TokenType.wood),
        hasKeepToken: getTokensNumber(clearing, TokenType.keep) > 0,
        hasWagabond: false,
        catWarriorsNumber: getWarriorsNumber(clearing, Faction.MarquiseDeCat),
        birdWarriorsNumber: getWarriorsNumber(clearing, Faction.EyrieDynasties),
        allianceWarriorsNumber: getWarriorsNumber(clearing, Faction.WoodlandAllianse),
        slotIds: clearing.slotIds,
        isActivated: clearing.isActive
    }
}

function getWarriorsNumber(clearing: Clearing, type: Faction): number {
    return clearing.warriors.filter(warrior => warrior.type === type).length;
}

function getTokensNumber(clearing: Clearing, type: TokenType): number {
    return clearing.tokens.filter(token => token.type === type).length;
}

export interface IClearingState {
    tokenBarWidth: number;
    tokenBarHeight: number;
    tokenBarLeft: number;
    tokenBarColor: string | undefined;
    tokenBarZIndex: number | undefined;
    warriorBarWidth: number;
    warriorBarHeight: number;
    warriorBarColor: string | undefined;
    warriorBarZIndex: number | undefined;
    woodQuantityDisplay: 'initial' | 'none';
    warriorQuantityDisplay: 'initial' | 'none';
    warriorBarTop: number;
    warriorImageClasses: string | undefined;
}

const clearingHeight = 13;

class ClearingComponent extends React.Component<IClearingProps, IClearingState>{
    constructor(props: any) {
        super(props)
        this.onClearingClick = this.onClearingClick.bind(this);
        this.onTokenBarMouseMove = this.onTokenBarMouseMove.bind(this);
        this.onTokenBarMouseLeave = this.onTokenBarMouseLeave.bind(this);
        this.onWarriorBarMouseMove = this.onWarriorBarMouseMove.bind(this);
        this.onWarriorBarMouseLeave = this.onWarriorBarMouseLeave.bind(this);

        this.state = {
            tokenBarLeft: props.left,
            tokenBarWidth: 12,
            tokenBarHeight: 3,
            tokenBarColor: undefined,
            tokenBarZIndex: undefined,
            warriorBarWidth: 3,
            warriorBarHeight: clearingHeight,
            warriorBarColor: undefined,
            warriorBarZIndex: undefined,
            woodQuantityDisplay: 'none',
            warriorQuantityDisplay: 'none',
            warriorBarTop: props.top,
            warriorImageClasses: 'w-100'
        };
    }

    onTokenBarMouseMove = () => {
        if (this.props.hasKeepToken || this.props.hasSupportToken || this.props.woodTokens > 0) {
            let tokenBarWidth = 23;
            let tokenBarLeft = this.state.tokenBarLeft;
            if (tokenBarLeft + tokenBarWidth > 100) {
                tokenBarLeft += 100 - this.props.left - tokenBarWidth;
            }

            this.setState({
                tokenBarLeft: tokenBarLeft,
                tokenBarWidth: tokenBarWidth,
                tokenBarHeight: 7,
                tokenBarColor: '#bfae86',
                tokenBarZIndex: 1,
                woodQuantityDisplay: 'initial'
            });
        }
    }

    onTokenBarMouseLeave = () => {
        this.setState({
            tokenBarLeft: this.props.left,
            tokenBarWidth: 12,
            tokenBarHeight: 3,
            tokenBarColor: undefined,
            tokenBarZIndex: undefined,
            woodQuantityDisplay: 'none'
        })
    }

    onWarriorBarMouseMove = () => {
        if (this.props.catWarriorsNumber > 0 || this.props.birdWarriorsNumber > 0 || this.props.allianceWarriorsNumber > 0) {
            const warriorBarHeight = 23;
            let warriorBarTop = this.state.warriorBarTop;
            if (warriorBarTop + warriorBarHeight > 100) {
                warriorBarTop += 100 - this.props.top - warriorBarHeight;
            }

            this.setState({
                warriorBarWidth: 7,
                warriorBarHeight: warriorBarHeight,
                warriorBarColor: '#bfae86',
                warriorBarZIndex: 1,
                warriorQuantityDisplay: 'initial',
                warriorBarTop: warriorBarTop,
                warriorImageClasses: 'col-7 p-0 w-100'
            });
        }
    }

    onWarriorBarMouseLeave = () => {
        this.setState({
            warriorBarWidth: 3,
            warriorBarHeight: clearingHeight,
            warriorBarColor: undefined,
            warriorBarZIndex: undefined,
            warriorQuantityDisplay: 'none',
            warriorBarTop: this.props.top,
            warriorImageClasses: 'w-100'
        })
    }

    onClearingClick() {
        const selectedClearingId: number | null = store.getState().clearingsReducer.selectedClearingId;
        if (selectedClearingId === null) {
            store.dispatch(selectClearingAction(this.props.id))
            console.log(store.getState().clearingsReducer.selectedClearingId);
        } else {

        }
    }

    getBorderColor(): string {
        if (this.props.isActivated === true) {
            return '#ffffff';
        }
        switch (this.props.type) {
            case ClearingTypeEnum.fox:
                return '#ff0000';
            case ClearingTypeEnum.mouse:
                return '#ffa500';
            case ClearingTypeEnum.rabbit:
                return '#ffff00';
        }
    }

    getSupportTokenElement(): JSX.Element | undefined {
        if (this.props.hasSupportToken) {
            return <img className='h-100' src={supportImage} alt='support'></img>
        }
    }

    getWoodTokenElement(): JSX.Element[] | undefined {
        if (this.props.woodTokens > 0) {
            return [
                <img key={0} src={woodImage} alt='wood' className='h-100'></img>,
                <p key={1} style={{ display: this.state.woodQuantityDisplay }}>x{this.props.woodTokens}</p>
            ]
        }
    }

    getKeepTokenElement(): JSX.Element | undefined {
        if (this.props.hasKeepToken) {
            return <img src={keepImage} alt='keep' className='h-100'></img>
        }
    }

    getCatWarriorsElement(): JSX.Element | undefined {
        if (this.props.catWarriorsNumber > 0) {
            return this.getWarriorElement(
                catWarriorImage,
                'cat',
                this.props.catWarriorsNumber);
        }
    }

    getBirdWarriorsElement(): JSX.Element | undefined {
        if (this.props.birdWarriorsNumber > 0) {
            return this.getWarriorElement(
                birdWarriorImage,
                'bird',
                this.props.birdWarriorsNumber);
        }
    }

    getAllianceWarriorsElement(): JSX.Element | undefined {
        if (this.props.allianceWarriorsNumber > 0) {
            return this.getWarriorElement(
                allianceWarriorImage,
                'alliance',
                this.props.allianceWarriorsNumber);
        }
    }

    getWarriorElement(
        imageName: string,
        alt: string,
        warriorNumber: number): JSX.Element {
        return <div className='row m-0'>
            <img src={imageName} alt={alt} className={this.state.warriorImageClasses} />
            <div className='col-5 p-0' style={
                {
                    display: this.state.warriorQuantityDisplay,
                    fontSize: '1.7vh'
                }}>
                x{warriorNumber}
            </div>
        </div>
    }

    render() {
        const clearingStyle = {
            width: '12%',
            height: clearingHeight + '%',
            left: this.props.left + '%',
            top: this.props.top + '%',
            position: 'absolute' as 'absolute',
            border: '2px solid ' + this.getBorderColor(),
        }

        const tokenBarStyle = {
            width: this.state.tokenBarWidth + '%',
            height: this.state.tokenBarHeight + '%',
            position: 'absolute' as 'absolute',
            left: this.state.tokenBarLeft + '%',
            top: this.props.top - 3 + '%',
            backgroundColor: this.state.tokenBarColor,
            zIndex: this.state.tokenBarZIndex
        }

        const warriorBarStyle = {
            width: this.state.warriorBarWidth + '%',
            height: this.state.warriorBarHeight + '%',
            position: 'absolute' as 'absolute',
            left: this.props.left + 12 + '%',
            top: this.state.warriorBarTop + '%',
            backgroundColor: this.state.warriorBarColor,
            zIndex: this.state.warriorBarZIndex
        }

        return (
            <div>
                <div
                    style={tokenBarStyle}
                    className='row m-0'
                    onMouseMove={this.onTokenBarMouseMove}
                    onMouseLeave={this.onTokenBarMouseLeave}>
                    {this.getSupportTokenElement()}
                    {this.getWoodTokenElement()}
                    {this.getKeepTokenElement()}
                </div>
                <div
                    style={warriorBarStyle}
                    onMouseMove={this.onWarriorBarMouseMove}
                    onMouseLeave={this.onWarriorBarMouseLeave}>
                    {this.getBirdWarriorsElement()}
                    {this.getCatWarriorsElement()}
                    {this.getAllianceWarriorsElement()}
                </div>
                <div
                    style={clearingStyle}
                    onClick={this.onClearingClick}>
                    {
                        this.props.slotIds.map(slotId =>
                            <SlotComponent
                                key={slotId}
                                id={slotId}
                            />)
                    }
                    <p>{this.props.id}</p>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ClearingComponent);