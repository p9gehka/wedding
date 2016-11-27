import React from 'react';
import { st, stripStyle, selStripStyle, stripWrap, point } from './style.js';

export default (props) => {
	const lvl = props.level;
	const pointsCoord = [0, 100, 200, 300, 400, 500];

	const points = pointsCoord.map((v, i)=>
		<div key={`point_${i}`} style={{...point, left: v, borderColor:(i > lvl) ? 'grey' : 'lime'}}></div>
	);
	return (<div style={st}>
		<div style={stripWrap}>
			<div style={stripStyle}></div>
			<div style={{...selStripStyle, width: pointsCoord[lvl] }}></div>
			{points}
		</div>
	</div>);
}