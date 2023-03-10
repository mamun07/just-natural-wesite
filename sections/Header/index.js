import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/w-logo.png";
import Pata from "../../public/w-pata.png";
import { HeaderMain, NavSlide, Button, NavMenu } from "../style";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandle = (e) => {
    setShowMenu((current) => !current);
  };
  return (
    <HeaderMain>
      <Button onClick={menuHandle}>
        <Image
          className={showMenu ? "hide" : "show"}
          src={Pata}
          width={40}
          height={15}
        />
        <CgClose className={showMenu ? "show" : "hide"} />
        <p>menu</p>
      </Button>
      <NavSlide className={showMenu ? "show" : "hide"}>
        <NavMenu>
          <li>
            <Link href={"/about-us"}>A glimpse on us</Link>
            <ul>
              <li>
                <Link href={"/about-us"}>Our Story</Link>
              </li>
              <li>
                <Link href={"/about-us"}>Our Journey</Link>
              </li>
              <li>
                <Link href={"/about-us"}>Our Team</Link>
              </li>
              <li>
                <Link href={"/about-us"}>Our Certification</Link>
              </li>
              <li>
                <Link href={"/about-us"}>Our packaging</Link>
              </li>
              <li>
                <Link href={"/about-us"}>Our Factory</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"/about-us"}>Things we do</Link>
            <ul>
              <li>
                <Link href={"/about-us"}>Snacks</Link>
              </li>
              <li>
                <Link href={"/about-us"}>Honey</Link>
              </li>
              <li>
                <Link href={"/about-us"}>Instant</Link>
              </li>
              <li>
                <Link href={"/about-us"}>Drinks</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"/about-us"}>Things we do for the society</Link>
          </li>
          <li>
            <Link href={"/about-us"}>What people think of us</Link>
          </li>
          <li>
            <Link href={"/about-us"}>Wanna work with us?</Link>
          </li>
          <li>
            <Link href={"/about-us"}>Get in Touch</Link>
          </li>
          <li>
            <Link href={"/about-us"}>Blog</Link>
          </li>
        </NavMenu>
      </NavSlide>
    </HeaderMain>
  );
};

export default Header;
