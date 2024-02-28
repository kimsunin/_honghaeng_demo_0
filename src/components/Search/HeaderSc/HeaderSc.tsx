import Image from "next/image";
import styles from "./HeaderSc.module.css";
import searchImg from "img/header/searchImg.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

type eventType = React.ChangeEvent<HTMLInputElement>;

export default function HeaderSc() {
  const router = useRouter();

  const [search_word, setSearch_word] = useState("");
  function onChange(e: eventType) {
    setSearch_word(e.target.value);
  }

  function onSubmit(e: eventType) {
    e.preventDefault();
    router.push(`/pages/search?search_word=${search_word}`);
  }

  return (
    <form className={styles.header_search} onSubmit={() => onSubmit}>
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
