import React from 'react';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { WHATSAPP_URL, INSTAGRAM_URL } from '../constants';
import { InstagramIcon, WhatsAppIcon } from './icons';
import { trackEvent } from '../tracking';

const Social = () => {
  const track = (type) => () => {
    trackEvent('social-media', { type });
  };

  return (
    <Box display="flex" justifyContent="space-between" mt={1}>
      <Link color="textPrimary" variant="caption" underline="always" href={INSTAGRAM_URL} target="_blank" rel="noopener" onClick={track('instagram')}>
        <span>@infiredelivery</span><InstagramIcon />
      </Link>
      <Link color="textPrimary" variant="caption" underline="always" href={WHATSAPP_URL} target="_blank" rel="noopener" onClick={track('whatsapp')}>
        <span>(37) 98832-9573</span><WhatsAppIcon />
      </Link>
    </Box>
  );
};

export default React.memo(Social);
