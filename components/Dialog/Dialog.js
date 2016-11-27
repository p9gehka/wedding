import React from 'react';
import {dWrap, d, inD, inBut} from './style';
import {Button } from 'react-mdl';

export default (props) => {
    const text = (props.final) ? 'Oтправить заявку' : 'Тратить';
    return (
        <div style={dWrap}>
            <div style={d}>
                <div style={inD}>
                    <div>
                        {props.children}
                    </div>
                    <div style={inBut}><Button raised colored ripple onClick={()=> props.onClose()}>{text}</Button></div>
                </div>
            </div>
        </div>);
};