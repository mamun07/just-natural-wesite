import Head from "next/head";
import { EntryHome, GreenBg } from "./style";
import HomeSlider from "../sections/Slider";
import HomeWelcome from "../sections/HomeWelcome";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Just Natural || we are just natural</title>
        <meta name="description" content="We are just natural descriptions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EntryHome>
        <HomeSlider />
        <HomeWelcome />
        <Container>
          <Row>
            <Col>
              <h2>Portfolio Section</h2>
              <h2>Social Follow Section</h2>
              <h2>Contact Area</h2>
            </Col>
          </Row>
        </Container>
      </EntryHome>
    </>
  );
}
