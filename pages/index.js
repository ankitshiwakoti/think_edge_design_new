import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/shared/Header";
import Footer from "@/components/shared/Footer/footer";
import Who from "@/components/Who";
import Designprocess from "@/components/Designprocess";
import Blog from "@/components/Blog";
import Offer from "@/components/Offer";
import Gallary from "@/components/Gallary";
import Client from "@/components/Client";

export default function Home() {
  return (
    <>
      <Offer />
      <Who />
      <Designprocess />
      <Blog />
      {/* <Client /> */}
      <Gallary />
    </>
  );
}
