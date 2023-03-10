import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FooterMain } from "./style";

const Footer = () => {
  return (
    <FooterMain>
      <Container>
        <Row>
          <Col xs={12}>
            <div>Footer Top</div>
          </Col>
          <Col xs={12}>
            <div>Footer Bottom</div>
          </Col>
        </Row>
      </Container>
    </FooterMain>
  );
};

export default Footer;
