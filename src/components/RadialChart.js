import React, {PureComponent} from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

import { data, style } from '../helpers/radialInfo';

export default class RadialChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';

	render() {
		return (
			<div className='radial-chart'>
				<h3>Death Rate Per Age Group</h3>
				<RadialBarChart
					width={300}
					height={300}
					cx={150}
					cy={105}
					innerRadius={20}
					outerRadius={110}
					barSize={15}
					data={data}
				>
					<RadialBar
						minAngle={15}
						label={{ position: 'insideStart', fill: '#fff' }}
						background
						clockwise
						dataKey='uv'
					/>
					<Legend
						iconSize={10}
						width={300}
						layout='horizontal'
						horizontalAlign='middle'
						wrapperStyle={style}
					/>
				</RadialBarChart>
			</div>
		);
	}
}

