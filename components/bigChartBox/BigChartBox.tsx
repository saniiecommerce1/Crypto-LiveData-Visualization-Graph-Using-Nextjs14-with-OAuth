import React from "react";
import styles from "./bigChartBox.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../dataInterface";



import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";




const BigChartBox = () => {

  const {graphDataHome} = useSelector((state:RootState) => state.crypto);



  let chartData;
  
  if (graphDataHome){
  
  chartData = graphDataHome.map((data) => ({symbol: data.symbol, high: data.high, low: data.low}) )
 
  }
  return (
    <div className={styles.bigChartBox}>
      <h1>Price Analytics</h1>
      <div className={styles.chart}>
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="symbol" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="high"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="low"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
                 </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
