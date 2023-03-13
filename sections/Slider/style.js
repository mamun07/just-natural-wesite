import styled from "styled-components";

export const SliderContent = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  .banner_content {
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    transform: translate(35%, 100%);
    text-align: center;
  }
  p {
    margin-bottom: 90px;
    font-size: 28px;
    line-height: 36px;
  }
  h2 {
    font-size: 60px;
    font-weight: 600px;
    line-height: 70px;
    margin-bottom: 50px;
  }
  a {
    font-size: 19px;
    line-height: 44px;
  }
`;
