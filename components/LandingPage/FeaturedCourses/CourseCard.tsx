import { Card, Rate } from "antd";
const courseImgPreview =
  "https://i2.wp.com/oecdedutoday.com/wp-content/uploads/2020/02/blog-web.jpg?fit=1600%2C900&ssl=1";

interface Course {
  mentor: string;
  name: string;
  rating: number;
}
interface Props {
  course: Course;
}

export const CourseCard: React.SFC<Props> = ({ course }) => {
  return (
    <Card
      hoverable
      style={{ width: 300, height: 400 }}
      cover={<img alt="example" src={courseImgPreview} />}
    >
      <Card.Meta
        title={<h6>{course.name}</h6>}
        description={
          <>
            <p>Tutor: {course.mentor}</p>
            <Rate disabled allowHalf defaultValue={course.rating} />
            {
              <span className="ant-rate-text">
                <b>{course.rating}</b> (124)
              </span>
            }
          </>
        }
      />
    </Card>
  );
};
