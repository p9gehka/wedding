import React from 'react';
import Welcome from '../Welcome/Welcome';
import AskFirst from '../AskFirst/AskFirst';
import DatingSite from '../DatingSite/DatingSite';
import Timer from '../Timer/Timer';
import CoinsScore from '../CoinsScore/CoinsScore';
import ProgressStrip from '../ProgressStrip/ProgressStrip';
import BeforeRoomGame from '../BeforeRoomGame/BeforeRoomGame';
import RoomGame from '../RoomGame/RoomGame';
import BeforePreparation from '../BeforePreparation/BeforePreparation';
import { connect } from 'react-redux';
import { setName, next, noPrince, timeIsOver, setTimer, toRoom, addCoins} from '../../core/actions';

@connect((state) => ({
    prince: state.prince,
    name: state.name,
    level: state.level,
}))
class Game extends React.Component {
    setName(name){
        this.props.dispatch(setName(name));
    }
    AskFirstHandler(answer) {
        
        if (answer) {
            this.props.dispatch(next)
        } else {
            this.props.dispatch(noPrince);
        }
    }
    addCoins() {
        this.props.dispatch(addCoins(10))
    }
    next() {
        this.props.dispatch(next);
    }
    startTimer() {
        console.log('');
        this.props.dispatch(setTimer(true));
    }
    timeIsOver() {
        console.log('');
        this.props.dispatch(timeIsOver);
    }
    render() {
        console.log('render');
        const lvl = this.props.level;
        //const lvl = 3;

        const lvlTimers = [10, 50 , 50, 10, 10, 30];

        if(!this.props.prince) {
            return <DatingSite />
        }
        const lvls = [<Welcome setName={ this.setName.bind(this)} />,
        <AskFirst name={this.props.name} answer={(a)=>this.AskFirstHandler(a)} />,
        <BeforeRoomGame closeDialog={()=>this.next()}/>,
        <RoomGame coinClick={()=> this.addCoins()}/>,
        <BeforePreparation closeDialog={()=>this.next()} />
        ];
        const timerHandler = (lvl === 3) ? ()=>this.next() : ()=>this.timeIsOver();
        return (
            <div>
                <Timer lvlTimer={lvlTimers[lvl]} timeIsOver={timerHandler}/>
                <CoinsScore />
                {lvls[lvl]}
                <ProgressStrip level={this.props.level} />
            </div>
            );
    }
}

export default Game;
