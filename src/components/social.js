import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_NAME, PHONE_NUMBER } from '../constants';
import Instagram from '../icons/Instagram';
import Whatsapp from '../icons/Whatsapp';

const Social = () => {
  const onClick = (href, analyticEventName) => () => {
    trackCustomEvent({
      category: 'social-media',
      action: analyticEventName,
    });
    return false;
  };

  return (
    <Box display="flex" justifyContent="space-between" mt={1}>
      <Link
        color="textPrimary"
        variant="caption"
        underline="always"
        data-testid="instagram"
        onClick={onClick(INSTAGRAM_URL, 'instagram')}
        href={INSTAGRAM_URL}
        target="_blank"
      >
        <span>@{INSTAGRAM_NAME}</span>
        <Instagram />
      </Link>
      <Link
        color="textPrimary"
        variant="caption"
        underline="always"
        data-testid="whatsapp"
        onClick={onClick(WHATSAPP_URL, 'whatsapp')}
        href={WHATSAPP_URL}
        target="_blank"
      >
        <span>{PHONE_NUMBER}</span>
        <Whatsapp />
      </Link>
    </Box>
  );
};

export default Social;
