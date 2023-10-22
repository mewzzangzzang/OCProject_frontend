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
    제주산지가격: 8591,
  },
  {
    name: "2월",
    제주산지가격: 8200,
  },
  {
    name: "3월",
    제주산지가격: 7640,
  },
  {
    name: "4월",
    제주산지가격: 8806,
  },
  {
    name: "5월",
    제주산지가격: 12164,
  },
  {
    name: "6월",
    제주산지가격: 12070,
  },
  {
    name: "7월",
    제주산지가격: 12142,
  },
  {
    name: "8월",
    제주산지가격: 12503,
  },
  {
    name: "9월",
    제주산지가격: 12320,
  },
  {
    name: "10월",
    제주산지가격: 13212,
  },
  {
    name: "11월",
    제주산지가격: 13238,
  },
  {
    name: "12월",
    제주산지가격: 12292,
  },
];

const rockdataYear = [
  {
    name: "1월",
    통영산지가격: 6408,
  },
  {
    name: "2월",
    통영산지가격: 6236,
  },
  {
    name: "3월",
    통영산지가격: 5602,
  },
  {
    name: "4월",
    통영산지가격: 6182,
  },
  {
    name: "5월",
    통영산지가격: 6814,
  },
  {
    name: "6월",
    통영산지가격: 6215,
  },
  {
    name: "7월",
    통영산지가격: 6454,
  },
  {
    name: "8월",
    통영산지가격: 6826,
  },
  {
    name: "9월",
    통영산지가격: 7669,
  },
  {
    name: "10월",
    통영산지가격: 8485,
  },
  {
    name: "11월",
    통영산지가격: 8215,
  },
  {
    name: "12월",
    통영산지가격: 9339,
  },
];

export default class mainChart2018Rechart extends PureComponent {
  render() {
    return (
      <div>
        <div className="flatchart2022">
          <div className="title">2020 광어 월별 산지가격</div>
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
          <div className="title">2020 우럭 월별 산지가격</div>
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
            src="https://public.tableau.com/views/2020_16979686923140/2020_2?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="600"
            title="광어"
          />
        </div>
      </div>
    );
  }
}
