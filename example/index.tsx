/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-extraneous-dependencies */
import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, ButtonGroup, Box, Badge, Input } from "../.";

const App = () => {
  return (
    <Box css={{ width: "70%", margin: "1rem auto" }}>
      <Box css={{ my: "2rem" }}>
        <h1>Buttons</h1>
        <ButtonGroup>
          <Button variant="solid" size="small" colorScheme="purple">
            Purple Solid Small
          </Button>

          <Button colorScheme="green" variant="solid">
            Green Solid
          </Button>
          <Button colorScheme="red" variant="outline" size="large">
            Large Red Outline
          </Button>

          <Button colorScheme="purple" variant="ghost" size="large">
            Large Purple Ghost
          </Button>
        </ButtonGroup>
      </Box>

      <Box css={{ "& > *:not(:first-of-type)": { ml: "0.5rem" }, my: "2rem" }}>
        <h1>Badges</h1>
        <Badge>Default</Badge>
        <Badge colorScheme="purple">Purple</Badge>
        <Badge colorScheme="green">Green</Badge>
        <Badge colorScheme="red">Red</Badge>
      </Box>

      <Box css={{ my: "2rem" }}>
        <h1>Simple Login Form</h1>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem 0.5rem",
          }}
        >
          <label style={{ marginBottom: "0.5rem" }} htmlFor="email">
            Email
          </label>
          <input />
        </Box>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem 0.5rem",
          }}
        >
          <label style={{ marginBottom: "0.5rem" }} htmlFor="email">
            Password
          </label>
          <input />

          <ButtonGroup css={{ marginLeft: "auto", marginTop: "1rem" }}>
            <Button>Login</Button>
            <Button variant="outline">Clear</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
