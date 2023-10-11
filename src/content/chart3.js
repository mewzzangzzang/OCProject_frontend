// 광어 출하량 정보import React, { Component } from "react";
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./chart2.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const regiondata = [
  {
    name: "2017",
    제주도: 24145,
    완도: 12888,
    기타: 3333,
    amt: 4000,
  },
  {
    name: "2018",
    제주도: 22626,
    완도: 9792,
    기타: 3280,
    amt: 4000,
  },
  {
    name: "2019",
    제주도: 22891,
    완도: 10155,
    기타: 2733,
    amt: 4000,
  },
  {
    name: "2020",
    제주도: 23471,
    완도: 11041,
    기타: 2392,
    amt: 4000,
  },
  {
    name: "2021",
    제주도: 22963,
    완도: 10877,
    기타: 2191,
    amt: 4000,
  },
  {
    name: "2022",
    제주도: 24211,
    완도: 10474,
    기타: 2237,
    amt: 4000,
  },
];

const sizedata = [
  {
    name: "2017",
    "500g 미만": 2623,
    "500g~750g": 4987,
    "750~1kg": 7675,
    "1kg 이상": 25081,
  },
  {
    name: "2018",
    "500g 미만": 2131,
    "500g~750g": 6225,
    "750~1kg": 5986,
    "1kg 이상": 21360,
  },
  {
    name: "2019",
    "500g 미만": 2171,
    "500g~750g": 6025,
    "750~1kg": 6076,
    "1kg 이상": 21507,
  },
  {
    name: "2020",
    "500g 미만": 2088,
    "500g~750g": 6582,
    "750~1kg": 5898,
    "1kg 이상": 22336,
  },
  {
    name: "2021",
    "500g 미만": 2010,
    "500g~750g": 7129,
    "750~1kg": 5061,
    "1kg 이상": 21831,
  },
  {
    name: "2022",
    "500g 미만": 1591,
    "500g~750g": 5773,
    "750~1kg": 4464,
    "1kg 이상": 25094,
  },
];

export class chart3 extends PureComponent {
  render() {
    return (
      <div className="all" mt-4>
        <div className="mapChart">
          <iframe
            src="https://public.tableau.com/views/_16969927078600/3?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="600"
            title="광어"
          />
        </div>
        <div className="chart m-5">
          <div className="regionchart">
            <div className="title">지역별 광어 출하량</div>
            <LineChart
              width={700}
              height={200}
              data={regiondata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <title text="차트 제목" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
              <YAxis
                domain={[0, 30000]}
                ticks={[0, 5000, 15000, 25000, 30000]}
                tickCount={5}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="제주도"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="완도"
                stroke="#82ca9d"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="기타"
                stroke="#d6bf6b"
                strokeWidth={2}
              />
            </LineChart>
          </div>{" "}
          {/* regionchart */}
          <div className="sizebarchart">
            <div className="title">크기별 광어 출하량</div>
            <BarChart
              width={700}
              height={200}
              data={sizedata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                domain={[0, 30000]}
                ticks={[0, 5000, 15000, 25000, 30000]}
                tickCount={6}
              />
              <Tooltip />
              <Legend align="center" margin={{ left: 100 }} />
              <Bar dataKey="500g 미만" fill="#8884d8" />
              <Bar dataKey="500g~750g" fill="#8884d8" />
              <Bar dataKey="750~1kg" fill="#82ca9d" />
              <Bar dataKey="1kg 이상" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    );
  }
}

export default chart3;
