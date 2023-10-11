// 우럭 수출입

import React, { PureComponent } from "react";
import "./chart2.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const americadata = [
  {
    name: "22년 3월",
    중량: 25,
  },
  {
    name: "22년 6월",
    중량: 97,
  },
  {
    name: "22년 9월",
    중량: 53,
  },
  {
    name: "22년 12월",
    중량: 2505,
  },
];

export default class exportRockfish extends PureComponent {
  render() {
    return (
      <div className="all" mt-4>
        <div className="mapChart">
          <iframe
            src="https://public.tableau.com/views/_16969245092940/1_1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="600"
            title="우럭 수출"
          />
        </div>
        <div className="americachart">
          <div className="title">북미</div>
          <LineChart
            width={500}
            height={230}
            data={americadata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <title text="북미" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
            <YAxis domain={[0, 3000]} ticks={[0, 500, 3000]} tickCount={3} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="중량"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </div>
      </div>
    );
  }
}
