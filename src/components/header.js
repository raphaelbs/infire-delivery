import PropTypes from "prop-types";
import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

import Social from "./social";
import LogoImg from "./logoImg";

const Header = ({ siteTitle }) => (
  <AppBar position="sticky">
    <Toolbar variant="regular">
      <Box display="flex" flexDirection="row" width="100%">
        <Box flexGrow={1} display="flex" alignItems="center">
          <Box display="flex" flexDirection="column">
            <LogoImg alt={siteTitle} />
          </Box>
        </Box>
        <Social />
      </Box>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
