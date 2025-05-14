import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const [centerIndex, setCenterIndex] = useState(1); // Initial center index

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skills = [
    { name: "REST API" },
    { name: "JavaScript" },
    { name: "C#" },
    { name: ".Net Developer" },
    { name: "SQL" }
  ];

  const handleAfterChange = (previousSlide, { currentSlide }) => {
    const newCenterIndex = Math.floor(currentSlide + responsive.desktop.items / 2);
    setCenterIndex(newCenterIndex % skills.length);
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I am a passionate person who strives to create new things. I am highly motivated and eager to learn. The future excites me, and I look forward to seeing what I can achieve tomorrow.</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="owl-carousel owl-theme skill-slider"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                arrows
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                afterChange={handleAfterChange}
              >
                {skills.map((skill, index) => (
                  <div className={`item ${index === centerIndex ? 'center-item' : ''}`} key={index}>
                    <div className="pill">
                      <span>{skill.name}</span>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

const CustomLeftArrow = ({ onClick }) => (
  <button className="custom-left-arrow" onClick={onClick}>
    &lt;
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button className="custom-right-arrow" onClick={onClick}>
    &gt;
  </button>
);
