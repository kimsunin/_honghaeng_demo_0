import Image from "next/image";
import searchImg from "img/home/searchImg.png";
import styles from "./ScButton.module.css";

export default function ScButton() {
  return (
    <button className={styles.search_button} type="submit">
      검색
      <Image src={searchImg} alt="searchImg"></Image>
    </button>
  );
}
