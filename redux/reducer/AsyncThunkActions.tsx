import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
FormData,
CoinTrend,
CoinSearch,
Search,
Trend,
} from "../../dataInterface.ts";

const apiService = axios.create({
baseURL: "https://api.coingecko.com/api/v3/",
});

export const getTrends = createAsyncThunk("getCryptoTrends", async () => {
const getTrendsData = await apiService.get("search/trending");

const getTrendscoins: Trend[] = getTrendsData.data.coins.map(
(coin: CoinTrend) => ({
id: coin.item.id,
name: coin.item.name,
image: coin.item.large,
price: coin.item.data.price,
priceBTC: coin.item.data.price_btc,
})
);
return getTrendscoins;
});

export const getSearch = createAsyncThunk(
"getCryptoSearch",
async (search: string) => {
const getSearch = await apiService.get(`search?query=${search}`);

const getSearchcoins: Search[] = getSearch.data.coins.map(
(coin: CoinSearch) => ({
id: coin.id,
name: coin.name,
image: coin.large,
rank: coin.market_cap_rank,
})
);

return getSearchcoins;
}
);

export const getChart = createAsyncThunk(
"getCryptoChart",
async (data: FormData) => {
const { id, currency, days, precision } = data;

const res = await apiService.get(
`coins/${id}/market_chart?vs_currency=${currency}&days=${days}&precision=${precision}`
);

const chartData = res.data.prices.map((price: string | number[]) => {
const [timestamp, p] = price;
return { Date: new Date(timestamp).getHours(), Price: p };
});

return chartData;
}
);

export const getGraph = createAsyncThunk("getGraphHome", async () => {
const getData = await apiService.get(
"coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false&price_change_percentage=24h&locale=en"
);

const getGraphcoins = getData.data.map((coin: any) => ({
symbol: coin.symbol,
currentPrice: coin.current_price,
marketCap: coin.market_cap,
rank: coin.market_cap_rank,
volume: coin.total_volume,
high: coin.high_24h,
low: coin.low_24h,
priceChange: coin.price_change_24h,
priceChangePerc: coin.price_change_percentage_24h,
marketChange: coin.market_cap_change_24h,
marketChangePerc: coin.market_cap_change_percentage_24h,
}));
return getGraphcoins;
});

// multiple API request like this
// const [info, res] = await Promise.all([
//    apiService.get(
//      `coins/markets?vs_currency=${currency}&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
//    ),
//    apiService.get(
//      `coins/${id}/market_chart?vs_currency=${currency}&days=${days}&precision=${precision}`
//    )
//  ])

//   console.log("chartThunk", res.data.prices);
//   console.log("chartThunk", info.data);
