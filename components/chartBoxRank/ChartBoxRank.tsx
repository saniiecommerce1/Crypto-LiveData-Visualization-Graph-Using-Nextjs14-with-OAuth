import React from "react";
import styles from "../chartBox/chartBox.module.scss";

import Link from "next/link";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../../dataInterface";


const ChartBoxRank = () => {

  const {graphDataHome} = useSelector((state:RootState) => state.crypto);


  let avgCurrentRank = 0;
  let chartData;
  
  if (graphDataHome){
  const avgCurrent = graphDataHome.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rank;
    }, 0);
    
  avgCurrentRank = avgCurrent / graphDataHome.length;
  chartData = graphDataHome.map((data) => ({symbol: data.symbol, rank: data.rank }) )
 
  }

  // return ({graphDataHome? <h1>runner</h1>: <h1>loader</h1>})
  return ( <>{graphDataHome? 
  <div className={styles.chartBox}>
  
  <div className={styles.chartInfo}>
  <div>Current Rank</div> 
 
    <div className={styles.chart}>
      
      <ResponsiveContainer width="200%" height="50%">
        <LineChart data={chartData}>
          <Tooltip
            contentStyle={{ background: "transparent", border: "none" }}
            labelStyle={{ display: "none" }}
            position={{ x: 10, y: 70 }}
          />
          <Line
            type="monotone"
            dataKey='rank'          
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>


      </ResponsiveContainer>
    </div>
    <div className={styles.texts}>Average</div>
  </div>

  <div className={styles.boxInfo}>
  

    <Link href="/" style={{ color: "#8884d8" }}>
      Detail
    </Link>
    <h1>{avgCurrentRank }</h1>
  </div>



</div>: <div>loading... </div>}</>)
  
  
};

export default ChartBoxRank;





