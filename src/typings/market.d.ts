export interface GraphqlMarketResponse {
  markets: Market[];
}

export interface Market {
  marketSymbol: string;
  ticker?: Ticker;
  marketType: string;
  id: string;
}

export interface Ticker {
  lastPrice: string;
}
