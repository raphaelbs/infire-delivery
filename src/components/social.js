import React from "react";
import { SocialIcon } from "react-social-icons";
import { Box, Link } from "@material-ui/core";
import { withTheme } from "@material-ui/styles";

const iconStyle = { width: 32, height: 32, marginLeft: 4 };

const Social = ({ theme }) => (
  <Box display="flex" flexDirection="column" alignItems="flex-end">
    <Box>
      <Link
        color="textPrimary"
        variant="body2"
        href="https://www.instagram.com/infiredelivery"
      >
        @infiredelivery
      </Link>
      <SocialIcon
        url="https://www.instagram.com/infiredelivery"
        bgColor={theme.palette.primary.main}
        fgColor="white"
        style={iconStyle}
      />
    </Box>
    <Box>
      <Link color="textPrimary" variant="body2" href="tel:37-98832-9573">
        (37) 98832-9573
      </Link>
      <SocialIcon
        url="https://wa.me/5537988329573"
        network="whatsapp"
        bgColor={theme.palette.primary.main}
        fgColor="white"
        style={iconStyle}
      />
    </Box>
  </Box>
);

export default withTheme(Social);
