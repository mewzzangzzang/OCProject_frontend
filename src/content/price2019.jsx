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

export default class mainChart2018Rechart extends PureComponent {
  render() {
    return (
      <div>
        <div className="flatchart2022">
          <div className="title">2019 광어 산지가격</div>
          <LineChart
            width={730}
            height={350}
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
              domain={[5000, 15000]}
              ticks={[5000, 10000, 15000]}
              tickCount={4}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="제주산지가격"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="rockchart2022">
          <div className="title">2019 우럭 산지가격</div>
          <LineChart
            width={730}
            height={350}
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
              domain={[5000, 15000]}
              ticks={[5000, 10000, 15000]}
              tickCount={4}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="통영산지가격"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="rockchart2022">
          <iframe
            src="https://public.tableau.com/views/_16979658089990/1_1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="600"
            title="광어"
          />
        </div>
      </div>
    );
  }
}
