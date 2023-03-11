import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/w-logo.png";
import Pata from "../../public/w-pata.png";
import { HeaderMain, NavSlide, Button, NavMenu } from "./style";
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
        <Link href={"/"}>
          <Image src={Logo} width={150} height={70} />
        </Link>
        <NavMenu>
          {NavData?.map((menu, i) => {
            return (
              <li key={i}>
                <Link href={menu.link}>{menu.title}</Link>
                <ul>
                  {menu.children?.map((submenu, i) => {
                    return (
                      <li key={i}>
                        <Link href={submenu.link}>{submenu.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </NavMenu>
      </NavSlide>
    </HeaderMain>
  );
};

export default Header;

const NavData = [
  {
    title: "A glimpse on us",
    link: "/",
    children: [
      { title: "Our Story", link: "/" },
      { title: "Our Journey", link: "/" },
      { title: "Our Team", link: "/" },
      { title: "Our Certification", link: "/" },
      { title: "Our packaging", link: "/" },
      { title: "Our Factory", link: "/" },
    ],
  },
  {
    title: "Things we do",
    link: "/",
    children: [
      { title: "Snacks", link: "/" },
      { title: "Honey", link: "/" },
      { title: "Instant", link: "/" },
      { title: "Drinks", link: "/" },
    ],
  },
  {
    title: "Things we do for the society",
    link: "/",
  },
  {
    title: "What people think of us",
    link: "/",
  },
  {
    title: "Wanna work with us",
    link: "/",
  },
  {
    title: "Get in Touch",
    link: "/about-us",
  },
  {
    title: "Blog",
    link: "/",
  },
];
