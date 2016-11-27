import React from "react";
import {st, coin} from "./style";
import { connect } from 'react-redux';

@connect((state) => ({
    totalCoins: state.totalCoins,
}))
class CoinsScore extends React.Component {
    render() {
        return (<div style={st}>
            <div>
            {this.props.totalCoins}
            </div>
            <div style={coin}></div>
        </div>);
    }
}

export default CoinsScore;