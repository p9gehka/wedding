import React from 'react';
import {coin} from './style';
function randInt(min, max) {
    var rand = min + Math.random() * (max - min);
    return rand;
}

class Coin extends React.Component {
    render() {
        const x = randInt(0, this.props.clientWidth - 40);
        const y = randInt(0, this.props.clientHeight - 40);
        return <div style={{...coin, left: x, top: y }} onClick={(e) => this.props.onClick(e)}></div>;
    }
}

export default Coin;