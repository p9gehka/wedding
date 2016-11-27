import React from 'react';
import {st} from './style';
import { Button } from "react-mdl";
export default (props) => {
	return (<div style={st}>
			<h4>{`Здравствуй принцесса ${props.name}`} </h4>
			<img src="../../assets/price.jpg" style={{width: 300, height: 300}} />
			<h4>
			Каждая принцеса мечтает выйти за принца замуж.
			У тебя уже есть принц?</h4>
			<div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
				<Button onClick={()=>props.answer(true)} raised colored ripple>да</Button>
				<Button onClick={()=>props.answer(false)} raised accent ripple>нет</Button>
			</div>
		</div>)
};