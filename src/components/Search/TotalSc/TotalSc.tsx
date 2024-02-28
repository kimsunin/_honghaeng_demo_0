import ScButton from "../ScButton/ScButton";
import styles from "./TotalSc.module.css";
export default function TotalSc() {
  return (
    <form className={styles.total_search}>
      <input placeholder="검색어를 입력해보세요."></input>
      <ScButton />
    </form>
  );
}
