import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 데이터를 가져오는 API 엔드포인트를 사용하거나 JSON 파일을 불러올 수 있습니다.
    axios.get("http://127.0.0.1:8000/").then((response) => {
      setData(response.data);
    });
  }, []);

  // JSON 데이터를 Recharts에서 사용 가능한 형식으로 가공
  //   const formattedData = data.map((item) => ({
  //     name: item.월, // x 축에 해당하는 값
  //     value: item.제주산지가격, // y 축에 해당하는 값
  //   }));

  return (
    <div className="all mt-4">
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="월" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="제주산지가격"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default ChartComponent;
