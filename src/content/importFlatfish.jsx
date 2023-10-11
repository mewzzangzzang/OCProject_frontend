import React, { PureComponent } from "react";
// 광어 수입
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

const chinadata = [
  {
    name: "22년 1월",
    중량: 3184742.3,
  },
  {
    name: "22년 2월",
    중량: 2824333.1,
  },
  {
    name: "22년 3월",
    중량: 3577593.4,
  },
  {
    name: "22년 4월",
    중량: 3151993.6,
  },
  {
    name: "22년 5월",
    중량: 3399825.5,
  },
  {
    name: "22년 6월",
    중량: 3300513.4,
  },
  {
    name: "22년 7월",
    중량: 3263469.1,
  },
  {
    name: "22년 8월",
    중량: 3422597.2,
  },
];

const japandata = [
  {
    name: "22년 1월",
    중량: 1416830.6,
  },
  {
    name: "22년 2월",
    중량: 1651344.2,
  },
  {
    name: "22년 3월",
    중량: 1684571.7,
  },
  {
    name: "22년 4월",
    중량: 1359698.5,
  },
  {
    name: "22년 5월",
    중량: 1442681.6,
  },
  {
    name: "22년 6월",
    중량: 1702556.2,
  },
  {
    name: "22년 7월",
    중량: 1432258.5,
  },
  {
    name: "22년 8월",
    중량: 1278276.5,
  },
];

const philippindata = [
  {
    name: "22년 1월",
    중량: 426447.7,
  },
  {
    name: "22년 2월",
    중량: 191052.2,
  },
  {
    name: "22년 3월",
    중량: 184252.1,
  },
  {
    name: "22년 4월",
    중량: 284351.98,
  },
  {
    name: "22년 5월",
    중량: 314685.7,
  },
  {
    name: "22년 6월",
    중량: 554833.5,
  },
  {
    name: "22년 7월",
    중량: 427804.2,
  },
  {
    name: "22년 8월",
    중량: 152362.4,
  },
];

export default class importFlatfish extends PureComponent {
  render() {
    return (
      <div className="all" mt-4>
        <div className="mapChart">
          <iframe
            src="https://public.tableau.com/views/_16969872738330/1_1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="600"
            title="광어"
          />
        </div>
        {/* <h2>국가별 수입 중량 - 단위 톤</h2> */}
        <div className="chart m-5">
          <div className="chinachart">
            <div className="title">중국</div>
            <LineChart
              width={500}
              height={230}
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
                domain={[0, 30000]}
                ticks={[0, 3000000, 6000000]}
                tickCount={3}
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
          <div className="japanchart">
            <div className="title">일본</div>
            <LineChart
              width={500}
              height={230}
              data={japandata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <title text="일본" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
              <YAxis
                domain={[0, 30000]}
                ticks={[0, 1500000, 3000000]}
                tickCount={3}
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
          <div className="philippinchart">
            <div className="title">필리핀</div>
            <LineChart
              width={500}
              height={230}
              data={philippindata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <title text="필리핀" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
              <YAxis
                domain={[0, 30000]}
                ticks={[0, 400000, 800000]}
                tickCount={3}
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
