import React from 'react';
import {Button} from 'react-mdl';

import Welcome from '../Welcome/Welcome';
import AskFirst from '../AskFirst/AskFirst';
import DatingSite from '../DatingSite/DatingSite';
import Timer from '../Timer/Timer';
import CoinsScore from '../CoinsScore/CoinsScore';
import ProgressStrip from '../ProgressStrip/ProgressStrip';
import BeforeRoomGame from '../BeforeRoomGame/BeforeRoomGame';
import RoomGame from '../RoomGame/RoomGame';
import BeforePreparation from '../BeforePreparation/BeforePreparation';
import PhotoPreparation from '../PhotoPreparation/PhotoPreparation';
import BeforeDragon from '../BeforeDragon/BeforeDragon';
import DragonGame from '../DragonGame/DragonGame';
import BeforePhotoZagz from '../BeforePhotoZagz/BeforePhotoZagz';
import BeforeWalk from '../BeforeWalk/BeforeWalk';
import BeforeMillioner from '../BeforeMillioner/BeforeMillioner';
import GameMillioner from '../GameMillioner/GameMillioner';
import Result from '../Result/Result';

import dataPH from '../data/data.json';
import dataPZ from '../data/dataPZ.json';
import dataPW from '../data/dataPW.json';
import dataCafe from '../data/dataCafe.json';


import { connect } from 'react-redux';
import { setName, next, noPrince, timeIsOver, setTimer, toRoom, addCoins, selectPhoto} from '../../core/actions';

@connect((state) => ({
    prince: state.prince,
    name: state.name,
    level: state.level,
    alex: state.alex,
    dina: state.dina,
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
    selectPhoto(name, photo) {
        console.log(name)
        this.props.dispatch(selectPhoto(name, photo));
    }
    render() {
        console.log('render');
        const lvl = this.props.level;

        const lvlTimers = [10, 50 , 30, 10, 10, 30, 10, 50, 40, 30, 50, 200, 200, 200, 200];

        if(!this.props.prince) {
            return <DatingSite />
        }
        const lvls = [<Welcome setName={ this.setName.bind(this)} />,
        <AskFirst name={this.props.name} answer={(a)=>this.AskFirstHandler(a)} />,
        <BeforeRoomGame closeDialog={()=>this.next()}/>,
        <RoomGame coinClick={()=> this.addCoins()}/>,
        <BeforePreparation closeDialog={()=>this.next()} />,
        <PhotoPreparation selectPhoto={(name, photo)=> this.selectPhoto(name, photo)} end={()=>this.next()} photoData={dataPH} />,
        <BeforeDragon closeDialog={()=>this.next()} />,
        <DragonGame guess={()=>this.addCoins()} win={()=>this.next()}/>,
        <BeforePhotoZagz closeDialog={()=>this.next()} />,
        <PhotoPreparation selectPhoto={(name, photo)=> this.selectPhoto(name, photo)} end={()=>this.next()} photoData={dataPZ} />,
        <BeforeWalk closeDialog={()=>this.next()} />,
        <PhotoPreparation selectPhoto={(name, photo)=> this.selectPhoto(name, photo)} end={()=>this.next()} photoData={dataPW} />,
        <BeforeMillioner closeDialog={()=>this.next()} />,
         <PhotoPreparation selectPhoto={(name, photo)=> this.selectPhoto(name, photo)} end={()=>this.next()} photoData={dataCafe} />,
         <Result result={(this.props.diana > this.props.alex) ? 'dina' : 'alex'} final="true"/>
        ];
        const timerHandler = (lvl === 3) ? ()=>this.next() : ()=>this.timeIsOver();
        return (
            <div>
                <Timer lvlTimer={lvlTimers[lvl]} timeIsOver={timerHandler}/>
                <CoinsScore />
                {lvls[lvl]}
                <ProgressStrip level={Math.ceil(this.props.level / 3)} />
                <Button raised colored ripple onClick={() => this.next()} style={{position: 'absolute', right: 40, top: 70}}>Next</Button>
            </div>
            );

    }
}

export default Game;
