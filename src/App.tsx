import React from 'react';
import { Faction } from './Enums/Faction';
import MapComponent from './Components/MapComponent';
import ActionPanelComponent from './Components/ActionPanelComponent';

interface IAppProps {
  faction: Faction;
}

interface IAppState {
  actionDialogTop: number;
  actionDialogLeft: number;
  actionDialogVisible: boolean;
}

export class App extends React.Component<IAppProps, IAppState>{
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      actionDialogTop: 0,
      actionDialogLeft: 0,
      actionDialogVisible: false,
    };
  }

  render() {
    return (
      <div className='row m-0 h-100 w-100'>
        <MapComponent />
        <ActionPanelComponent faction={this.props.faction} />
      </div>
    );
  };
}