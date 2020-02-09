import React from "react";
import { SocialIcon } from "react-social-icons";
import { Box, Link } from "@material-ui/core";
import { withTheme } from "@material-ui/styles";
import { WHATSAPP_URL, INSTAGRAM_URL } from "../constants";

const iconStyle = { width: 32, height: 32, marginLeft: 4 };

const Social = ({ theme }) => (
  <Box display="flex" flexDirection="column" alignItems="flex-end">
    <Box my={1}>
      <Link
        color="textPrimary"
        variant="body2"
        href={INSTAGRAM_URL}
        underline="always"
      >
        @infiredelivery
      </Link>
      <SocialIcon
        url={INSTAGRAM_URL}
        bgColor={theme.palette.primary.main}
        fgColor="white"
        style={iconStyle}
      />
    </Box>
    <Box my={1}>
      <Link
        color="textPrimary"
        variant="body2"
        href={WHATSAPP_URL}
        underline="always"
      >
        (37) 98832-9573
      </Link>
      <SocialIcon
        url={WHATSAPP_URL}
        network="whatsapp"
        bgColor={theme.palette.primary.main}
        fgColor="white"
        style={iconStyle}
      />
    </Box>
  </Box>
);

export default withTheme(Social);
