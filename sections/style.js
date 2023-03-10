import styled from "styled-components";

export const HeaderMain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
`;
export const NavSlide = styled.div`
  background: var(--brand-color);
  color: white;
  text-align: center;
  padding: var(--py15);
`;
export const Button = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translate(0, 100%);
  background: var(--brand-color);
  color: var(--secondary-color);
  width: 60px;
  margin: auto;
  height: 60px;
  border-bottom-right-radius: var(--radiusfull);
  border-bottom-left-radius: var(--radiusfull);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    font-size: 28px;
  }
  p {
    position: absolute;
    bottom: -5px;
    left: 40px;
    color: #2d2d2d;
    transform: rotate(317deg);
    visibility: visible;
    opacity: 1;
    transition: all 300ms ease-in-out;
    letter-spacing: 2px;
  }
`;
export const NavMenu = styled.ul`
  margin: 10px 0;
  padding: 0;
  overflow: hidden;
  li {
    list-style: none;
    a {
      font-size: 38px;
      line-height: 76px;
      font-weight: 700;
      text-decoration: none;
      color: var(--secondary-color);
    }
    ul {
      display: none;
      li {
        list-style: none;
        display: inline-block;
        margin: 0 10px;
        a {
          font-size: 20px;
          line-height: 36px;
          font-weight: 700;
          text-decoration: none;
          color: var(--brand2-color);
          transition: all 300ms ease-in-out;
        }
      }
    }
    :hover ul {
      display: block;
      li {
        a:hover {
          color: var(--secondary-color);
        }
      }
    }
  }
`;
