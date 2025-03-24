import "@/styles/globals.css";
import { AppProvider } from "./contexts/PortfolioContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  );
}
