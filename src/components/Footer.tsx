import Link from "next/link";
import styles from "../styles/components/Footer.module.css";
import { footerHref } from "@/storage/href";

export default function Footer() {
  const mainLink = footerHref.map((item, index) => (
    <Link href={item.href} key={index}>
      {item.title}
    </Link>
  ));
  return (
    <footer id="footer">
      <div className={styles.footer_sub}></div>
      <hr className={styles.footer_hr}></hr>
      <div className={styles.footer_main}>
        {mainLink}
        <p>사업자 소개</p>
        <p>저작권 관련 글</p>
      </div>
    </footer>
  );
}
