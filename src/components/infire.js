import React from 'react';
import { Typography } from '@material-ui/core';

const pattern = new RegExp(`(in\\s*fire)`, 'gi');

const InFireText = ({ index }) => <Typography key={index} color="secondary" component="span">InFire</Typography>;

const checkForInFire = (text, index) => {
  if (pattern.exec(text)) {
    return <InFireText index={index} />;
  }
  return <span key={index}>{text}</span>;
}

const Infire = ({ text }) => {
  const textParts = text.split(pattern);

  return <span>{textParts.map((textPart, index) => checkForInFire(textPart, index) )}</span>;
};

export default Infire;
