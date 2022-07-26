import styles from "./Info.module.css";
import Title from "../../components/Title/Title";
import cn from "classnames";

function Info() {
  const info = [
    {
      title: "Location",
      text: (
        <p>
          101 Cuba St,
          <br />
          Te Aro, Wellington
        </p>
      ),
    },
    {
      title: "Hours",
      text: (
        <>
          <p>
            Te Aro, Wellington
            <br /> 7AM - 3PM
          </p>
          <p>
            Saturday to Sunday
            <br /> 8AM - 3PM
          </p>
        </>
      ),
    },
    {
      title: "Mondays?",
      text: (
        <p>
          We are closed on Mondays <br />
          to reflect and refuel
        </p>
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.inner, "container")}>
        {info.map(({ title, text }, i) => (
          <div key={i} className={styles.item}>
            <Title text={title} />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Info;
