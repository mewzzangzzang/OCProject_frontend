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
    제주산지가격: 10804,
  },
  {
    name: "2월",
    제주산지가격: 10337,
  },
  {
    name: "3월",
    제주산지가격: 11041,
  },
  {
    name: "4월",
    제주산지가격: 12391,
  },
  {
    name: "5월",
    제주산지가격: 12477,
  },
  {
    name: "6월",
    제주산지가격: 12187,
  },
  {
    name: "7월",
    제주산지가격: 12741,
  },
  {
    name: "8월",
    제주산지가격: 12646,
  },
  {
    name: "9월",
    제주산지가격: 12531,
  },
  {
    name: "10월",
    제주산지가격: 11436,
  },
  {
    name: "11월",
    제주산지가격: 10301,
  },
  {
    name: "12월",
    제주산지가격: 11257,
  },
];

const rockdataYear = [
  {
    name: "1월",
    통영산지가격: 8985,
  },
  {
    name: "2월",
    통영산지가격: 7777,
  },
  {
    name: "3월",
    통영산지가격: 7236,
  },
  {
    name: "4월",
    통영산지가격: 8080,
  },
  {
    name: "5월",
    통영산지가격: 7802,
  },
  {
    name: "6월",
    통영산지가격: 7307,
  },
  {
    name: "7월",
    통영산지가격: 7892,
  },
  {
    name: "8월",
    통영산지가격: 8687,
  },
  {
    name: "9월",
    통영산지가격: 9262,
  },
  {
    name: "10월",
    통영산지가격: 9885,
  },
  {
    name: "11월",
    통영산지가격: 8634,
  },
  {
    name: "12월",
    통영산지가격: 8070,
  },
];

export default class mainChart2018Rechart extends PureComponent {
  render() {
    return (
      <div>
        <div className="flatchart2022">
          <div className="title">2018 광어 월별 산지가격</div>
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
          <div className="title">2018 우럭 월별 산지가격</div>
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
            src="https://public.tableau.com/views/2018_16979686284340/2018_2?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="600"
            title="광어"
          />
        </div>
      </div>
    );
  }
}
