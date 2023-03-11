import React from "react";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
import {
  FooterBottom,
  FooterTop,
  FooterMid,
  MiddleMenu,
  MiddleSocial,
  WidgetBottomMenu,
} from "./style";

import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <FooterTop>
        <Container>
          <Row>
            {widgetData?.map((widget, i) => {
              return (
                <Col key={i} xs={12} md={3}>
                  <h4>{widget.title}</h4>
                  <ul>
                    {widget?.menu.map((menu, i) => {
                      return (
                        <li key={i}>
                          <Link href={menu.link}>{menu.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </Col>
              );
            })}

            {/* Widget Bottom Menu */}
            <Col xs={12}>
              <WidgetBottomMenu>
                <ul>
                  {widgetBottomMenu?.map((list, i) => {
                    return (
                      <li key={i}>
                        <Link href={list.link}>{list.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </WidgetBottomMenu>
            </Col>
          </Row>
        </Container>
      </FooterTop>
      <FooterMid>
        <Container fluid>
          <Row>
            <Col xs={12} md={5}>
              <MiddleMenu>
                <ul>
                  <li>
                    <Link href="/">Pitch deck</Link>
                  </li>
                  <li>
                    <Link href="/">privacy policy</Link>
                  </li>
                  <li>
                    <Link href="/">terms of use</Link>
                  </li>
                  <li>
                    <Link href="/">cookie policy</Link>
                  </li>
                </ul>
              </MiddleMenu>
            </Col>
            <Col xs={12} md={3}>
              <MiddleSocial>
                <ul>
                  <li>
                    <Link href="/">
                      <IoLogoFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <IoLogoInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <IoLogoTwitter />
                    </Link>
                  </li>
                </ul>
              </MiddleSocial>
            </Col>
            <Col xs={12} md={4}>
              <p>© 2023 Just Natural Corporation. All right reserved.</p>
            </Col>
          </Row>
        </Container>
      </FooterMid>
      <FooterBottom>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <p>Nothing more to look for</p>
            </Col>
          </Row>
        </Container>
      </FooterBottom>
    </>
  );
};

export default Footer;

const widgetData = [
  {
    title: "A glimpse on us",
    menu: [
      {
        label: "Our Story",
        link: "/",
      },
      {
        label: "Our Journey",
        link: "/",
      },
      {
        label: "Our Team",
        link: "/",
      },
      {
        label: "Our Certification",
        link: "/",
      },
      {
        label: "Our Packaging",
        link: "/",
      },
      {
        label: "Our Factory",
        link: "/",
      },
    ],
  },
  {
    title: "Things we do",
    menu: [
      {
        label: "Snacks",
        link: "/",
      },
      {
        label: "Honey",
        link: "/",
      },
      {
        label: "Instant Drinks",
        link: "/",
      },
    ],
  },
  {
    title: "Things we do for the society",
    menu: [
      {
        label: "Our Story",
        link: "/",
      },
    ],
  },
  {
    title: "What people think of us",
    menu: [
      {
        label: "Our Story",
        link: "/",
      },
    ],
  },
];

const widgetBottomMenu = [
  {
    title: "Wanna work with us?",
    link: "/",
  },
  {
    title: "Get in Touch",
    link: "/",
  },
  {
    title: "Blog",
    link: "/",
  },
];
