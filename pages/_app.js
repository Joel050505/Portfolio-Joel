import "@/styles/globals.css";

import Header from "./components/Header";
import { AppProvider } from "./contexts/PortfolioContext";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import "../styles/globals.css"; // If you have global styles

const poppinsFont = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppinsFont.className}`}>
      <AppProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}
