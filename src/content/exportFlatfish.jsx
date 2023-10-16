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
            src="https://public.tableau.com/views/2022_16969042846270/2_1?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="1000"
            title="광어 수출"
          />
        </div>
      </div>
    );
  }
}
