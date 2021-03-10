// example Layout.js
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  a:focus,
  a:hover,
  a:visited,
  a:link,
  a:active {
    color: #000;
  }
  a {
    padding: 2px;
  }
`;

export default ({ children, color }) => (
  <Div
    style={{
      width: "100vw",
      height: "100vw",
      backgroundColor: color,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      color: "#000",
    }}
  >
    {children}
  </Div>
);
