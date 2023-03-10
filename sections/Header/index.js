import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/w-logo.png";
import Pata from "../../public/w-pata.png";
import { HeaderBg, Button, NavMenu } from "../style";

const Header = () => {
  return (
    <HeaderBg>
      <Link href="/">
        <Image src={Logo} width={150} height={70} />
      </Link>
      <NavMenu>
        <li>
          <Link href="/about-us">a bit about us</Link>
          <ul>
            <li>
              <Link href="/about-us">Sub Menu</Link>
            </li>
            <li>
              <Link href="/about-us">Sub Menu 2</Link>
            </li>
            <li>
              <Link href="/about-us">Sub Menu 3</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/about-us">thing we made</Link>
        </li>
      </NavMenu>
      <Button>
        <Image src={Pata} width={40} height={15} />
        <p>menu</p>
      </Button>
    </HeaderBg>
  );
};

export default Header;
