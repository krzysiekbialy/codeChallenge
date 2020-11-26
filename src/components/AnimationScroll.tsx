import React from "react";
import styled from "@emotion/styled";
import * as _ from "lodash";

const windowGlobal = typeof window !== "undefined" && window;
const fadeIn = () => {
  const fadeInItem = document.querySelectorAll(".fadeIn");

  for (let i = 0; i < fadeInItem.length; i++) {
    if (fadeInItem[i].offsetTop - 1000 <= windowGlobal.scrollY) {
      fadeInItem[i].style.opacity = "1";
    }
  }
};
const A = styled.div`
  display: none;
`;

class AnimationScroll extends React.Component {
  componentDidMount() {
    if (typeof window !== `undefined`) {
      windowGlobal.addEventListener("scroll", fadeIn);
    }
  }
  render() {
    return <A></A>;
  }
}

export default AnimationScroll;
