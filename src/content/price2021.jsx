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
    제주산지가격: 12064,
  },
  {
    name: "2월",
    제주산지가격: 11986,
  },
  {
    name: "3월",
    제주산지가격: 12806,
  },
  {
    name: "4월",
    제주산지가격: 13485,
  },
  {
    name: "5월",
    제주산지가격: 13978,
  },
  {
    name: "6월",
    제주산지가격: 15219,
  },
  {
    name: "7월",
    제주산지가격: 15554,
  },
  {
    name: "8월",
    제주산지가격: 15058,
  },
  {
    name: "9월",
    제주산지가격: 14453,
  },
  {
    name: "10월",
    제주산지가격: 15381,
  },
  {
    name: "11월",
    제주산지가격: 15195,
  },
  {
    name: "12월",
    제주산지가격: 14204,
  },
];

const rockdataYear = [
  {
    name: "1월",
    통영산지가격: 10414,
  },
  {
    name: "2월",
    통영산지가격: 9759,
  },
  {
    name: "3월",
    통영산지가격: 10688,
  },
  {
    name: "4월",
    통영산지가격: 11876,
  },
  {
    name: "5월",
    통영산지가격: 11628,
  },
  {
    name: "6월",
    통영산지가격: 10176,
  },
  {
    name: "7월",
    통영산지가격: 10631,
  },
  {
    name: "8월",
    통영산지가격: 8709,
  },
  {
    name: "9월",
    통영산지가격: 13806,
  },
  {
    name: "10월",
    통영산지가격: 14957,
  },
  {
    name: "11월",
    통영산지가격: 16027,
  },
  {
    name: "12월",
    통영산지가격: 16593,
  },
];

export default class mainChart2018Rechart extends PureComponent {
  render() {
    return (
      <div>
        <div className="flatchart2022">
          <div className="title">2021 광어 월별 산지가격</div>
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
              domain={[0, 5000, 17000]}
              ticks={[7500, 17000]}
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
          <div className="title">2021 우럭 월별 산지가격</div>
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
            <YAxis domain={[0, 17000]} ticks={[7500, 17000]} tickCount={4} />
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
            src="https://public.tableau.com/views/2021_16979687293490/2021_2?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="600"
            title="광어"
          />
        </div>
      </div>
    );
  }
}
