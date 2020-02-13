import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const pattern = new RegExp(`(in\\s*fire)`, 'gi');

const InFireText = <Typography color="secondary" component="span">InFire</Typography>;

const checkForInFire = (text) => {
  if (pattern.exec(text)) {
    return InFireText;
  }
  return text;
}

const Infire = ({ text }) => {
  const textParts = text.split(pattern);

  return <span>{textParts.map((textPart) => checkForInFire(textPart) )}</span>;
};

export default Infire;
