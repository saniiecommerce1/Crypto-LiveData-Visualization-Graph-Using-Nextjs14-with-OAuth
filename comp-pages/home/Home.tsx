'use client'

import React, { useEffect } from "react";
import styles from "./home.module.scss";
import { useAppDispatch } from "../../redux/store";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import ChartBoxRank from "../../components/chartBoxRank/ChartBoxRank";
import ChartBoxVolume from "../../components/chartBoxVolume/ChartBoxVolume";
import ChartBoxPriceChange from "../../components/chartBoxPriceChange/ChartBoxPriceChange";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";

import { getTrends, getGraph } from "../../redux/reducer/AsyncThunkActions";

const Home = () => {
const dispatch = useAppDispatch();

useEffect(() => {
dispatch(getTrends());
dispatch(getGraph())
});

return (
<div className={styles.home}>
<div className={`${styles.box} ${styles.box1}`}>
<TopBox />
</div>
<div className={`${styles.box} ${styles.box2}`}>
<ChartBox />
</div>
<div className={`${styles.box} ${styles.box3}`}>
<ChartBoxRank />
</div>
<div className={`${styles.box} ${styles.box4}`}>
<PieChartBox />
</div>
<div className={`${styles.box} ${styles.box5}`}>
<ChartBoxVolume />
</div>
<div className={`${styles.box} ${styles.box6}`}>
<ChartBoxPriceChange />
</div>
<div className={`${styles.box} ${styles.box7}`}>
<BigChartBox />
</div>
<div className={`${styles.box} ${styles.box8}`}>
<BarChartBox />
</div>
</div>
);
};

export default Home;
