"use client";
import styles from "./.module.css";
import TotalSc from "@/components/Search/TotalSc/TotalSc";

export default function search() {
  return (
    <main id="main">
      <section className={styles.section1}>
        <h1>통합검색</h1>
        <TotalSc />
      </section>
      <section className={styles.section2}>검색결과</section>
    </main>
  );
}
