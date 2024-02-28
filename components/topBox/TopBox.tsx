'use client'

import React from 'react';

import styles from "./topBox.module.scss";
import { useState, useEffect } from "react";
import { RootState } from "../../dataInterface";
import { useSelector } from "react-redux";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TopBox = () => {


const trends = useSelector((state: RootState) => state.crypto.trendCoins);

const [progress, setProgress] = useState<number>(0);

let timeOut;
const incrementProgress = () => {
timeOut = setTimeout(() => {
setProgress(progress + 10);
}, 100);
};
useEffect(() => {
if (progress < 91 && !trends) {
incrementProgress();
return () => {
clearTimeout(timeOut);
};
}
}, [progress]);

return (
<div className={styles.topBox}>
<h1>Top Trending</h1>
<div className={styles.list}>
{trends ? (
trends.map((trend) => (
<div className={styles.listItem} key={trend.id}>
<div className={styles.user}>

<div className={styles.userTexts}>
<span className={styles.username}>{trend.name}</span>

</div>
</div>
<span className={styles.amount}>{trend.price}</span>
</div>
))
) : (
<div style={{ width: 100, height: 100 }}>
<CircularProgressbar value={progress} maxValue={1} text={`${progress}%`} />
</div>
)}
</div>
</div>
);
};

export default TopBox;
