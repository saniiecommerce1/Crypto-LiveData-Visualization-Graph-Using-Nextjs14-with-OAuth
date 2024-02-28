export type Trend = {
    id: string,
    name: string,
    image: string,
    price: number,
    priceBTC: number
  
  } 
  
export type Search = {
    id: string,
    name: string,
    image: string,
    rank:number
  } 
  
export interface Graph{
  symbol: string,
  currentPrice: number,
  marketCap:number,
  rank:number ,
  volume: number,
  high: number,
  low: number ,
  priceChange: number,
  priceChangePerc: number ,
  marketChange: number,
  marketChangePerc: number,
}

export interface Initial{
    trendCoins: Trend[] | null;
    searchCoins: Search[] | null;
    marketChart: object [];
    graphDataHome: Graph [] | null;
    error: string | undefined,


  }
  
  
export interface RootState {
    crypto: Initial
  }
  

export interface FormData{
  id: string | undefined,
  currency: string,
  days: number,
  precision: number
}


export interface CoinTrend {
  item: {
    id: string;
    name: string;
    large: string;
    data: {
      price: number;
      price_btc: number;
    };
  }
  }


  export interface CoinSearch {
    id: string;
    name: string;
    large: string;
    market_cap_rank: number
  }