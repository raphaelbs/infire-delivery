import React from 'react';
import Color from 'color';

import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';

import Typography from './Typography';
import useIsOpen from './useIsOpen';

const greenColor = Color('#17ff1e');
const redColor = Color('#fd0505');

const textShadowSpacing = [10, 20, 30, 40, 70, 80, 100, 150];
const maxValue = Math.max(...textShadowSpacing);
const minValue = Math.min(...textShadowSpacing);

const generateTextShadow = (baseColor, divisor = 1) => textShadowSpacing
  .map((value) => [value / divisor, (value - minValue)/(maxValue - minValue)])
  .map(([spacing, normalized]) => [spacing, baseColor.lighten(normalized).rgb().toString()])
  .map(([spacing, color]) => `0 0 ${spacing}px ${color}`)
  .join(',');

const textShadowGreen = generateTextShadow(greenColor);
const textShadowRed = generateTextShadow(redColor);

const chipStyles = makeStyles(theme => ({
  colorPrimary: {
    padding: theme.spacing(0.6),
    color: greenColor.rgb().toString(),
    borderWidth: 1,
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: greenColor.rgb().toString(),
    textShadow: textShadowGreen,
  },
  colorSecondary: {
    color: redColor.rgb().toString(),
    padding: theme.spacing(0.6),
    textShadow: textShadowRed,
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

export default React.memo(Status);
