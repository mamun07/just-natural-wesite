import styled from "styled-components";

export const FooterTop = styled.div`
  background: var(--brand-color);
  color: var(--secondary-color);
  padding: var(--p100) 0;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      margin-right: 30px;
      :last-child {
        margin-right: 0;
      }
      a {
        color: var(--secondary-color);
        text-decoration: none;
        display: block;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const FooterMid = styled.div`
  background: var(--brand1-color);
  text-align: center;
  color: var(--secondary-color);
  padding: var(--py15);
  p {
    margin: 0;
  }
`;
export const FooterBottom = styled.div`
  text-align: center;
  padding: var(--py15);
  p {
    margin: 0;
  }
`;
export const MiddleMenu = styled.div`
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      float: left;
      margin-right: 30px;
      :last-child {
        margin-right: 0;
      }
      a {
        color: var(--secondary-color);
        text-decoration: none;
        display: block;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
export const MiddleSocial = styled.div`
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      float: left;
      margin-right: 30px;
      :last-child {
        margin-right: 0;
      }
      a {
        color: var(--secondary-color);
        text-decoration: none;
        display: block;
        svg {
          font-size: 30px;
        }
      }
    }
  }
`;
export const WidgetBottomMenu = styled.div`
  padding-top: var(--p40);
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      float: left;
      margin-right: 30px;
      :last-child {
        margin-right: 0;
      }
      a {
        color: var(--secondary-color);
        text-decoration: none;
        display: block;
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
