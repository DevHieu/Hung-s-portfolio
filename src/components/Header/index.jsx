import styles from "./Header.module.scss";
import background from "../../assets/img/header_img/HeaderBackground.png";
import outline from "../../assets/img/header_img/title_outline.png";
import full from "../../assets/img/header_img/title_full.png";
import describe from "../../assets/img/header_img/HeaderDescribe.png";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background_container}>
        <img src={background} alt="background" className={styles.background} />
        <div className={styles.half}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <img src={outline} alt="outline" className={styles.outline} />
          <img src={full} alt="full" className={styles.full} />
        </div>
      </div>
      <img src={describe} alt="describe" className={styles.describe} />
      <div className={styles.contact}>
        <p>
          Facebook:{" "}
          <a href="https://www.facebook.com/profile.php?id=61559538832036">
            Mạnh Hùng
          </a>
        </p>
        <p>
          Twitter: <a href="https://x.com/Anwir_Vaarennos">@Anwir_Vaarennos</a>
        </p>
        <p>
          Pinterest:{" "}
          <a href="https://www.pinterest.com/AnwirVaarennos/">
            Anwir Vaarennos
          </a>
        </p>
        <p>
          Email: <span href="">mhung18082004@gmail.com</span>
        </p>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
