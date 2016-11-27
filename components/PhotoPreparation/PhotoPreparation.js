import React from 'react';
import {st, imgWrap} from './style';

import PhotoSelect from '../PhotoSelect/PhotoSelect';

class PhotoPreparation extends React.Component {
    constructor(props) {
        super(props);
        this.photoBlockSize = 6;
        let tL = 0;
        Object.keys(props.photoData).forEach((name) => {

            tL += props.photoData[name].data.length;
        });
        this.state = {
            time: 0,
            last: false,
            totalLength: tL,
            clickCount: 0
        };


    }
    imgClick(e, name, photo) {
        const img = e.currentTarget.children[0];
        if(img.className === 'selected') {
            return;
        }
        this.props.selectPhoto(name, photo);
        img.setAttribute('class', 'selected');
        const t = this.state.time;
        const tL = this.state.totalLength;
        const cC = this.state.clickCount;
        if(cC < 1) {
            this.setState({
                clickCount: cC + 1,
            });
            return;
        }
        if(tL - (t + 1) * this.photoBlockSize > 0) {
            const selected = document.querySelectorAll('.selected');
            for(let i = 0; i < selected.length; i++) {
                selected[i].removeAttribute('class');
            }
            this.setState({
                time: t + 1,
                clickCount: 0,
            });
        }else{
            this.props.end();
        }
    }
    render() {
        const data = this.props.photoData;
        const t = this.state.time;
        const photoArrays = [];
        let albumIndex;
        Object.keys(data).forEach((name) => {
            albumIndex = data[name].index;
            const arr = data[name].data.map((value) => data[name].link + value);
            photoArrays.push(arr);
        });

        let elemsArr = [];
        photoArrays.forEach((arr, i) => {
            elemsArr = [...elemsArr, ...arr.map((v, index) => (<div key={`photo_${albumIndex}_${index}`} style={imgWrap} onClick={(e) => this.imgClick(e, Object.keys(data)[i], v)}><img src={v}  /></div>))];
        });
        const result = elemsArr.slice((t * this.photoBlockSize), (t * this.photoBlockSize) + this.photoBlockSize);

        return <PhotoSelect elemsArr={result}></PhotoSelect>;
    }
}


export default PhotoPreparation;