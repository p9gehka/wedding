import { Circle } from 'rc-progress';
import React from 'react';
import {tmWrap, timeSt, timeIn } from './style.js';
import numeral from 'numeral';


export default class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 0,
            intervalId: null,
        };
    }
    componentDidMount() {
        this.setState({
            intervalId: setInterval(this.timer.bind(this), 1000),
            timeStart: new Date()
        });

        // store intervalId in the state so it can be accessed later:

    }
    componentWillReceiveProps() {
        clearInterval(this.state.intervalId);
        this.setState({
            intervalId:setInterval(this.timer.bind(this), 1000),
            time: 0,
            timeStart: new Date()
        });
    }
    componentWillUnmount() {
       // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }
    timer() {
        this.setState({
            time: new Date() - this.state.timeStart,
        });
    }
    componentDidUpdate() {
        const time = this.props.lvlTimer * 1000  - this.state.time;
        if((time) <= 0) {
            clearInterval(this.state.intervalId);
            this.props.timeIsOver();
        }
    }
    render() {
        const time = this.props.lvlTimer * 1000  - this.state.time;
        const timer = (time) / 1000;
        const percent = 100 / this.props.lvlTimer * timer;
        return (<div style={tmWrap}> 
                    <Circle percent={100 -percent} strokeWidth="8" trailColor="#FF8686" trailWidth="8" strokeColor="#37B9BF" />
                    <div style={timeSt}>
                        <div style={timeIn}>{numeral(timer).format('00:00').slice(3)}</div>
                    </div>
                </div>);
    }

}

