import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

import Social from "./social";

const Header = ({ siteTitle, subtitle }) => (
  <AppBar position="sticky">
    <Toolbar variant="regular">
      <Box display="flex" flexDirection="row" width="100%">
        <Box flexGrow={1} display="flex" alignItems="center">
          <Box display="flex" flexDirection="column">
            <Typography variant="h4">
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </Typography>
            {subtitle ? (
              <Typography variant="subtitle2" component="h1">
                {subtitle}
              </Typography>
            ) : null}
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
