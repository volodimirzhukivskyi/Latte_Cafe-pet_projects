import styles from "./Gallery.module.css";
import cn from "classnames";

function Gallery() {
  return (
    <div className={cn(styles.wrap, "container")}>
      <div className={styles.hideBlock}>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/gallery/1.png`}
          alt="dishes-1"
        />
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/gallery/2.png`}
          alt="dishes-2"
        />
      </div>
      <img
        className={styles.image}
        src={`${process.env.PUBLIC_URL}/images/gallery/3.png`}
        alt="dishes-3"
      />
    </div>
  );
}

export default Gallery;
