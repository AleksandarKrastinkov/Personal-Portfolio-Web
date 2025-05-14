import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [hasAnimatedImage, setHasAnimatedImage] = useState(false);
  const [hasAnimatedForm, setHasAnimatedForm] = useState(false);

  const onFormUpdate = (category, value) => {
      setFormDetails({
       ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    try {
      // Send to our server endpoint (remove the '/api' if that's causing issues)
      // eslint-disable-next-line
      const response = await axios.post('http://localhost:5000/api/contact', formDetails);
      
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending message:', error);
      setButtonText("Send");
      setStatus({ 
        success: false, 
        message: error.response ? 
          `Error: ${error.response.status} - ${error.response.data.message || 'Server error'}` : 
          'Cannot connect to server. Make sure the server is running with "npm run server"' 
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimatedImage) {
                  setHasAnimatedImage(true);
                }
                return (
                  <img className={hasAnimatedImage ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                );
              }}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimatedForm) {
                  setHasAnimatedForm(true);
                }
                return (
                  <div className={hasAnimatedForm ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} required />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                          <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                        {
                          status.message &&
                          <Col>
                            <p className={status.success === false? "danger" : "success"}>{status.message}</p>
                          </Col>
                        }
                      </Row>
                    </form>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}