"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/Header.module.css";
import { headerHref } from "@/storage/href";
import homeImg from "../../public/img/header/homeImg.png";
import searchImg from "../../public/img/header/searchImg.png";
import sitemapImg from "../../public/img/header/sitemapImg.png";

export default function Header() {
  const [isHover, setIsHover] = useState(false);

  const subMenuList = (subMenu) => (
    <ul
      className={`absolute w-full text-center top-[54px] z-10 overflow-hidden duration-500 ${
        isHover ? "h-[210px]" : "h-0"
      }`}
    >
      {subMenu.map((item, index) => (
        <li key={index} className={styles.sub_li}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
  const mainMenuList = headerHref.map((item, index) => (
    <li key={index} className={styles.main_li}>
      <Link href={item.href} className={styles.main_link}>
        {item.title}
      </Link>
      {item.subMenu && subMenuList(item.subMenu)}
    </li>
  ));

  return (
    <header id="header">
      <Link href="/" className={styles.header_logo}>
        <Image
          src={homeImg}
          alt="homeImg"
          className={styles.logo_img}
          priority={true}
        ></Image>
      </Link>
      <ul
        className={styles.header_menu}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {mainMenuList}
      </ul>
      <form className={styles.search_form}>
        <input
          className={styles.search_input}
          placeholder="알고 싶은 정보가 있으세요?"
        ></input>
        <button className={styles.search_button}>
          <Image src={searchImg} alt="searchImg" priority={true}></Image>
        </button>
      </form>
      <div className={styles.header_sub}>
        <Link href="/pages/mypage/login">로그인</Link>
        <Link href="/pages/mypage">마이페이지</Link>
        <Link href="pages/sitemap" className={styles.sub_sitemap}>
          <Image src={sitemapImg} alt="sitemapImg" priority={true}></Image>
        </Link>
      </div>
      <div
        className={`bg-[#FF7A00]/80 absolute top-[80px] w-full overflow-hidden duration-500 ${
          isHover ? "h-[210px]" : "h-0"
        }`}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      ></div>
    </header>
  );
}
