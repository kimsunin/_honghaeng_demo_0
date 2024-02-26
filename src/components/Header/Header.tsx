"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import HeaderSearch from "../Search/HeaderSearch/HeaderSearch";
import { headerHref } from "@/storage/href";
import homeImg from "img/header/homeImg.png";
import sitemapImg from "img/header/sitemapImg.png";

type SubMenuType = { href: string; title: string };

export default function Header() {
  // 로그인 상태 관리

  // 메뉴바 호버상태 관리
  const [isHover, setIsHover] = useState(false);

  const subMenuList = (subMenu: SubMenuType[]) => (
    <ul className={`${styles.header_subMenu} ${isHover && styles.on}`}>
      {subMenu.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
  const mainMenuList = headerHref.map((item, index) => (
    <li key={index}>
      <Link href={item.href}>{item.title}</Link>
      {item.subMenu && subMenuList(item.subMenu)}
    </li>
  ));

  return (
    <header id="header">
      <Link href="/" className={styles.header_logo}>
        <Image src={homeImg} alt="homeImg" priority={true}></Image>
      </Link>
      <ul
        className={styles.header_menu}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {mainMenuList}
      </ul>
      <HeaderSearch />
      <div className={styles.header_sub}>
        <Link href="/pages/mypage/login">로그인</Link>
        <Link href="/pages/mypage">마이페이지</Link>
        <Link href="pages/sitemap">
          <Image src={sitemapImg} alt="sitemapImg" priority={true}></Image>
        </Link>
      </div>
      <div
        className={`${styles.header_bg} ${isHover && styles.on}`}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      ></div>
    </header>
  );
}

// export function getStaticProps() {
//   const loginState = localStorage.getItem("isLogin");
//   return { props: loginState };
// }
