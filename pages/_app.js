import "@/styles/globals.css";
import Head from "next/head";
import "../sass/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "@/components/shared/Footer/footer";
import Navbar from "@/components/shared/Header";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   (function (d, w, c) {
  //     w.ChatraID = "Dy4FTdGMo8d8pbPQg";
  //     var s = d.createElement("script");
  //     w[c] =
  //       w[c] ||
  //       function () {
  //         (w[c].q = w[c].q || []).push(arguments);
  //       };
  //     s.async = true;
  //     s.src = "https://call.chatra.io/chatra.js";
  //     if (d.head) d.head.appendChild(s);
  //   })(document, window, "Chatra");
  // });
  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
        integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
        integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
        crossorigin="anonymous"
      ></script>
      {/* <script
        type="text/javascript"
        src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
        id="aisensy-wa-widget"
        widget-id="lfmwau"
      ></script> */}

      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />

        <link
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
          integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
          crossorigin="anonymous"
        /> */}
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
