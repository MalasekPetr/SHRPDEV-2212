import * as React from 'react';
import styles from '../App/App.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { IRowProps } from './IRowProps';

export class Row extends React.Component<IRowProps, {}> {
  public render(): React.ReactElement<IRowProps> {
    const {
        Title,
        Number,
        Date,
        Editor
    } = this.props;

    return (
    <>
        <span>{`Title: ${this.props.Title}`}</span>
    </>
    )
    }
}