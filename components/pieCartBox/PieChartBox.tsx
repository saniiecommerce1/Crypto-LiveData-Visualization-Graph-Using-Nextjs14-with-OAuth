import React from 'react';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./pieChartBox.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../dataInterface";

const PieChartBox = () => {

  const {graphDataHome} = useSelector((state:RootState) => state.crypto);



  let chartData;
  
  if (graphDataHome){

  chartData = graphDataHome.map((data, index) => {
  const color: string[] = ["#FF8042", "#FFBB28", "#00C49F", "#0088FE" ]  
  return  {symbol: data.symbol, marketCap: data.marketCap, color: color[index]} })

  chartData.length = 4 
  }


  return (
    <div className={styles.pieChartBox}>
      <div className={styles.search}><h1>Coins Market Cap</h1></div>

    

      <div className={styles.chart}>
        <ResponsiveContainer width="99%" height={180}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={chartData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="marketCap"
            >
              {chartData && chartData.map((data) => (
                <Cell key={data.symbol} fill={data.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.options}>
        {chartData && chartData.map((data) => (
          <div className={styles.option} key={data.symbol}>
            <div className={styles.title}>
              <div className={styles.dot} style={{ backgroundColor: data.color }} />
              <div>{data.symbol}</div>
            </div>
            <span>{data.marketCap}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PieChartBox;
