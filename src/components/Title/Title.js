import styles from "./Title.module.css";
import cn from "classnames";

function Title({ text, className, tag = "h3" }) {
  switch (tag) {
    case "h2":
      return <h2 className={cn(styles.h2, className)}>{text}</h2>;
    case "h3":
      return <h3 className={cn(styles.h3, className)}>{text}</h3>;
    default:
      return <h4 className={cn(styles.h4, className)}>{text}</h4>;
  }
}

export default Title;
