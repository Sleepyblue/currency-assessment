export interface DataItem {
  ask: number;
  currency: string;
}

export interface TickerData {
  ask: string;
  bid: string;
  currency: string;
  pair: string;
}

export enum CurrenciesEnum {
  BCH = "BCH",
  BAT = "BAT",
  BTC = "BTC",
  CNY = "CNY",
  DKK = "DKK",
  ETH = "ETH",
  EUR = "EUR",
  GBP = "GBP",
  HKD = "HKD",
  USD = "USD",
  XAU = "XAU",
}
