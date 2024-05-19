import Image from "next/image";
import styles from "./page.module.css";

import YourTalantMoney from '../components/YourTalantMoney/YourTalantMoney'
import HowItWork from "../components/HowItWork/HowItWork";
import PopularPosts from "../components/PopularPosts/PopularPosts";
import WorkWithUs from "../components/WorkWithUs/WorkWithUs";
import YourWelcome from "../components/YourWelcome/YourWelcome";

export default function Home() {
  return (
    <>
      {/*  <Header/>*/}
            <YourTalantMoney/>
            <HowItWork/>
            <PopularPosts/>
            <WorkWithUs/>
            <YourWelcome/>
        {/*<Footer/>*/}
    </>
  );
}
