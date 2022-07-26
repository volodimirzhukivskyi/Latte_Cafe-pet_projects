import styles from "./Logo.module.css";
import cn from "classnames";

function Logo({ className, logo }) {
  return <h1 className={cn(styles.logo, className)}>{logo}</h1>;
}

export default Logo;
