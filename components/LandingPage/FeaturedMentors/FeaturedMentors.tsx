import styles from "./FeaturedMentors.module.css";
import { Card, Avatar } from "antd";
import { MentorCard } from "./MentorCard";

const mentor = {
  name: "Xuan Truong Hoang",
  education: "University of Soviet Union",
  description:
    "Simply the best student at University of Soviet Union. Interested in sliding tinder in his free time",
};

export const FeaturedMentors: React.SFC<{}> = () => {
  return (
    <div className={styles.featureMentors}>
      <h2> Meet your tutors</h2>
      <div className={styles.featuredMentorsInner}>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center">
            <MentorCard mentor={mentor} />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <MentorCard mentor={mentor} />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <MentorCard mentor={mentor} />
          </div>
        </div>
      </div>
    </div>
  );
};
