import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// 우럭 수입

const chinadata = [
  {
    name: "10년 1월",
    중량: 189806,
  },
  {
    name: "10년 2월",
    중량: 150151,
  },
  {
    name: "10년 11월",
    중량: 60145,
  },
  {
    name: "10년 12월",
    중량: 142876,
  },
  {
    name: "11년 1월",
    중량: 166251,
  },
  {
    name: "11년 2월",
    중량: 58100,
  },
  {
    name: "11년 3월",
    중량: 40198,
  },
  {
    name: "11년 12월",
    중량: 4382,
  },
  {
    name: "14년 1월",
    중량: 315,
  },
  {
    name: "21년 10월",
    중량: 100,
  },
  {
    name: "21년 12월",
    중량: 6800,
  },
  {
    name: "22년 1월",
    중량: 9840,
  },
  {
    name: "22년 10월",
    중량: 513,
  },
];

export default class importRockfish extends PureComponent {
  render() {
    return (
      <div className="all" mt-4>
        <div className="mapChart">
          <iframe
            src="https://public.tableau.com/views/2022_16969946504240/2_1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="600"
            title="우럭"
          />
        </div>
        <div className="linechart">
          <div className="chinachart">
            <div className="title">우럭 수입 현황 - 중국</div>
            <LineChart
              width={1400}
              height={330}
              data={chinadata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <title text="중국" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
              <YAxis
                domain={[0, 200000]}
                ticks={[0, 10000, 25000, 50000, 100000, 150000, 200000]}
                tickCount={6}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="중량"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </LineChart>
          </div>
        </div>
      </div>
    );
  }
}
