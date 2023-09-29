import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Code, projUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <a href={Code} target="_blank">
        <button id="bbb" className="btn btn-outline-danger">
          Code For Project
        </button>
      </a>
      <a href={projUrl} target="_blank">
        <button id="bb" className="btn btn-outline-danger">
          Project Link
        </button>
      </a>
    </Col>
  );
};
