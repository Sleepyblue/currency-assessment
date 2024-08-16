import "./App.css";
import CurrencyWidget from "./components/CurrencyWidget/CurrencyWidget";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <CurrencyWidget />
      </main>
      <footer style={{ height: "200px" }}></footer>
    </>
  );
}

export default App;
