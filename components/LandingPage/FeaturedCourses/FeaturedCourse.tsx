import styles from "./FeaturedCourses.module.css";
import { Tabs, Card, Rate } from "antd";
import { CourseCard } from "./CourseCard";

const sampleCourse = {
  name: "Course name here",
  rating: 4,
  mentor: "A mentor",
};

export const FeaturedCourse: React.SFC<{}> = () => {
  return (
    <div className={styles.featureCourses}>
      <h2> Which skills you are looking for?</h2>
      <div className={styles.tabs}>
        <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
          <Tabs.TabPane tab="Mathematics" key="1">
            <div className="row">
              <div className="col-md-3">
                <CourseCard course={sampleCourse} />
              </div>
              <div className="col-md-3">
                <CourseCard course={sampleCourse} />
              </div>
              <div className="col-md-3">
                <CourseCard course={sampleCourse} />
              </div>
              <div className="col-md-3">
                <CourseCard course={sampleCourse} />
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Computer Science" key="2"></Tabs.TabPane>
          <Tabs.TabPane tab="Soft Skills" key="3"></Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};
