import "./App.css";
import { useTicker } from "./queries/useTicker";

function App() {
  const { data, isError, isLoading } = useTicker("USD");

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
    </>
  );
}

export default App;
