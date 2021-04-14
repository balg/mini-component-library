/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--border-radius": "4px",
    "--padding": "0px",
    "--height": "8px",
  },
  medium: {
    "--border-radius": "4px",
    "--padding": "0px",
    "--height": "12px",
  },
  large: {
    "--border-radius": "8px",
    "--padding": "4px",
    "--height": "24px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper value={value} style={SIZES[size]}>
      <VisuallyHidden>{`${value} %`}</VisuallyHidden>
      <Bar value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs((props) => ({
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": props.value || 0,
}))`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  position: relative;
  border-radius: var(--border-radius);
  padding: var(--padding);
  height: var(--height);
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px;
  height: 100%;
  clip-path: polygon(
    0 0,
    ${(props) => props.value + "%"} 0,
    ${(props) => props.value + "%"} 100%,
    0 100%,
    0 0
  );
`;

export default ProgressBar;
