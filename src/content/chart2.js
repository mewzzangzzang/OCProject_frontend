import React, { PureComponent } from "react";
import "./chart2.css";
import { Link } from "react-router-dom";
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

// 우럭 출하량

const regiondata = [
  {
    name: "2017",
    경남: 9955,
    전남: 10177,
    기타: 2325,
  },
  {
    name: "2018",
    경남: 12959,
    전남: 8421,
    기타: 3013,
  },
  {
    name: "2019",
    경남: 9874,
    전남: 6252,
    기타: 2896,
  },
  {
    name: "2020",
    경남: 8389,
    전남: 6137,
    기타: 2602,
  },
  {
    name: "2021",
    경남: 4534,
    전남: 4165,
    기타: 4259,
  },
  {
    name: "2022",
    경남: 5469,
    전남: 3754,
    기타: 2898,
  },
];

const sizedata = [
  {
    name: "2017",
    "400g 미만": 3153,
    "400g~500g": 7723,
    "500~600g": 8417,
    "600g 이상": 3164,
    amt: 4000,
  },
  {
    name: "2018",
    "400g 미만": 3284,
    "400g~500g": 11117,
    "500~600g": 6623,
    "600g 이상": 3369,
    amt: 4000,
  },
  {
    name: "2019",
    "400g 미만": 2383,
    "400g~500g": 6988,
    "500~600g": 8291,
    "600g 이상": 1360,
    amt: 4000,
  },
  {
    name: "2020",
    "400g 미만": 3290,
    "400g~500g": 6748,
    "500~600g": 5051,
    "600g 이상": 2039,
    amt: 4000,
  },
  {
    name: "2021",
    "400g 미만": 2287,
    "400g~500g": 4981,
    "500~600g": 4169,
    "600g 이상": 1521,
    amt: 4000,
  },
  {
    name: "2022",
    "400g 미만": 2104,
    "400g~500g": 4085,
    "500~600g": 4583,
    "600g 이상": 1346,
    amt: 4000,
  },
];

export default class chart2 extends PureComponent {
  render() {
    return (
      <div className="all mt-4">
        <div className="regionchart">
          <div className="title">지역별 우럭 출하량</div>
          <LineChart
            width={500}
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
              domain={[0, 15000]}
              ticks={[0, 5000, 10000, 15000]}
              tickCount={4}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="경남"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="전남"
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
        {/* <div className="sizechart">
          <div className="title">크기별 우럭 출하량</div>
          <LineChart
            width={500}
            height={200}
            data={sizedata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <title text="크기별 우럭 출하량" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
            <YAxis domain={[0, 12000]} ticks={[0, 6000, 12000]} tickCount={3} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="400g 미만"
              stroke="#b382ca"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="400g~500g"
              stroke="#35bd70"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="500~600g"
              stroke="#ffb330"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="600g 이상"
              stroke="#ff00fb"
              strokeWidth={2}
            />
          </LineChart>
        </div>{" "} */}
        {/* sizechart */}
        <div className="sizebarchart">
          <div className="title">크기별 우럭 출하량</div>
          <BarChart
            width={500}
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
            <YAxis domain={[0, 12000]} ticks={[0, 6000, 12000]} tickCount={3} />
            <Tooltip />
            <Legend align="center" margin={{ left: 100 }} />
            <Bar dataKey="400g 미만" fill="#8884d8" />
            <Bar dataKey="400g~500g" fill="#8884d8" />
            <Bar dataKey="500~600g" fill="#82ca9d" />
            <Bar dataKey="600g 이상" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    );
  }
}
