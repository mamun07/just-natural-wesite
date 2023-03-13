import Link from "next/link";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import styled from "styled-components";

const Btn = ({ label, url }) => {
  return (
    <CustomButton>
      <Link href={url}>
        {label} <CgArrowLongRight />
      </Link>
    </CustomButton>
  );
};

export default Btn;

const CustomButton = styled.div`
  a {
    background: var(--secondary-color);
    border-radius: 25px;
    color: var(--primary-color);
    padding: 10px 25px;
    font-size: 16px;
    line-height: 16px;
    text-decoration: none;
    position: relative;
    ::before {
      position: absolute;
      content: "";
      width: 100px;
      height: 100px;
      bottom: 0;
      left: 0;
      background-image: url("./pata.png");
      background-size: 100px;
      background-repeat: no-repeat;
      background-position: center;
      transition: all 300ms ease-in-out;
      opacity: 0;
      visibility: hidden;
      transform: rotate(40deg) translate(50%, 45px);
      z-index: -1;
    }
    ::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 100px;
      top: 0;
      left: 0;
      background-image: url("./pata.png");
      background-size: 100px;
      background-repeat: no-repeat;
      background-position: center;
      transition: all 300ms ease-in-out;
      opacity: 0;
      visibility: hidden;
      transform: rotate(-150deg) translate(-30%, 110px);
      z-index: -1;
    }
    svg {
      font-size: 30px;
      margin-left: 10px;
    }
    :hover {
      color: var(--secondary-color);
      background: var(--brand1-color);
      ::before {
        opacity: 1;
        visibility: visible;
        transform: rotate(0deg) translate(50%, 75px);
      }
      ::after {
        opacity: 1;
        visibility: visible;
        transform: rotate(-180deg) translate(-50%, 75px);
      }
    }
  }
`;
