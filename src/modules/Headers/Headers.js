import styles from "./Headers.module.css";
import { links, socials } from "../../helpers/links";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../components/Logo/Logo";
import Link from "../../components/Link/Link";
import cn from "classnames";

function Headers() {
  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.wrap}>
          <div className={styles.burger}>
            <input className={styles.switcher} id={"menu"} type="checkbox" />
            <label className={cn(styles.label, styles.open)} htmlFor="menu">
              <FontAwesomeIcon className={styles.primaryColor} icon={faBars} />
            </label>
            <nav>
              <ul className={styles.list}>
                {links.map((text, i) => (
                  <Link key={i} type={"header"} text={text} />
                ))}
              </ul>
              <label className={cn(styles.label, styles.close)} htmlFor="menu">
                <FontAwesomeIcon
                  className={styles.primaryColor}
                  icon={faTimes}
                />
              </label>
            </nav>
          </div>
          <Logo className={styles.primaryColor} logo={"latte cafe"} />
          <ul className={styles.list}>
            {socials.map(({ id, icon, path }) => (
              <Link
                key={id}
                type={"header"}
                text={<FontAwesomeIcon icon={icon} />}
              />
            ))}
          </ul>
        </div>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/topBg.png`}
          alt=""
        />
      </div>
    </header>
  );
}

export default Headers;
