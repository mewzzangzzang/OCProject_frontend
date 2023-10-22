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
    name: "2010년",
    제주산지가격: 11553,
  },
  {
    name: "2011년",
    제주산지가격: 10507,
  },
  {
    name: "2012년",
    제주산지가격: 10258,
  },
  {
    name: "2013년",
    제주산지가격: 11253,
  },
  {
    name: "2014년",
    제주산지가격: 8693,
  },
  {
    name: "2015년",
    제주산지가격: 10468,
  },
  {
    name: "2016년",
    제주산지가격: 11679,
  },
  {
    name: "2017년",
    제주산지가격: 12963,
  },
  {
    name: "2018년",
    제주산지가격: 11282,
  },
  {
    name: "2019년",
    제주산지가격: 8451,
  },
  {
    name: "2020년",
    제주산지가격: 11099,
  },
  {
    name: "2021년",
    제주산지가격: 14116,
  },
  {
    name: "2022년",
    제주산지가격: 13445,
  },
];

const rockdataYear = [
  {
    name: "2010년",
    통영산지가격: 8677,
  },
  {
    name: "2011년",
    통영산지가격: 9028,
  },
  {
    name: "2012년",
    통영산지가격: 6823,
  },
  {
    name: "2013년",
    통영산지가격: 8263,
  },
  {
    name: "2014년",
    통영산지가격: 8086,
  },
  {
    name: "2015년",
    통영산지가격: 9486,
  },
  {
    name: "2016년",
    통영산지가격: 8302,
  },
  {
    name: "2017년",
    통영산지가격: 6898,
  },
  {
    name: "2018년",
    통영산지가격: 8280,
  },
  {
    name: "2019년",
    통영산지가격: 7099,
  },
  {
    name: "2020년",
    통영산지가격: 7037,
  },
  {
    name: "2021년",
    통영산지가격: 12106,
  },
  {
    name: "2022년",
    통영산지가격: 11226,
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

export default class mainChartYearRechart extends PureComponent {
  render() {
    return (
      <div>
        <div className="flatchart2022">
          <div className="title">연도별 광어 산지가격</div>
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
          <div className="title">연도별 우럭 산지가격</div>
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
