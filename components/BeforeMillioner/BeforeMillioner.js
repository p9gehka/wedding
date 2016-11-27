import React from 'react';
import {st} from './style';
import Dialog from '../Dialog/Dialog';

export default class BeforeMillioner extends React.Component {
    render() {
        return (<div style={st}>
          <Dialog onClose={()=> this.props.closeDialog()}>
             Дверь в зал с несметными богатствами открыта, добро пожаловать в хрустальный дворец, где вас ждёт пир на весь мир! Тратим оставшиеся деньги полностью!
          </Dialog>
        </div>);
    }
}