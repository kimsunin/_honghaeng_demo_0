"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Search from "@/components/Search/HeaderSearch/HeaderSearch";
import section1_bg from "img/home/section1_bg.png";
import more_nonghang from "img/home/more_nonghang.png";
import HomeSearch from "@/components/Search/HomeSearch/HomeSearch";

export default function Home() {
  return (
    <main id="main">
      <section className={styles.section1}>
        <Image src={section1_bg} alt="section1_bg" priority={true}></Image>
        <h1>
          똑같은 여행은 지루해...
          <br />
          농행동행이 도와드릴게요!
        </h1>
        <h2>
          테마별 숨은 명소를 모두 모아
          <br />더 편안한 여행계획을 만드는 똑똑한 플랫폼
        </h2>
        <Link href="/pages/introduce">
          농행동행 알아보기
          <Image src={more_nonghang} alt="more_nonghang"></Image>
        </Link>
        <HomeSearch />
      </section>
      <section className={styles.section2}></section>
    </main>
  );
}
