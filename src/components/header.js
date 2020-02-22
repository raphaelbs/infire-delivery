import PropTypes from "prop-types";
import React, { memo } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

import LogoImg from "./logoImg";
import { MAX_WIDTH } from "../constants";

const Header = ({ siteTitle }) => (
  <AppBar position="sticky">
    <Toolbar variant="regular">
      <Box display="flex" width="100%" justifyContent="center">
        <Box display="flex" width="100%" justifyContent="space-between" maxWidth={MAX_WIDTH}>
          <LogoImg alt={siteTitle} />
        </Box>
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

export default memo(Header);
