// import Script from "next/script";
// import { useEffect } from "react";
// // import { useRouter } from "next/router";

// const pageview = (GA_MEASUREMENT_ID, url) => {
//   window.gtag("config", GA_MEASUREMENT_ID, {
//     page_path: url,
//   });
// };

// export default function GoogleAnalytics({ pathname, searchParams }) {
//   // const router = useRouter();
//   // console.log(,router.pathname)
//   // const pathname = router.pathname;
//   // const searchParams = router.query;

//   useEffect(() => {
//     const url = pathname + searchParams.toString();
//     pageview(`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`, url);
//   }, [pathname, searchParams, process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS]);

//   return (
//     <>
//       <Script
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
//       />
//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//                 window.dataLayer = window.dataLayer || [];
//                 function gtag(){dataLayer.push(arguments);}
//                 gtag('js', new Date());
//                 gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
//                     page_path: window.location.pathname,
//                 });
//                 `,
//         }}
//       />
//     </>
//   );
// }
