import React from "react";
import { SocialIcon } from "react-social-icons";
import { useFirebase } from "gatsby-plugin-firebase";

import { Box, Link, Button } from "@material-ui/core";
import { withTheme } from "@material-ui/styles";

import { WHATSAPP_URL, INSTAGRAM_URL } from "../constants";

const iconStyle = { width: 32, height: 32, marginLeft: 4 };
const buttonStyle = { padding: "8px 0 8px 8px" };

const Social = ({ theme }) => {
  const [analytics, setAnalytics] = React.useState(null);

  useFirebase(firebase => {
    setAnalytics(firebase.analytics());
  }, []);

  const onClick = (href, analyticEventName) => () => {
    analytics.logEvent(analyticEventName);
    window.open(href, "_blank");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <Button style={buttonStyle} onClick={onClick(INSTAGRAM_URL, "instagram")}>
        <Link color="textPrimary" variant="caption" underline="always">
          @infiredelivery
        </Link>
        <SocialIcon
          network="instagram"
          bgColor={theme.palette.primary.main}
          fgColor="white"
          style={iconStyle}
        />
      </Button>
      <Button style={buttonStyle} onClick={onClick(WHATSAPP_URL, "whatsapp")}>
        <Link color="textPrimary" variant="caption" underline="always">
          (37) 98832-9573
        </Link>
        <SocialIcon
          network="whatsapp"
          bgColor={theme.palette.primary.main}
          fgColor="white"
          style={iconStyle}
        />
      </Button>
    </Box>
  );
};

export default withTheme(Social);
