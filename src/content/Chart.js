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

const data = [
  {
    name: "2001",
    test2: 4000,
    test1: 2400,
    test3: 2700,
    amt: 2400,
  },
  {
    name: "2002",
    test2: 3000,
    test1: 1398,
    test3: 2700,
    amt: 2210,
  },
  {
    name: "2003",
    test2: 2000,
    test1: 9800,
    test3: 2700,
    amt: 2290,
  },
  {
    name: "2004",
    test2: 2780,
    test1: 3908,
    test3: 2700,
    amt: 2000,
  },
  {
    name: "2005",
    test2: 1890,
    test1: 4800,
    test3: 2700,
    amt: 2181,
  },
  {
    name: "엉니바보",
    test2: 2390,
    test1: 3800,
    test3: 2700,
    amt: 2500,
  },
  {
    name: "2006",
    test2: 3490,
    test1: 4300,
    test3: 2700,
    amt: 2100,
  },
];

export default class chart extends PureComponent {
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="test1"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="test2" stroke="#82ca9d" />
        <Line type="monotone" dataKey="test3" stroke="#8884d8" />
      </LineChart>
    );
  }
}
