import PropTypes from 'prop-types';
import React from 'react';
import {withTheme} from 'styled-components';

import * as S from './Article.styled';
import Byline from './Byline/Byline';
import Subject from './Subject/Subject';
import Subtitle from './Subtitle/Subtitle';
import TextBody from './TextBody/TextBody';
import Title from './Title/Title';
import TopImage from './TopImage/TopImage';

const Article = (props) => {
  const {
    bodyWidth,
    byline,
    citation,
    featured,
    headWidth,
    heading2,
    heading3,
    heading4,
    hyperlink,
    paragraph,
    subject,
    subtitle,
    title,
    tags,
    textbody,
    topimage
  } = props;
  return (
    <S.Page>
      <S.Container>
        {featured && featured.enabled ?
          <>
            <S.ContainerFeatured>
              <S.ContentImage>
                <TopImage {...topimage} />
              </S.ContentImage>
              <S.ContentFeatured maxWidth={headWidth}>
                <Subject {...subject} />
                <Title {...title} />
                <Subtitle {...subtitle} />
              </S.ContentFeatured>
            </S.ContainerFeatured>
            <S.MaxWidth maxWidth={headWidth}>
              <S.Content>
                <Byline {...byline} />
              </S.Content>
            </S.MaxWidth>
          </> :
          <S.MaxWidth maxWidth={headWidth}>
            <S.Content>
              <Subject {...subject} />
              <Title {...title} />
              <Subtitle {...subtitle} />
              <Byline {...byline} />
            </S.Content>
            <TopImage {...topimage} />
          </S.MaxWidth>
        }
        <S.MaxWidth maxWidth={bodyWidth}>
          <TextBody
            bodyWidth={bodyWidth}
            citation={citation}
            content={textbody}
            heading2={heading2}
            heading3={heading3}
            heading4={heading4}
            hyperlink={hyperlink}
            paragraph={paragraph}
            tags={tags}
          />
        </S.MaxWidth>
      </S.Container>
    </S.Page>
  );
};

Article.defaultProps = {
  bodyWidth: '768px',
  headWidth: '1016px'
};

Article.propTypes = {
  bodyWidth: PropTypes.string,
  byline: PropTypes.object,
  citation: PropTypes.object,
  featured: PropTypes.object,
  headWidth: PropTypes.string,
  heading2: PropTypes.object,
  heading3: PropTypes.object,
  heading4: PropTypes.object,
  hyperlink: PropTypes.string,
  paragraph: PropTypes.object,
  subject: PropTypes.object,
  subtitle: PropTypes.object,
  tags: PropTypes.object,
  textbody: PropTypes.string,
  title: PropTypes.object,
  topimage: PropTypes.object,
};

export default withTheme(Article);