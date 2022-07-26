import styles from "./MoreInfo.module.css";
import Title from "../../components/Title/Title";
import cn from "classnames";

function MoreInfo() {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.inner, "container")}>
        <Title
          text={
            <span>
              Award winning
              <br /> cafe and bar.
            </span>
          }
          tag={"h2"}
        />
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          animi dolorem dolores earum ipsum itaque libero molestias natus,
          perferendis ratione repellat sapiente sequi tenetur, voluptas?
        </p>
      </div>
    </div>
  );
}

export default MoreInfo;
