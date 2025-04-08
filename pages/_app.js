import "@/styles/globals.css";

import { motion } from "framer-motion";
import { AppProvider } from "../contexts/PortfolioContext";
import { Poppins } from "next/font/google";
import "../styles/globals.css"; // If you have global styles

const poppinsFont = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <motion.div
      // initial={{ opacity: 0, x: -180 }} // Start state
      // animate={{ opacity: 1, x: 0 }} // End state
      // transition={{
      //   duration: 1,
      //   type: "spring", // Bounce effect
      //   stiffness: 300, // Strength of the bounce
      //   damping: 6, // How quickly the bounce settles
      // }}
      className={`${poppinsFont.className}`}
    >
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </motion.div>
  );
}
