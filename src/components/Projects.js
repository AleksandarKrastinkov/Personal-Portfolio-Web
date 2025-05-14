import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
<<<<<<< HEAD
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from 'react';

export const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const projects = [
    {
      title: "Energy Consumption Prediction",
      description: "Built a Machine Learning System using LSTM Neural Networks that analyzes patterns in sensor data",
      link: "https://github.com/AleksandarKrastinkov/Data_Analysis_Project"
    },
    {
      title: "Energy Consumption Prediction",
      description: "Accurately predicts future energy consumption from heating devices",
      link: "https://github.com/AleksandarKrastinkov/Data_Analysis_Project"
    },
    {
      title: "Energy Consumption Prediction",
      description: "Includes visualization tools that support cost-effective energy planning",
      link: "https://github.com/AleksandarKrastinkov/Data_Analysis_Project"
=======
import projImg1 from "../assets/img/TaskMeImg.png";
import projImg2 from "../assets/img/TaskMeSecImg.png";
import projImg3 from "../assets/img/TaskMeTirdImg3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "TaskMe",
      description: "The only application for creating tasks you will ever need!",
      imgUrl: projImg1,
    },
    {
      title: "TaskMe",
      description: "Fast and Secure",
      imgUrl: projImg2,
    },
    {
      title: "TaskMe",
      description: "Intuitive Design",
      imgUrl: projImg3,
>>>>>>> origin/main
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
<<<<<<< HEAD
              {({ isVisible }) => {
                // If it's visible and hasn't animated yet, set hasAnimated to true
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true);
                }
                
                // Use the hasAnimated state for animation classes
                return (
                <div className={hasAnimated ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>               
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Energy Prediction</Nav.Link>
=======
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I am inspired to create more for you!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">TaskMe</Nav.Link>
>>>>>>> origin/main
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" disabled className="disabled-link">Coming Soon</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" disabled className="disabled-link">Coming Soon</Nav.Link>
                      </Nav.Item>
                    </Nav>
<<<<<<< HEAD
                    <Tab.Content id="slideInUp" className={hasAnimated ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>This machine learning project analyzes patterns in sensor data to accurately predict future energy consumption.</p>
                        <Row className="justify-content-center">
=======
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>I am inspired to create more for you!</p>
                        <Row>
>>>>>>> origin/main
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
<<<<<<< HEAD
                              link={project.link}
=======
                              imgUrl={project.imgUrl}
>>>>>>> origin/main
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
<<<<<<< HEAD
                        <p>More exciting projects coming soon!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Stay tuned for future updates!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
                );
              }}
=======
                        <p>I am inspired to create more for you!!!</p>
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>I am inspired to create more for you!!!</p>
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
>>>>>>> origin/main
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
