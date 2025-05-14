import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Define tick function outside the component
const toRotate = [".Net Developer", "Software Engineer", "Let's Work Together"];
const period = 1100;

const tick = ({ loopNum, setLoopNum, isDeleting, setIsDeleting, text, setText, setDelta }) => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if (isDeleting) {
    setDelta(prevDelta => prevDelta / 2);
  }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setDelta(period);
  } else if (isDeleting && updatedText === '') {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setDelta(500);
  }
};

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick({ loopNum, setLoopNum, isDeleting, setIsDeleting, text, setText, setDelta });
    }, delta);
  
    return () => { clearInterval(ticker); };
  }, [loopNum, isDeleting, delta, text]); // Added isDeleting and loopNum to the dependency array
  
  
  
  

  function handleConnectClick() {
    const section = document.getElementById("connect");
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Aleksandar`} <span className="txt-rotate" dataPeriod="700"><span className="wrap">{text}</span></span></h1>
                  <p>My name is Aleksandar and I am inspired to create new designs and learn more!</p>
                  <button onClick={handleConnectClick}>Let's Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
