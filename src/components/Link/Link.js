import styles from "./Link.module.css";
import cn from "classnames";

function Link({ type, text, link = "#" }) {
  switch (type) {
    case "header":
      return (
        <li className={styles.item}>
          <a className={cn(styles.link, styles.linkHero)} href={link}>
            {text}
          </a>
        </li>
      );
    case "footer":
      return (
        <li className={cn(styles.item, styles.itemFooter)}>
          <a className={styles.link} href={link}>
            {text}
          </a>
        </li>
      );
    default:
      return (
        <li>
          <a href={link}>#</a>
        </li>
      );
  }
}

export default Link;
