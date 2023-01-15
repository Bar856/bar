import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { send } from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    first_name: '',
    last_name: '',
    from_phone: '',
    from_email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    send('default_service', 'template_uj7pjbt', formDetails, 'HIWL-ouQJs3BV3Gax')
    .then(function(response) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    }, function(error) {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    })
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.first_name} placeholder="First Name" onChange={(e) => onFormUpdate('first_name', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.last_name} placeholder="Last Name" onChange={(e) => onFormUpdate('last_name', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="email" value={formDetails.from_email} placeholder="Email Address" onChange={(e) => onFormUpdate('from_email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.from_phone} placeholder="Phone No." onChange={(e) => onFormUpdate('from_phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                  <Row>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
