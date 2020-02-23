import React from "react";
import Color from "color";

import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";

import Typography from './Typography';
import useIsOpen from './useIsOpen';

const greenColor = Color('#17ff1e');

const textShadowSpacing = [10, 20, 30, 40, 70, 80, 100, 150];
const maxValue = Math.max(...textShadowSpacing);
const minValue = Math.min(...textShadowSpacing);

const generateTextShadow = (baseColor, divisor = 1) => textShadowSpacing
  .map((value) => [value / divisor, (value - minValue)/(maxValue - minValue)])
  .map(([spacing, normalized]) => [spacing, baseColor.lighten(normalized).rgb().toString()])
  .map(([spacing, color]) => `0 0 ${spacing}px ${color}`)
  .join(',');

const generateKeyFrames = (baseColor) => ({
  from: {
    color: baseColor.rgb().toString(),
    textShadow: generateTextShadow(baseColor),
  },
  to: {
    color: baseColor.lighten(0.1).rgb().toString(),
    textShadow: generateTextShadow(baseColor, 2),
  },
});

const animationGreen = '$neonGreen 1.5s ease-in-out infinite alternate';
const animationRed = '$neonRed 2s ease-in-out infinite alternate';

const commonStyles = {
  '-webkit-transform': 'translateZ(0)',
  '-moz-transform': 'translateZ(0)',
  '-ms-transform': 'translateZ(0)',
  '-o-transform': 'translateZ(0)',
  transform: 'translateZ(0)',
};

const chipStyles = makeStyles(theme => ({
  '@keyframes neonGreen': generateKeyFrames(greenColor),
  '@keyframes neonRed': generateKeyFrames(Color('#fd0505')),
  colorPrimary: {
    ...commonStyles,
    padding: theme.spacing(0.6),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: greenColor.rgb().toString(),
  },
  colorSecondary: {
    ...commonStyles,
    padding: theme.spacing(0.6),
  },
}));

const Status = () => {
  const [isOpen] = useIsOpen();
  
  const label = isOpen ? 'ABERTO' : 'FECHADO';
  const color = isOpen ? 'primary' : 'secondary';
  const styles = chipStyles();

  return (
    <Box mt={2}>
      <Typography classes={styles} color={color}>{label}</Typography>
    </Box>
  );
};

export default Status;
