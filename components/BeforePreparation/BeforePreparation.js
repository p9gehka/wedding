import React from 'react';
import {st} from './style';
import Dialog from '../Dialog/Dialog';

export default class BeforeRoomGame extends React.Component {
    render() {
        return (<div style={st}>
          <Dialog onClose={()=> this.props.closeDialog()}>
              Первый этап - это подготовка невесты (и жениха).
Фотограф приезжает к невесте за полчаса до приезда жениха. В это время стилист заканчивает подготовоку образа невесты, наносит последние штрихи макияжа. Момент хорошо передаёт как невеста немножко переживает, готовясь к важному событию. (чтобы перейти дальше выбери понравившиеся фотографии, но будь аккуратнее, выбирай сердцем)
          </Dialog>
        </div>);
    }
}