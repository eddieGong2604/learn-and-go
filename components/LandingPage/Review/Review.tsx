import styles from "./Review.module.css";
import { ReviewCard } from "./ReviewCard";
import { Carousel } from "antd";

const sampleReview = {
  name: "Student name",
  description: "Learn and Go enables me to attain my PhD. Highly recommend",
  rating: 5,
};
export const Review: React.SFC<{}> = () => {
  return (
    <div className={styles.review}>
      <h2>Our students have to say</h2>
      <div className={styles.reviewList}>
        <Carousel autoplay>
          <div className="d-flex justify-content-center">
            <ReviewCard review={sampleReview} />
          </div>
          <div className="d-flex justify-content-center">
            <ReviewCard review={sampleReview} />
          </div>{" "}
        </Carousel>
      </div>
    </div>
  );
};
