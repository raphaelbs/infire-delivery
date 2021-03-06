import React from 'react';
import PropTypes from 'prop-types';
import MuiTypography from '@material-ui/core/Typography';

const pattern = new RegExp('(in\\s*fire)', 'gi');

const InFireText = (props) => <MuiTypography {...props} color="secondary" component="span">InFire</MuiTypography>;

const checkForInFire = (text, index, props) => {
  if (pattern.exec(text)) {
    return <InFireText {...props} key={index} />;
  }
  return <span key={index}>{text}</span>;
};

const Typography = ({ children, ...props }) => {
  const textParts = `${children}`.split(pattern);

  return (
    <MuiTypography {...props}>
      {textParts.map((textPart, index) => checkForInFire(textPart, index, props) )}
    </MuiTypography>
  );
};
Typography.propTypes = {
  children: PropTypes.node,
};

export default Typography;
