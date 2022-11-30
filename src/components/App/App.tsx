import * as React from 'react';
import styles from './App.module.scss';
import { IAppProps } from './IAppProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IAppState, Row } from '../../components';
import { getDateRangeArray } from 'office-ui-fabric-react';
import { Data } from '../../services'
import { ILab03 } from '../../models';

export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps){
    super(props);
    this.state = {
      data: []
    }
  }

  private dataService: Data;

  public render(): React.ReactElement<IAppProps> {
    const {
      context,
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;
    
   return (
      <section className={`${styles.app} ${hasTeamsContext ? styles.teams : ''}`}>
        <div>
          {this.state.data.map((i:ILab03) =>{
            return (          
              <Row Title={i.Title} />
            )
          })}
        </div>
      </section>
    );


  }


 public componentDidMount(): void {
  this.dataService = new Data();
  this.dataService.getData(this.props.context)
  .then((result: ILab03[]) => {
    this.setState({
      data: result
     })
  })
  .catch((error)=>{
    console.log(error);
  })
  }
   
 }
