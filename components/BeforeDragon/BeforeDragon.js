import React from 'react';
import {st} from './style';
import Dialog from '../Dialog/Dialog';

export default class BeforeRoomGame extends React.Component {
    render() {
        return (<div style={st}>
          <Dialog onClose={()=> this.props.closeDialog()}>
              Для того, что свадьба осуществилась, жениху необходимо завоевать невесту. Ему мешает дракон, который богат, обманом и деньгами он контролирует любых женщин.
Дракон — это воплощенная мудрость. Поэтому не имеет смысла драться с ним в рукопашной схватке или устраивать битву на мечах. Дракона надо побеждать хитростью.
          </Dialog>
        </div>);
    }
}