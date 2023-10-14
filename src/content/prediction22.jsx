// 2022 실제값, 예측 차트
import { render } from "@testing-library/react";
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

const data2022 = [
  {
    name: "1월",
    실제값: 9955,
    예측값: 10177,
  },
  {
    name: "2월",
    실제값: 12959,
    예측값: 8421,
  },
  {
    name: "3월",
    실제값: 9874,
    예측값: 6252,
  },
  {
    name: "4월",
    실제값: 8389,
    예측값: 6137,
  },
  {
    name: "5월",
    실제값: 4534,
    예측값: 4165,
  },
  {
    name: "6월",
    실제값: 5469,
    예측값: 3754,
  },
  {
    name: "7월",
    실제값: 5469,
    예측값: 3754,
  },
  {
    name: "8월",
    실제값: 5469,
    예측값: 3754,
  },
  {
    name: "9월",
    실제값: 5469,
    예측값: 3754,
  },
  {
    name: "10월",
    실제값: 5469,
    예측값: 3754,
  },
  {
    name: "11월",
    실제값: 5469,
    예측값: 3754,
  },
  {
    name: "12월",
    실제값: 5469,
    예측값: 3754,
  },
];

const data2024 = [
  {
    name: "1월",
    예측값: 10177,
  },
  {
    name: "2월",
    예측값: 8421,
  },
  {
    name: "3월",
    예측값: 6252,
  },
  {
    name: "4월",
    예측값: 6137,
  },
  {
    name: "5월",
    예측값: 4165,
  },
  {
    name: "6월",
    예측값: 3754,
  },
  {
    name: "7월",
    예측값: 3754,
  },
  {
    name: "8월",
    예측값: 3754,
  },
  {
    name: "9월",
    예측값: 3754,
  },
  {
    name: "10월",
    예측값: 3754,
  },
  {
    name: "11월",
    예측값: 3754,
  },
  {
    name: "12월",
    예측값: 3754,
  },
];

export default class prediction22 extends PureComponent {
  render() {
    return (
      <div>
        <div className="flatchart2022">
          <div className="title">2022 광어 산지가격</div>
          <LineChart
            width={730}
            height={350}
            data={data2022}
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
              dataKey="실제값"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="예측값"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="rockchart2022">
          <div className="title">2022 우럭 산지가격</div>
          <LineChart
            width={730}
            height={350}
            data={data2022}
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
              dataKey="실제값"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="예측값"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="flatchart2024">
          <div className="title">2024 광어 예측가격</div>
          <LineChart
            width={730}
            height={350}
            data={data2024}
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
              dataKey="실제값"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="예측값"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="rockchart2024">
          <div className="title">2024 우럭 예측가격</div>
          <LineChart
            width={730}
            height={350}
            data={data2024}
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
              dataKey="실제값"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="예측값"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </div>
      </div>
    );
  }
}
