import styles from "./Footer.module.css";
import { footerLinks } from "../../helpers/links";
import Link from "../../components/Link/Link";
import cn from "classnames";

function Footer() {
  return (
    <footer className={cn(styles.footer, "container")}>
      <ul className={styles.list}>
        {footerLinks.map((text, i) => (
          <Link key={i} text={text} type={"footer"} />
        ))}
      </ul>
      <p className={styles.copyright}>© Latte Cafe 2022.</p>
    </footer>
  );
}

export default Footer;
