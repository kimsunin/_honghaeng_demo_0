import Link from "next/link";
import styles from "./Navigation.module.css";

type PropsType = {
  props: {
    mainMenu: { href: string; title: string };
    subMenu: { href: string; title: string }[];
  };
};

export default function Navigation({ props }: PropsType) {
  const subMenuList = props.subMenu.map((item, index) => (
    <li key={index}>
      <Link href={item.href}>{item.title}</Link>
    </li>
  ));
  return (
    <nav id="nav">
      <div className={styles.nav_menu}>
        <Link href={props.mainMenu.href}>
          <div></div>
          {props.mainMenu.title}
        </Link>
        <ul>{subMenuList}</ul>
      </div>
      <div className={styles.nav_bg}>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
