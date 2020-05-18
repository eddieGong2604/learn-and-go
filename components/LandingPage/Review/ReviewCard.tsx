import { Card, Avatar, Rate } from "antd";

interface Review {
  name: string;
  description: string;
  rating: number;
}

interface Props {
  review: Review;
}
export const ReviewCard: React.SFC<Props> = ({ review }) => {
  return (
    <Card style={{ width: 700 }}>
      <Card.Meta
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            style={{ width: 60, height: 60 }}
          />
        }
        title={
          <div style={{ textAlign: "left", marginTop: "10" }}>
            <h3>{review.name}</h3>
          </div>
        }
        description={
          <div style={{ textAlign: "left", marginTop: "0" }}>
            <p>{review.description}</p>
            <Rate disabled allowHalf defaultValue={review.rating} />
          </div>
        }
      />
    </Card>
  );
};
