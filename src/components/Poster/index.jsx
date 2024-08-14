import styles from "./Poster.module.scss";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import poster1 from "../../assets/img/poster_img/poster1.png";
import poster2 from "../../assets/img/poster_img/poster2.png";
import poster3 from "../../assets/img/poster_img/poster3.png";

export default function Poster() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_container}>
        <span className="title">Poster</span>
      </div>
      <img src={poster1} alt="" />
      <img src={poster2} alt="" />
      <img src={poster3} alt="" />
    </div>
  );
}
