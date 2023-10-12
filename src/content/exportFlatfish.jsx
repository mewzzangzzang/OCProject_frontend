// 광어 수출

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const sizedata = [
  {
    name: "일본",
    중량: 1398287,
  },
  {
    name: "미국",
    중량: 554800,
  },
  {
    name: "베트남",
    중량: 212734,
  },
  {
    name: "싱가포르",
    중량: 22436,
  },
  {
    name: "대만",
    중량: 14243,
  },
  {
    name: "캐나다",
    중량: 10540,
  },
  {
    name: "필리핀",
    중량: 5336,
  },
  {
    name: "태국",
    중량: 4685,
  },
  {
    name: "말레이시아",
    중량: 894,
  },
  {
    name: "라오스",
    중량: 366,
  },
  {
    name: "몽골",
    중량: 90,
  },
];

export default class exportFlatfish extends PureComponent {
  render() {
    return (
      <div className="all" mt-4>
        <div className="mapChart">
          <iframe
            src="https://public.tableau.com/views/2022_16969071533950/1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="600"
            title="광어 수출"
          />
        </div>
        <div className="chart" mt-5>
          <div className="sizebarchart">
            <div className="title">크기별 우럭 출하량</div>
            <BarChart
              width={1400}
              height={350}
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
              <YAxis
                domain={[0, 550000, 1400000]}
                ticks={[0, 100, 500, 10000, 550000, 1400000]}
                tickCount={5}
              />
              <Tooltip />
              <Legend align="center" margin={{ left: 100 }} />
              <Bar dataKey="중량" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    );
  }
}
