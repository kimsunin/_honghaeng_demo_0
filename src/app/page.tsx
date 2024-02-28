"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import section1_bg from "img/home/section1_bg.png";
import more_nonghang from "img/home/more_nonghang.png";
import more_green from "img/home/more_green.png";
import more_orange from "img/home/more_orange.png";
import HomeSc from "@/components/Search/HomeSc/HomeSc";

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
        <HomeSc />
      </section>
      <section className={styles.section2}>
        <article>
          <div>
            <h1>우수체험</h1>
            <Link href="/pages/trip/experience">
              더 많은 농촌체험 보러가기
              <Image src={more_green} alt="more_experience"></Image>
            </Link>
          </div>
        </article>
        <article>
          <div>
            <h1>우수숙박</h1>
            <Link href="/pages/trip/lodgment">
              더 많은 농촌숙박 보러가기
              <Image src={more_green} alt="more_lodgement"></Image>
            </Link>
          </div>
        </article>
        <div>
          <article>
            <div>
              <h1>공지사항</h1>
              <Link href="/pages/trip/notification">
                MORE
                <Image src={more_orange} alt="more_notification"></Image>
              </Link>
            </div>
          </article>
          <article>
            <div>
              <h1>여행후기</h1>
              <Link href="/pages/trip/review">
                MORE<Image src={more_orange} alt="more_review"></Image>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
