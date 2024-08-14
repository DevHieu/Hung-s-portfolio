import styles from "./Games.module.scss";
import img1 from "../../assets/img/Games_img/item1.png";
import img2 from "../../assets/img/Games_img/item2.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Games() {
  return (
    <div className={styles.wrapper}>
      <p className="title">
        Thiết kế vật phẩm và bản đồ trong cuộc thi Hackathon 2023
      </p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
        <Masonry gutter={0}>
          <img src={img1} alt="img1" className={styles.tag} />
          <img src={img2} alt="img2" className={styles.tag} />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
