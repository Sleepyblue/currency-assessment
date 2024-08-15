import "./App.css";
import { useTicker } from "./queries/useTicker";
import { useQueryClient } from "@tanstack/react-query";

function App() {
  const { data, isError, isLoading } = useTicker("USD");
  const queryClient = useQueryClient();

  const handleInvalidate = () => {
    queryClient.invalidateQueries({ queryKey: ["ticker"] });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data.</p>;
  }

  const slicedCurrency = data?.slice(0, 10);

  return (
    <>
      <h1>Ticker data</h1>
      <pre>{JSON.stringify(slicedCurrency, null, 2)}</pre>
      <button onClick={handleInvalidate}>Refresh Data</button>
    </>
  );
}

export default App;
