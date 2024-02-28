import React from 'react';

import { Bar, BarChart, ResponsiveContainer, Tooltip} from "recharts";
import styles from "./barChartBox.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../dataInterface";


const BarChartBox = () => {

  const {graphDataHome} = useSelector((state:RootState) => state.crypto);

  let chartData;
  
  if (graphDataHome){

  chartData = graphDataHome.map((data) => ({symbol: data.symbol, marketChange: data.marketChange }) )
 
  }

  return (
    <div className={styles.barChartBox}>
      <h1>Market Change</h1>
      <div className={styles.chart}>
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>        
           
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <Bar dataKey='marketChange' fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
