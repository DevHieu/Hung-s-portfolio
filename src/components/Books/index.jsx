import styles from "./Books.module.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import book1 from "../../assets/img/Books_img/book1.png";
import book2 from "../../assets/img/Books_img/book2.jpg";

export default function Books() {
  return (
    <div className={styles.wrapper}>
      <span className="title">Thiết kế bìa truyện, bìa sách</span>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1 }}>
        <Masonry gutter={0}>
          <div className={styles.container}>
            <div>
              <img src={book1} alt="poster1" className={styles.left} />
            </div>
            <div>
              <img src={book2} alt="poster2" className={styles.right} />
            </div>
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
