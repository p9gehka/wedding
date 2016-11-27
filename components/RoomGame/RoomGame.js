import React from 'react';
import {st} from './style';
import Coin from './Coin';

export default class RoomGame extends React.Component {
    constructor() {
        super();
        this.state = {
            coins: []
        };
    }
    coinClick(index) {
        const coins = this.state.coins;
        const f = [...coins].filter(v => v !== '');

        this.props.coinClick();
        if(f.length > 1) {
            const newCoins = [...this.state.coins];
            newCoins[index] = '';
            this.setState({coins: newCoins});
        } else {
            this.createCoins();
        }
    }
    createCoins() {
        const w = this.refs.gameField.offsetWidth;
        const h = this.refs.gameField.offsetHeight;
        let c = [];
        for(let i = 0; i < 5; i++) {
            c.push(<Coin key={`coin_${i}`} clientWidth={w} clientHeight={h} onClick={()=>this.coinClick(i)}/>);
        }
        this.setState({
            coins: c,
        });
    }
    componentDidMount() {
        this.createCoins();
    }
    render() {
        return <div ref="gameField" style={st}>{this.state.coins}</div>;
    } 
}