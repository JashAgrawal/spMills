import Footer from "@/components/Common/Footer";
import HeadComp from "@/components/Common/Head";
import Navbar from "@/components/Common/Navbar";
import "@/styles/globals.css";
// import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<HeadComp />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
