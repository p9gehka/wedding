import React from "react";
import ReactDOM from "react-dom";
import { Textfield, Button } from "react-mdl";
import {st, bt} from './style';


class Welcome extends React.Component {
	constructor() {
		super();
		this.state = { name: '' }
	}
	changeName(e) {
		this.setState({
			name: e.target.value,
		})
	}
	render() {
		return (<div style={st}>
			<Textfield
			    onChange={(e) => {
			    	this.changeName(e)
			    }}
			    label="Введите имя..."
			    floatingLabel
			    style={{width: '200px'}}
			/>
			<Button 
				style={bt} 
				raised 
				colored
				ripple
				disabled={!this.state.name} 
				onClick={()=> this.props.setName(this.state.name)}>Начать</Button>
		</div>);
	}
}


export default Welcome;