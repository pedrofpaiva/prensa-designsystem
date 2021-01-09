import PropTypes from 'prop-types';
import React from 'react';
import styled, {withTheme} from 'styled-components';
import mobileStyled from 'styled-components/native';

const getContainerStyle = props => `
  height: 28px;
  border-radius: 5px;
  background-color: ${props.subjectColor ? props.subjectColor : props.theme.colors.primary1};
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props.theme.parseMargin(props.theme, props)};
  ${props.theme.parsePadding(props.theme, props)};
`;
const getSubjectTypographyStyle = props => `
  font-family: ${props.theme.fonts.secondary};
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: white;
  text-transform: uppercase;
`;
const Container = styled.div`${props => getContainerStyle(props)}`;
const SubjectTypography = styled.span`${props => getSubjectTypographyStyle(props)}`;
const MobileContainer = mobileStyled.View`${props => getContainerStyle(props)}`;
const MobileSubjectTypography = mobileStyled.Text`${props => getSubjectTypographyStyle(props)}`;

const Subject = props => {
  const {title, theme, mb, px, isMobile} = props;
  if (!title) return null;
  if (isMobile) {
    return (
      <MobileContainer mb={mb} px={px} subjectColor={theme.activeColor}>
        <MobileSubjectTypography>{title}</MobileSubjectTypography>
      </MobileContainer>
    );
  }
  return (
    <Container mb={mb} px={px} subjectColor={theme.activeColor}>
      <SubjectTypography>{title}</SubjectTypography>
    </Container>
  );
};

Subject.defaultProps = {
  mb: 3,
  px: 1
};

Subject.propTypes = {
  isMobile: PropTypes.bool,
  mb: PropTypes.number,
  px: PropTypes.number,
  title: PropTypes.string,
  theme: PropTypes.object,
};

export default withTheme(Subject);
