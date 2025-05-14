import { Col } from "react-bootstrap";
<<<<<<< HEAD
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description, link }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <div className="proj-card h-100">
        <div className="proj-content">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-link">
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project <ArrowRightCircle size={18} />
            </a>
          </div>
=======

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
>>>>>>> origin/main
        </div>
      </div>
    </Col>
  )
}
