import React from 'react';
import {st} from './style';
import Dialog from '../Dialog/Dialog';

export default class BeforeRoomGame extends React.Component {
    render() {
        return (<div style={st}>
          <Dialog onClose={()=> this.props.closeDialog()}>
             Принц есть, ваша задача удержать принца любой ценой.
            Надо его женить! На свадьбу нужны деньги.
          </Dialog>
        </div>);
    }
}