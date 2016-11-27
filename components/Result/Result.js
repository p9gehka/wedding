import React from 'react';
import {st} from './style';
import Dialog from '../Dialog/Dialog';

export default class Result extends React.Component {

    render() {
        const p  = this.props.result;
        const name = (p === 'dian') ? 'Дина' : 'Алексей';
        return (<div style={st}>
          <Dialog final="true">
              Вы честно бились за счастье и оно по праву ваше!
             Теперь пора вернуться в реальные мир и позвонить фотографу.
             Вам подойдет фотограф {name}. его номер: +791856555330
             Наша система отобрала его среди тысячи других, исходя из поведенчиского анализа вашей игровой техники. Совет да любовь!
             ваши отзывы пишите в чат <a href="#">telegram.me/institutsvadeb</a>, спасибо.
          </Dialog>
        </div>);
    }
}