import {withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Article from '../components/Article';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Article',
  component: Article,
  decorators: [withKnobs, sassWrapper]
};

export const ArticleTeste = () => {

  const articleContent = {
    "path": "/costanorte/cidades/city-of-edinburgh-council-reviews-clause-affecting-live-music-scene-1.119",
    "title": "City of Edinburgh Council reviews clause affecting live music scene",
    "template": "articlePagelayout",
    "subtitle": "Live music venues in Edinburgh, Scotland are awaiting a review later this year on the 2005 licensing policy, which places limitations on the volume of amplified music in the city.",
    "subject": "SUBJECT",
    "author": "Wikinews",
    "images": {
      "image-byline": "Brian McNeil",
      "image-contentId": "1.149.1592671530",
      "image-subtitle": "Main Legend suscribe phoenix bar",
      "image-subtitle-original": "The Phoenix Bar on Broughton Street in Edinburgh."
    },
    "metadata": [
      "Music",
      "Sport Committee",
      "Edinburgh Council",
      "City Of Edinburgh Council",
      "Teste"
    ],
    "time-created": "11.08.2015 6:47",
    "time-modified": "21.06.2020 23:47",
    "time-published": "20.06.2020 13:45",
    "text": "<p class=\"p1\"><span class=\"s1\">Investigating into how the policy is affecting the Edinburgh music scene, a group of Wikinews writers interviewed venue owners, academics, the <a href=\"https:\/\/en.wikipedia.org\/wiki\/City_of_Edinburgh_Council\"><span class=\"s2\">City of Edinburgh Council<\/span><\/a>, and local band The Mean Reds to get different perspectives on the issue.<\/span><\/p>\r\n\r\n<p class=\"p1\"><span class=\"s1\">Since the clause was introduced by the government of the city of Edinburgh, licensed venues have been prohibited from allowing music to be amplified to the extent it is audible to nearby residential properties. This has affected the live music scene, with several venues discontinuing regular events such as open mic nights, and hosting bands and artists.<\/span><\/p>\r\n\r\n<p class=\"p1\"><span class=\"s1\">Currently, the licensing policy allows licensing standards officers to order a venue to cease live music on any particular night, based on a single noise complaint from the public. The volume is not electronically measured to determine if it breaches a <a href=\"https:\/\/en.wikipedia.org\/wiki\/decibel\"><span class=\"s2\">decibel<\/span><\/a> volume level. Over roughly the past year there have been 56 separate noise complaints made against 18 venues throughout the city.<\/span><\/p>\r\n\r\n<p class=\"p1\"><span class=\"s1\">A petition to amend the clause has garnered over 3,000 signatures, including the support of bar owners, musicians, and members of the general public.<\/span><\/p>\r\n\r\n<p class=\"p1\"><span class=\"s1\">On November 17, 2014, the government's Culture and Sport Committee hosted an <a href=\"https:\/\/en.wikinews.org\/wiki\/City_of_Edinburgh_Council_seek_to_improve_local_music_scene\"><span class=\"s3\">open forum meeting<\/span><\/a> at <a href=\"https:\/\/en.wikipedia.org\/wiki\/Usher_Hall\"><span class=\"s2\">Usher Hall<\/span><\/a>. Musicians, venue owners and industry professionals were encouraged to provide their thoughts on how the council could improve live music in the city. Ways to promote live music as a key cultural aspect of Edinburgh were discussed and it was suggested that it could be beneficial to try and replicate the management system of live music of other global cities renowned for their live music scenes. However, the suggestion which prevailed above all others was simply to review the existing licensing policy.<\/span><\/p>\r\n\r\n<p class=\"p1\"><span class=\"s1\">Councillor (Cllr) Norma Austin-Hart, Vice Convenor of the Culture and Sport Committee, is responsible for the working group Music is Audible. The group is comprised of local music professionals, and councillors and officials from Edinburgh Council. A document circulated to the Music is Audible group stated the council aims \"to achieve a balance between protecting residents and supporting venues\".<\/span><\/p>\r\n\r\n<p class=\"p1\"><span class=\"s1\">Following standard procedure, when a complaint is made, a Licensing Standards Officer (LSO) is dispatched to investigate the venue and evaluate the level of noise. If deemed to be too loud, the LSO asks the venue to lower the noise level. According to a document provided by the City of Edinburgh Council, \"not one single business has lost its license or been closed down because of a breach to the noise condition in Edinburgh.\"<\/span><\/p>\r\n\r\n<p class=\"p1\"><span class=\"s1\">In the Scotland Licensing Policy (2005), Clause 6.2 states, \"where the operating plan indicates that music is to be played in a premises, the board will consider the imposition of a condition requiring amplified music from those premises to be inaudible in residential property.\" According to Cllr Austin-Hart, the high volume of tenement housing in the city centre makes it difficult for music to be inaudible.<\/span><\/p>\r\n\r\n<p class=\"p1\"><span class=\"s1\">During the <a href=\"https:\/\/en.wikinews.org\/wiki\/Edinburgh_Festival_Fringe\"><span class=\"s2\">Edinburgh Festival Fringe<\/span><\/a> during the summer, venues are given temporary licences that allow them to operate for the duration of the festival and under the condition that \"all amplified music and vocals are controlled to the satisfaction of the Director of Services for Communities\", as stated in a document from the council. During the festival, there is an 11 p.m. noise restriction on amplified music, and noise may be measured by Environmental Health staff using sophisticated equipment. Noise is restricted to 65dB(A) from the facades of residential properties; however, complaints from residents still occur. In the document from the council, they note these conditions and limitations for temporary venues would not necessarily be appropriate for permanent licensed premises.<\/span><\/p>\r\n\r\n<p class=\"p1\">&nbsp;<\/p>\r\n"
  };

  return (
    <Article content={articleContent} />
  );
};