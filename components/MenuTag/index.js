import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import radiusTypes from '../../styles/variables/radius.json';
import weightTypes from '../../styles/variables/weight.json';
import Block from '../Block';
import {MenuTopItem} from '../Typography';

const MenuTag = ({children, color, path, radius, weight}) => {

  const classes = classnames({
    'Prensa-MenuTag-root': true,
    [`color-${color} radius-${radius} ${weight}`]: true,
  });

  return (
    <Block custom={classes} mr="1" pl="2" pr="2" pt="1" pb="1">
      <MenuTopItem color={color} weigth={weight} path={path}>{children}</MenuTopItem>
      {/* <a href={path}>{children}</a> */}
    </Block>
  );
};

MenuTag.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(colors),
  path: PropTypes.string.isRequired,
  radius: PropTypes.oneOf(radiusTypes),
  weight: PropTypes.oneOf(weightTypes)
};

MenuTag.defaultProps = {
  color: 'primary-1',
  radius: 'default',
  weight: 'bold'
};

export default MenuTag;