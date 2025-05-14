import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
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
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
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
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" disabled className="disabled-link">Coming Soon</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" disabled className="disabled-link">Coming Soon</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={hasAnimated ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>This machine learning project analyzes patterns in sensor data to accurately predict future energy consumption.</p>
                        <Row className="justify-content-center">
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              link={project.link}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
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
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
