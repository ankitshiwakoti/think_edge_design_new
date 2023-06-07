import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/shared/Header";
import Footer from "@/components/shared/Footer/footer";
import Who from "@/components/Who";
import Designprocess from "@/components/Designprocess";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Who />
      <Designprocess />
    </>
  );
}
