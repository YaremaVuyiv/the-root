import React from "react";
import { ClearingTypeEnum } from "../Enums/ClearingType";
import supportImage from '../Assets/support.png';
import woodImage from '../Assets/wood.png';
import keepImage from '../Assets/keep.png';
import birdWarriorImage from '../Assets/birdWarrior.png';
import catWarriorImage from '../Assets/catWarrior.png';
import allianceWarriorImage from '../Assets/allianceWarrior.png';

export interface IClearingProps {
    top: number;
    left: number;
    type: ClearingTypeEnum;
    hasSupportToken: boolean;
    woodTokens: number;
    hasKeepToken: boolean;
}

export interface IClearingState {
    tokenBarWidth: string;
    tokenBarHeight: string;
    tokenBarColor: string | undefined;
    tokenBarZIndex: number | undefined;
    warriorBarWidth: string;
    warriorBarHeight: string;
    warriorBarColor: string | undefined;
    warriorBarZIndex: number | undefined;
    woodQuantityDisplay: 'initial' | 'none';
    warriorQuantityDisplay: 'initial' | 'none';
}

export class Clearing extends React.Component<IClearingProps, IClearingState>{

    constructor(props: IClearingProps) {
        super(props)
        this.onClearingClick = this.onClearingClick.bind(this);
        this.onTokenBarMouseMove = this.onTokenBarMouseMove.bind(this);
        this.onTokenBarMouseLeave = this.onTokenBarMouseLeave.bind(this);
        this.onWarriorBarMouseMove = this.onWarriorBarMouseMove.bind(this);
        this.onWarriorBarMouseLeave = this.onWarriorBarMouseLeave.bind(this);

        this.state = {
            tokenBarWidth: '12%',
            tokenBarHeight: '3%',
            tokenBarColor: undefined,
            tokenBarZIndex: undefined,
            warriorBarWidth: '3%',
            warriorBarHeight: '12%',
            warriorBarColor: undefined,
            warriorBarZIndex: undefined,
            woodQuantityDisplay: 'none',
            warriorQuantityDisplay: 'none'
        };
    }

    onTokenBarMouseMove = () => {
        this.setState({
            tokenBarWidth: '23%',
            tokenBarHeight: '7%',
            tokenBarColor: '#bfae86',
            tokenBarZIndex: 1,
            woodQuantityDisplay: 'initial'
        });
    }

    onTokenBarMouseLeave = () => {
        this.setState({
            tokenBarWidth: '12%',
            tokenBarHeight: '3%',
            tokenBarColor: undefined,
            tokenBarZIndex: undefined,
            woodQuantityDisplay: 'none'
        })
    }

    onWarriorBarMouseMove = () => {
        this.setState({
            warriorBarWidth: '7%',
            warriorBarHeight: '23%',
            warriorBarColor: '#bfae86',
            warriorBarZIndex: 1,
            warriorQuantityDisplay: 'initial'
        });
    }

    onWarriorBarMouseLeave = () => {
        this.setState({
            warriorBarWidth: '3%',
            warriorBarHeight: '12%',
            warriorBarColor: undefined,
            warriorBarZIndex: undefined,
            warriorQuantityDisplay: 'none'
        })
    }

    onClearingClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    }

    getBorderColor(): string {
        switch (this.props.type) {
            case ClearingTypeEnum.fox:
                return '#ff0000';
            case ClearingTypeEnum.mouse:
                return '#ffa500';
            case ClearingTypeEnum.rabbit:
                return '#ffff00';
        }
    }

    getSupportTokenElement(tokenImageStyle: React.CSSProperties) {
        if (this.props.hasSupportToken) {
            return <img src={supportImage} alt='support' style={tokenImageStyle}></img>
        }
    }

    getWoodTokenElement(tokenImageStyle: React.CSSProperties): JSX.Element[] | undefined {
        if (this.props.woodTokens > 0) {
            return [
                <img src={woodImage} alt='wood' style={tokenImageStyle}></img>,
                <p style={{display: this.state.woodQuantityDisplay}}>x{this.props.woodTokens}</p>
            ]
        }
    }

    getKeepTokenElement(tokenImageStyle: React.CSSProperties) {
        if (this.props.hasKeepToken) {
            return <img src={keepImage} alt='keep' style={tokenImageStyle}></img>
        }
    }

    getWarriorElement(imageName: string, alt: string, imgaeStyle: React.CSSProperties){
        return  <div className='row m-0'>
        <img src={birdWarriorImage} alt='bird' style={imgaeStyle} />
        <p style={
            {
                fontSize: '50%'
            }}>x3</p>
    </div>
    }

    render() {
        const clearingStyle = {
            width: '12%',
            height: '13%',
            left: this.props.left + '%',
            top: this.props.top + '%',
            position: 'absolute' as 'absolute',
            border: '2px solid ' + this.getBorderColor(),
        }

        const tokenBarStyle = {
            width: this.state.tokenBarWidth,
            height: this.state.tokenBarHeight,
            position: 'absolute' as 'absolute',
            left: this.props.left + '%',
            top: this.props.top - 3 + '%',
            border: '2px solid #000000',
            backgroundColor: this.state.tokenBarColor,
            zIndex: this.state.tokenBarZIndex
        }

        const warriorBarStyle = {
            width: this.state.warriorBarWidth,
            height: this.state.warriorBarHeight,
            position: 'absolute' as 'absolute',
            left: this.props.left + 12 + '%',
            top: this.props.top + '%',
            border: '2px solid #00ff00',
            backgroundColor: this.state.warriorBarColor,
            zIndex: this.state.warriorBarZIndex
        }

        const tokenImageStyle = {
            height: '100%'
        }

        const warriorImageStyle = {
            width: '60%'
        }

        return (
            <div>
                <div
                    style={tokenBarStyle}
                    className='row m-0'
                    onMouseMove={this.onTokenBarMouseMove}
                    onMouseLeave={this.onTokenBarMouseLeave}>
                    {this.getSupportTokenElement(tokenImageStyle)}
                    {this.getWoodTokenElement(tokenImageStyle)}
                    {this.getKeepTokenElement(tokenImageStyle)}
                </div>
                <div
                    style={warriorBarStyle}
                    onMouseMove={this.onWarriorBarMouseMove}
                    onMouseLeave={this.onWarriorBarMouseLeave}>
                    <div className='row m-0'>
                        <img src={birdWarriorImage} alt='bird' style={warriorImageStyle} />
                        <p style={
                            {
                                fontSize: '50%'
                            }}>x3</p>
                    </div>
                    <div className='row m-0'>
                        <img src={catWarriorImage} alt='cat' style={warriorImageStyle} />
                        <p style={
                            {
                                fontSize: '50%'
                            }}>x3</p>
                    </div>
                    <div className='row m-0'>
                        <img src={allianceWarriorImage} alt='alliance' style={warriorImageStyle} />
                        <p style={
                            {
                                fontSize: '50%'
                            }}>x3</p>
                    </div>
                </div>
                <div
                    style={clearingStyle}
                    onClick={this.onClearingClick}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}