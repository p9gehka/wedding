import React from 'react';
import {st} from './style';
import Dialog from '../Dialog/Dialog';

export default class BeforePhotoZagz extends React.Component {
    render() {
        return (<div style={st}>
          <Dialog onClose={()=> this.props.closeDialog()}>
              Дракон повержен, всё его золото теперь ваше. А пока принц чувствует себя героем, надо срочно тащить его в замок
и заключить союз. Документально. При свидетелях. Мало ли..
          </Dialog>
        </div>);
    }
}