import styles from "./App.module.css";
import CurrencyWidget from "./components/CurrencyWidget/CurrencyWidget";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className={styles.widgetWrapper}>
        <CurrencyWidget />
      </main>
      <Footer />
    </>
  );
}

export default App;
