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

// 단위 톤
const americadata = [
  {
    name: "22년 3월",
    중량: 1707668.8,
  },
  {
    name: "22년 6월",
    중량: 1682290.14,
  },
  {
    name: "22년 9월",
    중량: 1381725.8,
  },
  {
    name: "22년 12월",
    중량: 1605218.9,
  },
];

const canadadata = [
  {
    name: "22년 3월",
    중량: 117711.3,
  },
  {
    name: "22년 6월",
    중량: 141412.5,
  },
  {
    name: "22년 9월",
    중량: 126141.4,
  },
  {
    name: "22년 12월",
    중량: 111428.8,
  },
];

const singaporedata = [
  {
    name: "22년 3월",
    중량: 982646.9,
  },
  {
    name: "22년 6월",
    중량: 502435.03,
  },
  {
    name: "22년 9월",
    중량: 951951.1,
  },
  {
    name: "22년 12월",
    중량: 847522.6,
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
        <div className="chart" mt-5>
          <div className="americachart">
            <div className="title">미국</div>
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
              <title text="미국" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
              <YAxis
                domain={[1000000, 2000000]}
                ticks={[1000000, 1500000, 2000000]}
                tickCount={3}
              />
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
          <div className="singaporechart">
            <div className="title">싱가포르</div>
            <LineChart
              width={500}
              height={230}
              data={singaporedata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <title text="singaporedata" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
              <YAxis
                domain={[300000, 1100000]}
                ticks={[300000, 600000, 900000, 1200000]}
                tickCount={3}
              />
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
          <div className="canadachart">
            <div className="title">캐나다</div>
            <LineChart
              width={500}
              height={230}
              data={canadadata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <title text="singaporedata" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
              <YAxis
                domain={[100000, 150000]}
                ticks={[100000, 125000, 150000]}
                tickCount={3}
              />
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
      </div>
    );
  }
}
