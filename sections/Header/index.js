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
            <Link href={"/about-us"}>About us</Link>
            <ul>
              <li>
                <Link href={"/about-us"}>Sub Menu</Link>
              </li>
              <li>
                <Link href={"/about-us"}>Sub Menu 1</Link>
              </li>
              <li>
                <Link href={"/about-us"}>Sub Menu 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"/about-us"}>About us</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About us</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About us</Link>
          </li>
        </NavMenu>
      </NavSlide>
    </HeaderMain>
  );
};

export default Header;
