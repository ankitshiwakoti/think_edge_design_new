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
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Form from "@/components/Form";
import Ourservices from "@/components/ourservices";
import Design from "@/components/Design";

export default function Home() {
  return (
    <>
      <Hero />

      <Ourservices />
      {/* <Offer /> */}
      <Projects />
      <Who />
      <Design />
      {/* <Designprocess /> */}
      <Blog />
      <Client />
      <Gallary />
      <Contact />
    </>
  );
}
