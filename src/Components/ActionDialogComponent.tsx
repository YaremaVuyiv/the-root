import React from 'react';
import { Clearing } from '../Types/ClearingType';
import { Faction, getFactionNameById } from '../Enums/Faction';

enum ActionDialogTypeEnum {
    initial,
    move,
    battle
}

type FactionColorStyle = {
    buttonColor: string,
    buttonBackgroundColor: string,
    backgroundColor: string
}

export interface IActionDialogProps {
    top: number;
    left: number;
    onDialogClose(): void;
    onMovementSubmit(warriorsNumber: number): void;
    onBattleSubmit(faction: Faction): void;
    onRecruitClick(clearingId?: string): void;
    selectedClearing: Clearing | null;
    faction: Faction;
    canMove: boolean;
    canBattle: boolean;
}

export interface IActionDialogState {
    top: number;
    dialogType: ActionDialogTypeEnum;
    warriorsSelected: number;
}

export class ActionDialog extends React.Component<IActionDialogProps, IActionDialogState>{
    actionDialogStyle: React.CSSProperties | undefined;
    buttonStyle: React.CSSProperties | undefined;
    listElementStyle: React.CSSProperties | undefined;
    selectedClearing: Clearing | null;
    factionColorStyle: FactionColorStyle;

    constructor(props: IActionDialogProps) {
        super(props);

        switch (this.props.faction) {
            case Faction.MarquiseDeCat:
                this.factionColorStyle = {
                    backgroundColor: '#f87a02',
                    buttonBackgroundColor: '#6a3421',
                    buttonColor: '#ffffff'
                }

                break;

            case Faction.EyrieDynasties:
                console.log('eyrie');
                this.factionColorStyle = {
                    backgroundColor: '#3665a7',
                    buttonBackgroundColor: '#1e365a',
                    buttonColor: '#ffffff'
                }
                break;

            default:
                this.factionColorStyle = {
                    backgroundColor: '#000000',
                    buttonBackgroundColor: '#ffffff',
                    buttonColor: '#000000'
                }

                break;
        }

        this.moveButtonCLick = this.moveButtonCLick.bind(this);
        this.submitMoveClick = this.submitMoveClick.bind(this);
        this.onMoveInputChange = this.onMoveInputChange.bind(this);
        this.onBattleClick = this.onBattleClick.bind(this);
        this.submitBattleClick = this.submitBattleClick.bind(this);
        this.onRecruitClick = this.onRecruitClick.bind(this);

        this.state = {
            top: this.props.top,
            dialogType: ActionDialogTypeEnum.initial,
            warriorsSelected: 0
        }

        this.actionDialogStyle = {
            top: this.state.top + '%',
            left: this.props.left + '%',
            minWidth: '12%',
            maxWidth: '16%',
            backgroundColor: this.factionColorStyle.backgroundColor
        }

        this.buttonStyle = {
            backgroundColor: this.factionColorStyle.buttonBackgroundColor,
            color: this.factionColorStyle.buttonColor
        }

        this.listElementStyle = {
            backgroundColor: this.factionColorStyle.backgroundColor
        }

        this.selectedClearing = this.props.selectedClearing;
    }

    moveButtonCLick() {
        this.setState({
            dialogType: ActionDialogTypeEnum.move
        });
    }

    submitMoveClick() {
        this.props.onMovementSubmit(this.state.warriorsSelected);
    }

    onBattleClick() {
        this.setState({
            dialogType: ActionDialogTypeEnum.battle
        });
    }

    submitBattleClick(faction: Faction) {
        this.props.onBattleSubmit(faction);
    }

    onRecruitClick() {
        this.props.onRecruitClick(this.props.selectedClearing?.id);
    }

    getCorrectDialog(): JSX.Element | undefined {
        switch (this.state.dialogType) {
            case ActionDialogTypeEnum.initial:
                return <ul className="card-body list-group p-0">
                    {this.props.canMove ?
                        <li className="list-group-item p-1" style={this.listElementStyle}>
                            <button
                                onClick={this.moveButtonCLick}
                                className='btn btn-default w-100'
                                style={this.buttonStyle}>Move</button>
                        </li> : undefined}
                    {this.props.canBattle ?
                        <li className="list-group-item p-1" style={this.listElementStyle}>
                            <button
                                onClick={this.onBattleClick}
                                className='btn btn-default w-100'
                                style={this.buttonStyle}>Battle</button>
                        </li> : undefined}
                    {this.props.faction === Faction.EyrieDynasties ?
                        <li className="list-group-item p-1" style={this.listElementStyle}>
                            <button
                                onClick={this.onRecruitClick}
                                className='btn btn-default w-100'
                                style={this.buttonStyle}>Recruit</button>
                        </li> : undefined}
                    {this.props.faction === Faction.WoodlandAllianse ?
                        <li className="list-group-item p-1" style={this.listElementStyle}>
                            <button className='btn btn-default w-100' style={this.buttonStyle}>Revolt</button>
                        </li> : null}
                </ul>

            case ActionDialogTypeEnum.battle:
                const enemyTypes = this.selectedClearing?.getWarriorTypes().filter(x => x !== this.props.faction);
                console.log(enemyTypes);
                const enemyElements = enemyTypes?.map(x =>
                    <li key={x.toString()} className="list-group-item p-1" style={this.listElementStyle}>
                        <button
                            onClick={() => this.submitBattleClick(x)}
                            className='btn btn-default w-100'
                            style={this.buttonStyle}>{getFactionNameById(x)}</button>
                    </li>)

                return <ul className="card-body list-group p-0">
                    {enemyElements}
                </ul>

            case ActionDialogTypeEnum.move:
                return <div>
                    <div className='p-1'>
                        <input
                            onChange={this.onMoveInputChange}
                            className="form-control w-100"
                            value={this.state.warriorsSelected}
                            type='number'
                            max={this.selectedClearing?.getFactionWarriors(this.props.faction)} />
                    </div>
                    <div className='p-1'>
                        <button
                            className='btn btn-default w-100'
                            onClick={this.submitMoveClick}
                            style={this.buttonStyle}>Submit</button>
                    </div>
                </div>
        }
    }

    onMoveInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        let warriorsSelected = +event.target.value;
        if (warriorsSelected < 1) {
            warriorsSelected = 1;
        }

        this.setState({
            warriorsSelected: warriorsSelected
        })
    }

    render() {
        return (
            <div className='card text-center' style={this.actionDialogStyle}>
                <h5 className="card-title mt-1" style={{
                    fontSize: '2vh'
                }}>Choose action</h5>
                <button
                    onClick={this.props.onDialogClose}
                    type="button"
                    className="close position-absolute mr-1"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {this.getCorrectDialog()}
            </div>
        )
    }
}