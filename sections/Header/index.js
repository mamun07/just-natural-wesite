import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.png";
import { HeaderBg } from "../style";

const Header = () => {
  return (
    <HeaderBg>
      <Image src={Logo} width={120} height={80} />
    </HeaderBg>
  );
};

export default Header;
