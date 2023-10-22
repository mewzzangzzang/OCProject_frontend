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

const flatdataYear = [
  {
    name: "1월",
    제주산지가격: 8225,
  },
  {
    name: "2월",
    제주산지가격: 8582,
  },
  {
    name: "3월",
    제주산지가격: 8908,
  },
  {
    name: "4월",
    제주산지가격: 9667,
  },
  {
    name: "5월",
    제주산지가격: 8446,
  },
  {
    name: "6월",
    제주산지가격: 8066,
  },
  {
    name: "7월",
    제주산지가격: 8685,
  },
  {
    name: "8월",
    제주산지가격: 9112,
  },
  {
    name: "9월",
    제주산지가격: 8556,
  },
  {
    name: "10월",
    제주산지가격: 7963,
  },
  {
    name: "11월",
    제주산지가격: 7721,
  },
  {
    name: "12월",
    제주산지가격: 7532,
  },
];

const rockdataYear = [
  {
    name: "1월",
    통영산지가격: 8392,
  },
  {
    name: "2월",
    통영산지가격: 7001,
  },
  {
    name: "3월",
    통영산지가격: 6123,
  },
  {
    name: "4월",
    통영산지가격: 5754,
  },
  {
    name: "5월",
    통영산지가격: 6007,
  },
  {
    name: "6월",
    통영산지가격: 6034,
  },
  {
    name: "7월",
    통영산지가격: 6054,
  },
  {
    name: "8월",
    통영산지가격: 8067,
  },
  {
    name: "9월",
    통영산지가격: 8884,
  },
  {
    name: "10월",
    통영산지가격: 8771,
  },
  {
    name: "11월",
    통영산지가격: 7520,
  },
  {
    name: "12월",
    통영산지가격: 6577,
  },
];

export default class mainChart2018Rechart extends PureComponent {
  render() {
    return (
      <div>
        <div className="flatchart2022">
          <div className="title">2019 광어 월별 산지가격</div>
          <LineChart
            width={730}
            height={280}
            data={flatdataYear}
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
              domain={[0, 5000, 15000]}
              ticks={[7500, 15000]}
              tickCount={4}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="제주산지가격"
              stroke="#4E79A7"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="rockchart2022">
          <div className="title">2019 우럭 월별 산지가격</div>
          <LineChart
            width={730}
            height={280}
            data={rockdataYear}
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
              domain={[0, 5000, 15000]}
              ticks={[7500, 15000]}
              tickCount={4}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="통영산지가격"
              stroke="#EDC948"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="rockchart2022">
          <iframe
            src="https://public.tableau.com/views/2019_16979686604480/2019_2?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="600"
            title="광어"
          />
        </div>
      </div>
    );
  }
}
