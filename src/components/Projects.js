import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/E-commerce.png";
import projImg2 from "../assets/img/Weather-app.png";
import projImg3 from "../assets/img/Project3.png";
import projImg4 from "../assets/img/Project3.png";
import projImg5 from "../assets/img/Project3.png";
import projImg6 from "../assets/img/Project3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Shefo's Shop",
      description: "E-commerce online shop",
      imgUrl: projImg1,
      Code: "https://github.com/Ahmedsherif0023/E-commerce",
      projUrl: "https://shefo-s-shop.web.app/",
    },
    {
      title: "Weather App",
      description: "Weather App",
      imgUrl: projImg2,
      Code: "https://github.com/Ahmedsherif0023/weather-app",
      projUrl: "https://weather-app-d7c99.web.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      Code: "#",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
      Code: "#",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
      Code: "#",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
      Code: "#",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>These are some of my projects until now</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>These are some of projects until now</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Coming soon</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Comming soon</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
