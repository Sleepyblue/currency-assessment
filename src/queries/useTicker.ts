import { useQuery } from "@tanstack/react-query";
import SDK from "@uphold/uphold-sdk-javascript";

const sdk = new SDK({
  baseUrl: "http://localhost:3001/api",
  clientId: "foo",
  clientSecret: "bar",
});

const fetchTicker = async (currency: string) => {
  const data = await sdk.getTicker(currency);
  return data;
};

export const useTicker = (currency: string) => {
  return useQuery({
    queryKey: ["ticker"],
    queryFn: () => fetchTicker(currency),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
