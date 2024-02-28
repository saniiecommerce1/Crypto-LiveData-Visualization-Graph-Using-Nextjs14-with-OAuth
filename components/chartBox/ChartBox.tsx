import React from "react";
import styles from "./chartBox.module.scss";

import Link from "next/link";

import { Line, LineChart, ResponsiveContainer, Tooltip} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../../dataInterface";


const ChartBox = () => {

  const {graphDataHome} = useSelector((state:RootState) => state.crypto);


  let avgCurrentPrice = 0;
  let chartData;
  
  if (graphDataHome){
  const avgCurrent = graphDataHome.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.currentPrice;
    }, 0);
    
  avgCurrentPrice = avgCurrent / graphDataHome.length;
  chartData = graphDataHome.map((data) => ({symbol: data.symbol, currentPrice: data.currentPrice }) )
   
  }


  return ( <>{graphDataHome? 
    <div className={styles.chartBox}>
  
    <div className={styles.chartInfo}>
    <div><span>Current Price</span></div> 
   
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
              dataKey='currentPrice'
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
      <h1>${avgCurrentPrice.toFixed(2) }</h1>
    </div>
  
  
  
  </div>
  
  : <div>loading...</div>}</>)
  
  
};

export default ChartBox;



// const ChartBox = (props: Props) => {

  
//   return (
//     <div className={styles.chartBox">
//       <div className={styles.boxInfo">
//         <div className={styles.title">
//           <img src={props.icon} alt="" />
//           <span>{props.title}</span>
//         </div>
//         <h1>{props.number}</h1>
//         <Link to="/" style={{ color: props.color }}>
//           View all
//         </Link>
//       </div>
//       <div className={styles.chartInfo">
//         <div className={styles.chart">
//           <ResponsiveContainer width="99%" height="100%">
//             <LineChart data={props.chartData}>
//               <Tooltip
//                 contentStyle={{ background: "transparent", border: "none" }}
//                 labelStyle={{ display: "none" }}
//                 position={{ x: 10, y: 70 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey={props.dataKey}
//                 stroke={props.color}
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//         <div className={styles.texts">
//           <span
//             className={styles.percentage"
//             style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
//           >
//             {props.percentage}%
//           </span>
//           <span className={styles.duration">this month</span>
//         </div>
//       </div>
//     </div>
//   );
// };