import styles from "./Banner.module.scss";
import banner1 from "../../assets/img/Banner_img/banner1.png";
import banner2 from "../../assets/img/Banner_img/banner2.png";

export default function Banner() {
  return (
    <div className={styles.wrapper}>
      <p className="title">Banner</p>
      <div className={styles.banner_container}>
        <img src={banner1} alt="banner1" />
        <img src={banner2} alt="banner2" />
      </div>
    </div>
  );
}
