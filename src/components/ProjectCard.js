import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>
            {description} <a href="//github.com/Ahmedsherif0023/E-commerce"></a>
          </span>
        </div>
      </div>
    </Col>
  );
};
