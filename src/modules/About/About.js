import styles from "./About.module.css";
import Title from "../../components/Title/Title";
import cn from "classnames";

function About() {
  return (
    <div className={cn(styles.wrap, "container")}>
      <Title text={"About Us"} />
      <p className={styles.desc}>
        Tucked away in the corner of Wellington, Latte Cafe is a local
        neighbourhood cafe and bar. Latte is all about doing what we love, in a
        city that we love. We keep stocked with local produce and pastries.
        Bring your family for a bite, or meet your friends for a coffee or warm
        drink.
      </p>
    </div>
  );
}

export default About;
