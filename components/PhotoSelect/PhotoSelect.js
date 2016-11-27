import React from 'react';
import {st} from './style';

class PhotoSelect extends React.Component {
    render() {
        return <div style={st}>{this.props.elemsArr}</div>;
    }
}

export default PhotoSelect;