import Footer from "@/components/Common/Footer";
import HeadComp from "@/components/Common/Head";
import Navbar from "@/components/Common/Navbar";
import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
import Loading from "@/components/loading/loading";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
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
