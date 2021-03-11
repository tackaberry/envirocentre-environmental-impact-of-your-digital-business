// example Layout.js
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  a:focus,
  a:hover,
  a:visited,
  a:link,
  a:active {
    color: #fff;
  }
  a {
    padding: 2px;
  }
  td {
    padding: 0.5em 1em;
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
    }}
  >
    {children}
  </Div>
);
