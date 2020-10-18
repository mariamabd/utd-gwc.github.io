import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grommet,
  Heading,
  Main,
  CheckBox,
  Stack,
  Header,
  Text,
  Image,
  defaultProps
} from "grommet";

import logo from "./static/gwc2020_website_logo_nobg.png";

const font = {
  font: {
    family: "Roboto",
    size: "18px",
    height: "20px",
  },
};

const checkBox = {
  checkBox: {
    border: {
      color: {
        dark: "neutral-1",
        light: "neutral-1",
      },
    },
    hover: {
      border: {
        color: {
          dark: "white",
          light: "brand",
        },
      },
    },
    toggle: {
      background: {
        dark: "neutral-1",
        light: "neutral-1",
      },
    },
  },
};

const lightTheme = {
  global: {
    colors: {
      brand: "#F794B9",
      "accent-1": "#002364",
      "neutral-1": "#1B3A5D",
      "accent-2": "#FFFFFF",
      "neutral-2": "#ECEDF8",
      "accent-3": "#FCC0C5",
      "neutral-3": "#B67186",
      "neutral-4": "#B84C65",
      active: "neutral-4",
      focus: "neutral-1",
      white: "#ECEDF8",
      background: "#ECEDF8",
    },
    ...font,
  },
  ...checkBox,
};

const darkTheme = {
  global: {
    colors: {
      brand: "#002364",
      "accent-1": "#F794B9",
      "neutral-1": "#B84C65",
      "accent-2": "#FCC0C5",
      "neutral-2": "#B67186",
      "accent-3": "#FFFFFF",
      "neutral-3": "#ECEDF8",
      "neutral-4": "#1B3A5D",
      active: "neutral-3",
      focus: "neutral-1",
      white: "#ECEDF8",
      background: "#1B3A5D",
    },
    ...font,
  },
  ...checkBox,
};

function App() {
  const [isLightMode, setIsLightMode] = React.useState(true);

  const GLOBAL_SIZE_XSMALL = defaultProps.theme.global.size.xsmall.match(/\d+/)[0]
  const GLOBAL_SIZE_XXSMALL = defaultProps.theme.global.size.xxsmall.match(/\d+/)[0];

  // set default value
  const [scrollTop, setScrollTop] = useState(document.body.scrollTop);

  // create element ref
  const innerRef = useRef(null);


  const handleOnScroll = (e) => {
      setScrollTop(e.target.scrollTop);
  };

  useEffect(() => {
    const div = innerRef.current;
    // subscribe event
    div.addEventListener("scroll", handleOnScroll);
    return () => {
      // unsubscribe event
      div.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <Grommet theme={isLightMode ? lightTheme : darkTheme} full>
      <Main>
        <Header
          pad={{ left: "medium", right: "small", vertical: "small" }}
          elevation="xsmall"
        >
          <Box align="center" height={Math.max(GLOBAL_SIZE_XSMALL - scrollTop, GLOBAL_SIZE_XXSMALL) + "px"}>
            <Image
              src={logo}
              fit="contain"
              fill="vertical"
              a11yTitle="UTD Girls Who Code logo"
            />
          </Box>
          <Box justify="between" fill="horizontal" align="end">
            <CheckBox
              toggle
              onChange={() => {
                setIsLightMode(!isLightMode);
              }}
            />
          </Box>
        </Header>
      </Main>
    </Grommet>
  );
}

export default App;
