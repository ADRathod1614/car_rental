import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
              When traveling or even for special events, selecting a reliable car service provider can 
              be of the essence. Transportation is such an important part of the overall experience. 
              Whether getting transportation to or from the airport or ordering a luxurious car for a concert or sports event, We are ready to serve you. 
              We are an experienced car service provider located in Aurangabad. With a variety of 
              different services, we are dedicated to giving customers an unforgettable experience. We want to ensure our
               guests make memories that will last for a lifetime. 
              We are thrilled to offer our car services to you no matter the occasion or need. Our goal is to go above
              and beyond for each of our clients. 
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>A Diverse Fleet
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>A Formula That Works
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Years of Experience
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Safety Is of the Essence
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
