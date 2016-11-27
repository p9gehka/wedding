import React from 'react';
import {st, box, dragonGame} from './style.js';

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
}

class DragonGame extends React.Component {
    constructor() {
        super();

        let randArray = [];
        for(let i = 0; i < 12; i++) {
            randArray[i] = i;
            randArray[i + 12] = i;
        }
        let vArr = [];

        for(let i = 0; i < 6; i++) {
            vArr[i] = [];
            for(let j = 0; j < 4; j++) {
                vArr[i][j] = randArray.splice(randomInteger(0, randArray.length - 1), 1)[0];
            }
        }

        this.state = {
            selectedLast: null,
            point: 0,
            vArr,
        };
    }
    selectBox(e, coord) {

        e.persist();
        e.target.style.backgroundPosition =`${coord}px 50%`;
        if(this.state.selectedLast === null) {
            this.setState({
                selectedLast: {
                    target: e.target,
                    coord
                }
            });
        } else {
            if (this.state.selectedLast.target == e.target) {
                return;
            }
            if(this.state.selectedLast.coord === coord) {
                if(this.state.point == 11) {
                    this.props.win();
                }else {
                    this.setState({point: this.state.point + 1, selectedLast: null});
                    this.props.guess();
                }
            }else {
     
                setTimeout(() => {
                    e.target.style.backgroundPosition ='0px 50%';
                    this.state.selectedLast.target.style.backgroundPosition = '0px 50%';
                    this.setState({selectedLast: null});
                }, 400);
            }
        }
    }
    render() {
        const vArr = this.state.vArr;

        let elementArr = [];
        for(let i = 0; i < 6; i++) {
            elementArr[i] = [];
            for(let j = 0; j < 4; j++) {
                elementArr[i][j] = <div key={`box_${i}_${j}`} onClick={(e)=>this.selectBox(e, -((vArr[i][j] + 1) * 60))}style={{...box, backgroundPosition:'0px 50%' }}> </div>
            }
        }
        return (<div style={st}>
            <div style={dragonGame} >
                {
                    elementArr.map((arr, i) => {
                        return <div key={`line_${i}`}>{arr}</div>;
                    })
                }
            </div>
        </div>);
    }
}

export default DragonGame;