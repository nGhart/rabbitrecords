import './chartbox.scss';
import React, { PureComponent } from 'react';
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import animalStore from '../../stores/store';

import { Link } from 'react-router-dom';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
class ChartBox extends PureComponent {
  // const store = animalStore();
  render() {
    return (
      <div className="chartBox">
        <div className="boxInfo">
          <div className="title">Total Animals</div>
          <h1 className="number">62</h1>
          <Link to="/">View</Link>
        </div>
        <div className="chartInfo">
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart
              //width={200} height={200}
              >
                <Pie
                  data={data01}
                  //   cx={75}
                  //   cy={50}
                  innerRadius={30}
                  outerRadius={50}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data01.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{ background: 'transparent', border: 'none' }}
                  labelStyle={{ display: 'none' }}
                  position={{ x: 30, y: 110 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* <div className="text">
            <h6>45%</h6>
          </div> */}
        </div>
      </div>
    );
  }
}
export default ChartBox;
