// pages/_app.js
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Import optimized Google fonts
import { Inter, Playfair_Display,Instrument_Serif } from "next/font/google";

// Import global CSS
import "../styles/fonts.css";
import "../styles/mostHave.css";
import "../styles/globals.css";
import "../styles/embla.css";

import Footer from "@/components/Footer";

// Load multiple fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // CSS variable name
  display: "swap",
});

const playfair = Instrument_Serif({
  subsets: ["latin"],
    weight: "400",
  variable: "--font-playfair",
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Prevent browser auto scroll restore
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const pageVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }}
    >
      {/* Apply font variables globally */}
      <div
        key={router.asPath}
        className={`${inter.variable} ${playfair.variable}`}
      >
        <Component {...pageProps} />
        <Footer />
      </div>
    </AnimatePresence>
  );
}
