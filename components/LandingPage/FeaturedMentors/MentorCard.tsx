import { Card, Avatar } from "antd";

interface Mentor {
  name: string;
  education: string;
  description: string;
}

interface Props {
  mentor: Mentor;
}

export const MentorCard: React.SFC<Props> = ({ mentor }) => {
  return (
    <Card style={{ width: 500 }}>
      <Card.Meta
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            style={{ width: 60, height: 60 }}
          />
        }
        title={
          <div style={{ textAlign: "left", marginTop: "10" }}>
            <h3>{mentor.name}</h3>
            <p>{mentor.education}</p>
          </div>
        }
        description={
          <p style={{ textAlign: "left", marginTop: "0" }}>
            {mentor.description}
          </p>
        }
      />
    </Card>
  );
};
