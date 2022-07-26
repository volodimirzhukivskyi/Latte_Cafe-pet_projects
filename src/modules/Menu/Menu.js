import styles from "./Menu.module.css";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import cn from "classnames";

function Menu() {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.inner, "container")}>
        <div className={styles.wrapperContent}>
          <Title className={styles.menu} text={"Menu"} />
          <p className={styles.desc}>
            We change our menu every season. Here is what we are currently
            dishing up.
          </p>
          <div className={styles.buttonsWrap}>
            <Button className={styles.bigButton}>Food Menu</Button>
            <Button className={styles.bigButton}>Drinks Menu</Button>
            <Button className={styles.bigButton}>Takeaway Menu</Button>
          </div>
        </div>
        <div>
          <img
            className={styles.pic}
            src={`${process.env.PUBLIC_URL}/images/menu.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
