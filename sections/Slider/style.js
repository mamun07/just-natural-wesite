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
    width: 40%;
    transform: translate(75%, 150%);
    text-align: center;
  }
  p {
    margin-bottom: 90px;
  }
`;
