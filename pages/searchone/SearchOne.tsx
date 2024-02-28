'use client'
import React from 'react'
import styles from "../../components/single/single.module.scss";
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getChart } from "../../redux/reducer/AsyncThunkActions";
import { useAppDispatch } from "../../redux/store";
import { RootState, FormData } from "../../dataInterface";
import {
ResponsiveContainer,
AreaChart,
Area,
XAxis,
YAxis,
Legend,
CartesianGrid,
Tooltip,
} from "recharts";

export default function SearchOne({id}) {

const dispatch = useAppDispatch();
const [chartParam, setChartParam] = useState({
currency: "usd",
days: 5,
precision: 2,
});

const { searchCoins, marketChart } = useSelector(
(state: RootState) => state.crypto
);

const handleChange = (
e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
) => setChartParam((prev) => ({ ...prev, [e.target.name]: e.target.value }));

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
const data: FormData = { id: id, ...chartParam };
dispatch(getChart(data));
};

let searchOne;
if (searchCoins) searchOne = searchCoins.find((sear) => sear.id == id);

useEffect(() => {
const data: FormData = { id: id, ...chartParam };
dispatch(getChart(data));
}, []);

return (
<div className={styles.user}>
{searchOne ? (
<div className={styles.single}>
<div className={styles.view}>
<div className={styles.info}>
<div className={styles.topInfo}>
{searchOne.image && <Image className={styles.img} src={searchOne.image} alt="" width={100} height={100}/>}
<h1>{searchOne.name}</h1>
</div>

{searchCoins && marketChart ? (
<div className={styles.details}>
<form onSubmit={handleSubmit}>
<div className={styles.item}>
<label className={styles.itemTitle} htmlFor="days">
Choose Days Max 10
</label>
<input
className={styles.itemValue}
type="number"
min={1}
max={10}
id="days"
name="days"
value={chartParam.days}
onChange={handleChange}
/>
</div>

<div className={styles.item}>
<label className={styles.itemTitle} htmlFor="currency">
currency
</label>
<select
className={styles.itemValue}
id="currency"
name="currency"
value={chartParam.currency}
onChange={handleChange}
>
<option value="usd">USD</option>
<option value="eur">EUR</option>
<option value="jpy">JAP</option>
</select>
</div>

<div className={styles.item}>
<label className={styles.itemTitle} htmlFor="precision">
Choose Precision Limit 10
</label>
<input
className={styles.itemValue}
type="number"
min={1}
max={10}
name="precision"
id="precision"
value={chartParam.precision}
onChange={handleChange}
/>
</div>

<button type="submit">View Graph</button>
</form>
</div>
) : (
""
)}
</div>
<hr />

{marketChart && (
<div className={styles.chart}>
<ResponsiveContainer width="100%" height="100%">
<AreaChart
width={500}
height={300}
data={marketChart}
margin={{
top: 5,
right: 30,
left: 20,
bottom: 5,
}}
>
<XAxis dataKey="Date" />
<YAxis />
<Tooltip />
<Legend />
<CartesianGrid strokeDasharray="3 3" />
<Area type="monotone" dataKey="Price" stroke="#82ca9d" fill="#8884d8" />
</AreaChart>
</ResponsiveContainer>
</div>
)}
</div>
</div>
) : (
"loading..."
)}
</div>
);
}
