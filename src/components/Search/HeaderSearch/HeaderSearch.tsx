import Image from "next/image";
import styles from "./HeaderSearch.module.css";
import searchImg from "img/header/searchImg.png";
import { useState } from "react";

export default function HeaderSearch() {
  const [search_word, setSearch_word] = useState("");
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch_word(e.target.value);
  }

  return (
    <form className={styles.header_search}>
      <input
        placeholder="알고 싶은 정보가 있으세요?"
        onChange={onChange}
      ></input>
      <button type="submit">
        <Image src={searchImg} alt="searchImg" priority={true}></Image>
      </button>
    </form>
  );
}
