import Footer from "@/components/Common/Footer";
import HeadComp from "@/components/Common/Head";
import Navbar from "@/components/Common/Navbar";
import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
import Loading from "@/components/loading/loading";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: {
    template: "%s | Surya Praksh Silk Mills",
    default: "Surya Praksh Silk Mills",
  },
  category: "textile industry",
  keywords: [
    "Silk Mills",
    "Surya Mills",
    "Surya Prakash Mills",
    "Surya Praksh Silk Mills",
    "fabric manufacturing",
    "textile products",
    "silk mills",
    "silk fabric manufacturer",
    "silk fabrics",
    "uniform suppliers",
    "textile industry Bhiwandi",
    "textile manufacturing",
    "quality fabric products",
    "textile manufacturing unit",
    "fabric production capacity",
    "textile manufacturing India",
    "BOMBAY FILAFIL",
    "FILAFIL",
    "FILAFIL PLUS",
    "FILAFIL DOTS",
    "FILAFIL PRO",
    "FOUR SEASON",
    "SAMRAY",
    "SIGNATURE",
    "SUPREMO",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  description:
    "Discover the legacy of Surya Praksh Silk Mills in the textile industry. From humble beginnings with 6 powerlooms in a 600 sqft rented shed to a modern manufacturing unit spanning 28000 sqft, we specialize in producing quality fabrics. Our monthly capacity of 500000 meters serves customers across India. Explore our product categories: BOMBAY FILAFIL, FILAFIL, FILAFIL PLUS, FILAFIL DOTS, FILAFIL PRO, FOUR SEASON, SAMRAY, SIGNATURE, SUPREMO.",
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(true));
    router.events.on("routeChangeComplete", (e) => setLoading(false));

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(false));
      router.events.off("routeChangeStart", (e) => setLoading(true));
      router.events.off("routeChangeComplete", (e) => setLoading(false));
    };
  }, [router.events]);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeadComp />
          <Component {...pageProps} />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          <Footer />
        </>
      )}
    </>
  );
}
