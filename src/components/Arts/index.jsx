import styles from "./Arts.module.scss";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import poster1 from "../../assets/img/Arts_img/art1.png";
import poster2 from "../../assets/img/Arts_img/art2.png";
import poster3 from "../../assets/img/Arts_img/art3.png";
import poster4 from "../../assets/img/Arts_img/art4.png";
import poster5 from "../../assets/img/Arts_img/art5.png";
import poster6 from "../../assets/img/Arts_img/art6.png";
import poster7 from "../../assets/img/Arts_img/art7.png";
import poster8 from "../../assets/img/Arts_img/art8.jpg";
import poster9 from "../../assets/img/Arts_img/art9.jpg";

export default function Arts() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_container}>
        <span className="title">Digital arts</span>
      </div>
      <img src={poster1} alt="" />
      <img src={poster2} alt="" />
      <img src={poster3} alt="" />
      <img src={poster4} alt="" />
      <img src={poster5} alt="" />
      <img src={poster6} alt="" />
      <img src={poster7} alt="" />
      <img src={poster8} alt="" />
      <img src={poster9} alt="" />
    </div>
  );
}
