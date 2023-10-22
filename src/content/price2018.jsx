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
    제주산지가격: 11545,
  },
  {
    name: "2월",
    제주산지가격: 11173,
  },
  {
    name: "3월",
    제주산지가격: 13432,
  },
  {
    name: "4월",
    제주산지가격: 12688,
  },
  {
    name: "5월",
    제주산지가격: 13034,
  },
  {
    name: "6월",
    제주산지가격: 12646,
  },
  {
    name: "7월",
    제주산지가격: 11961,
  },
  {
    name: "8월",
    제주산지가격: 9978,
  },
  {
    name: "9월",
    제주산지가격: 10145,
  },
  {
    name: "10월",
    제주산지가격: 10598,
  },
  {
    name: "11월",
    제주산지가격: 9641,
  },
  {
    name: "12월",
    제주산지가격: 8541,
  },
];

const rockdataYear = [
  {
    name: "1월",
    통영산지가격: 6312,
  },
  {
    name: "2월",
    통영산지가격: 6636,
  },
  {
    name: "3월",
    통영산지가격: 7139,
  },
  {
    name: "4월",
    통영산지가격: 7268,
  },
  {
    name: "5월",
    통영산지가격: 7042,
  },
  {
    name: "6월",
    통영산지가격: 7307,
  },
  {
    name: "7월",
    통영산지가격: 7417,
  },
  {
    name: "8월",
    통영산지가격: 8319,
  },
  {
    name: "9월",
    통영산지가격: 11424,
  },
  {
    name: "10월",
    통영산지가격: 11057,
  },
  {
    name: "11월",
    통영산지가격: 9675,
  },
  {
    name: "12월",
    통영산지가격: 9758,
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
