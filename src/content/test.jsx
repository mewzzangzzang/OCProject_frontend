import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  { name: "250g 미만", value: 4998 },
  { name: "250~500g", value: 1861 },
  { name: "500g~1kg", value: 1934 },
  { name: "1kg 이상", value: 575 },
];

export default function App() {
  return (
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}
