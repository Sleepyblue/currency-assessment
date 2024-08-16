import { useQuery } from "@tanstack/react-query";
import SDK from "@uphold/uphold-sdk-javascript";
import { CURRENCIES } from "../util/constants";
import { CurrenciesEnum } from "../types/types";

const sdk = new SDK({
  baseUrl: "http://localhost:3001/api",
  clientId: "foo",
  clientSecret: "bar",
});

const fetchTicker = async (currency: CurrenciesEnum) => {
  const otherCurrencies = CURRENCIES.filter((curr) => curr !== currency);
  const tickerData = await sdk.getTicker(currency);

  const data = otherCurrencies
    .map((curr) => {
      const match = tickerData.find((item: any) =>
        item.currency.startsWith(curr)
      );
      return match ? { currency: curr, ask: match.ask } : null;
    })
    .filter(Boolean);

  return data;
};

export const useTicker = (currency: CurrenciesEnum) => {
  return useQuery({
    queryKey: ["ticker", currency],
    queryFn: () => fetchTicker(currency),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
