import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import Block from '../Block';
import Button from '../Button';
import Teaser from '../Teasers';
import {SectionTitle} from '../Typography';

const Columnists = ({
  content,
  customTitle,
  domain,
  lazy,
  status,
  theme,   
  buttonSize,
  buttonFontColor,
  buttonVariant,
  buttonWeight,
  buttonRadius,
  subjectSize,
  subjectWeight,
  hasSubjectFilled,
  titleSize,
  titleWeight,
  titleColor,
  subtitleSize,
  subtitleWeight,
  subtitleColor,
  dateSize,
  dateWeight,
  dateColor,
}) => {

  const {title, templateOptions} = content;
  const {hasActionButton, actionButtonPath, actionButtonTitle} = templateOptions;
  const {color} = theme;

  const handleClick = e => {
    if (actionButtonPath === '') return null;
    e.preventDefault();
    window.location.assign(actionButtonPath);
  };

  const renderTitle = () => {
    if (!title) return null;
    if (customTitle) return customTitle;
    return <SectionTitle weight='bold' gutter={3} color={color}>{title}</SectionTitle>;
  };

  const renderActionButton = () => {
    if (hasActionButton === 'false') return null;
    return (
      <Block>
        <Button fullWidth onClick={handleClick} color={color} size={buttonSize} fontColor={buttonFontColor} variant={buttonVariant} weight={buttonWeight} radius={buttonRadius}>
          {actionButtonTitle}
        </Button>
      </Block>
    );
  };

  return (
    <React.Fragment>
      {renderTitle()}
      <Block custom='Prensa-Templates-Columnist' mb='6' lg={{align: 'row between wrap', mb: '3'}}>
        {map(content['items'], (item, key) => (
          <Teaser 
            content={item}
            domain={domain}
            key={key}
            lazy={lazy}
            status={status}
            subjectSize={subjectSize}
            subjectWeight={subjectWeight}
            subjectColor={color}
            hasSubjectFilled={hasSubjectFilled}
            titleSize={titleSize}
            titleWeight={titleWeight}
            titleColor={titleColor}
            subtitleSize={subtitleSize}
            subtitleWeight={subtitleWeight}
            subtitleColor={subtitleColor}
            dateSize={dateSize}
            dateWeight={dateWeight}
            dateColor={dateColor}
          />
        ))}
      </Block>
      {renderActionButton()}
    </React.Fragment>
  );
};

Columnists.propTypes = {
  actionButton: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
  customTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
  content: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
    items: PropTypes.array,
    templateOptions: PropTypes.object
  }),
  domain: PropTypes.string,
  lazy: PropTypes.func,
  status: PropTypes.object,
  theme: PropTypes.shape({
    color: PropTypes.oneOf(colors)
  }),
  buttonSize: PropTypes.number,
  buttonFontColor: PropTypes.string,
  buttonVariant: PropTypes.string,
  buttonWeight: PropTypes.string,
  buttonRadius: PropTypes.string,
  hasSubjectFilled: PropTypes.bool,
  subjectSize: PropTypes.number,
  subjectWeight: PropTypes.string,
  titleSize: PropTypes.number,
  titleWeight: PropTypes.string,
  titleColor: PropTypes.string,
  subtitleSize: PropTypes.string,
  subtitleWeight: PropTypes.string,
  subtitleColor: PropTypes.string,
  dateColor: PropTypes.string,
  dateSize: PropTypes.string,
  dateWeight: PropTypes.string,
};
export default Columnists;