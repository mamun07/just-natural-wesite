import Btn from "@/components/Btn";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { WelcomeContainer, WelcomeBG } from "./style";

const HomeWelcome = () => {
  return (
    <WelcomeBG>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={9} lg={7}>
            <WelcomeContainer className="text-center">
              <h2 className="mb-4">Home Welcome</h2>
              <p className="mb-5">
                We might make little drinks, but we have big dreams to make the
                world a better, healthier place to live. That's why we're on a
                mission to be carbon neutral by 2025, give 10% of our profits to
                charity and pack our drinks full of good stuff from Mother
                Nature.
              </p>
              <Btn url={"/"} label={"The Full Story"} />
            </WelcomeContainer>
          </Col>
        </Row>
      </Container>
    </WelcomeBG>
  );
};

export default HomeWelcome;
