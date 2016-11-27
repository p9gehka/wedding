import React from 'react';
import {st} from './style';
import Dialog from '../Dialog/Dialog';

export default class BeforePhotoZagz extends React.Component {
    render() {
        return (<div style={st}>
          <Dialog onClose={()=> this.props.closeDialog()}>
               На лошадях, яхтах, вертолётах, вспоминая все самые важные культурные центры сказочной страны счастливая пара хочет оповестить всех о своей радост
          </Dialog>
        </div>);
    }
}