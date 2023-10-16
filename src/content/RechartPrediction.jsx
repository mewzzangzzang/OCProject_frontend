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

const flatdata2022 = [
  {
    name: "1월",
    실제값: 13471,
    예측값: 12417,
  },
  {
    name: "2월",
    실제값: 13248,
    예측값: 12210,
  },
  {
    name: "3월",
    실제값: 12847,
    예측값: 11796,
  },
  {
    name: "4월",
    실제값: 12988,
    예측값: 11648,
  },
  {
    name: "5월",
    실제값: 13666,
    예측값: 12370,
  },
  {
    name: "6월",
    실제값: 13832,
    예측값: 12537,
  },
  {
    name: "7월",
    실제값: 13806,
    예측값: 12618,
  },
  {
    name: "8월",
    실제값: 13706,
    예측값: 12508,
  },
  {
    name: "9월",
    실제값: 13598,
    예측값: 12814,
  },
  {
    name: "10월",
    실제값: 14470,
    예측값: 12816,
  },
  {
    name: "11월",
    실제값: 11528,
    예측값: 13477,
  },
  {
    name: "12월",
    실제값: 14166,
    예측값: 10549,
  },
];

const rockdata2022 = [
  {
    name: "1월",
    실제값: 16053,
    예측값: 12744,
  },
  {
    name: "2월",
    실제값: 12716,
    예측값: 12576,
  },
  {
    name: "3월",
    실제값: 10880,
    예측값: 10320,
  },
  {
    name: "4월",
    실제값: 9067,
    예측값: 9905,
  },
  {
    name: "5월",
    실제값: 7471,
    예측값: 8489,
  },
  {
    name: "6월",
    실제값: 8318,
    예측값: 7260,
  },
  {
    name: "7월",
    실제값: 10903,
    예측값: 8804,
  },
  {
    name: "8월",
    실제값: 9144,
    예측값: 11042,
  },
  {
    name: "9월",
    실제값: 13199,
    예측값: 8307,
  },
  {
    name: "10월",
    실제값: 13493,
    예측값: 12649,
  },
  {
    name: "11월",
    실제값: 12396,
    예측값: 11569,
  },
  {
    name: "12월",
    실제값: 11059,
    예측값: 10892,
  },
];

const data2024 = [
  {
    name: "1월",
    예측값: 10177,
  },
  {
    name: "2월",
    예측값: 12177,
  },
  {
    name: "3월",
    예측값: 11577,
  },
  {
    name: "4월",
    예측값: 10177,
  },
  {
    name: "5월",
    예측값: 9608,
  },
  {
    name: "6월",
    예측값: 11577,
  },
  {
    name: "7월",
    예측값: 13579,
  },
  {
    name: "8월",
    예측값: 12086,
  },
  {
    name: "9월",
    예측값: 11577,
  },
  {
    name: "10월",
    예측값: 10068,
  },
  {
    name: "11월",
    예측값: 11577,
  },
  {
    name: "12월",
    예측값: 12577,
  },
];

const rockdata2024 = [
  {
    name: "1월",
    실제값: 16053,
    예측값: 12744,
  },
  {
    name: "2월",
    실제값: 12716,
    예측값: 12576,
  },
  {
    name: "3월",
    실제값: 10880,
    예측값: 10320,
  },
  {
    name: "4월",
    실제값: 9067,
    예측값: 9905,
  },
  {
    name: "5월",
    실제값: 7471,
    예측값: 8489,
  },
  {
    name: "6월",
    실제값: 8318,
    예측값: 7260,
  },
  {
    name: "7월",
    실제값: 10903,
    예측값: 8804,
  },
  {
    name: "8월",
    실제값: 9144,
    예측값: 11042,
  },
  {
    name: "9월",
    실제값: 13199,
    예측값: 8307,
  },
  {
    name: "10월",
    실제값: 13493,
    예측값: 12649,
  },
  {
    name: "11월",
    실제값: 12396,
    예측값: 11569,
  },
  {
    name: "12월",
    실제값: 11059,
    예측값: 10892,
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
            data={flatdata2022}
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
              domain={[10000, 15000]}
              ticks={[10000, 12500, 15000]}
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
            data={rockdata2022}
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
              domain={[5000, 20000]}
              ticks={[5000, 10000, 15000, 20000]}
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
              domain={[5000, 15000]}
              ticks={[5000, 10000, 15000]}
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
              stroke="#e9c46a"
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="rockchart2024">
          <div className="title">2024 우럭 예측가격</div>
          <LineChart
            width={730}
            height={350}
            data={rockdata2024}
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
              domain={[5000, 15000]}
              ticks={[5000, 10000, 15000]}
              tickCount={4}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="예측값"
              stroke="#2a9d8f"
              strokeWidth={2}
            />
          </LineChart>
        </div>
      </div>
    );
  }
}
