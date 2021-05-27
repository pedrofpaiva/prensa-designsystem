import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as diariodaregiao} from '../../../styles/demo/diariodaregiao';
import Article from '../Article';

const ArticleDR = () => {
  return (
    <ThemeProvider theme={diariodaregiao}>
      <Article
        intertitle={{
          value: 'Título'
        }}
        subject={{
          bgColor: 'primary1',
          color: 'white',
          mb: ['2', '3'],
          transform: 'uppercase',
          value: 'Diário da Região'
        }}
        subtitle={{
          mb: ['3', '4'],
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eleifend pellentesque. Suspendisse semper gravida fermentum. Integer pulvinar euismod hendrerit.'
        }}
        title={{
          color: 'neutral2',
          fontSize: ['38px', '62px'],
          mb: ['2', '3'],
          value: 'Adiamento das eleições para 15 e 29 de novembro é aprovado no Senado'
        }}
        paragraph={{
          fontFamily: 'secondary',
          fontSize: ['20px', '20px'],
          lineHeight: ['36px', '42px'],
        }}
        topimage={{
          amp: false,
          image: true,
          caption: {
            fontFamily: 'secondary',
            fontSize: ['14px', '14px'],
            lineHeight: ['130%', '130%'],
            show: true,
            value: 'O advogado detalha que direitos afetados pela instalação do pedágio na Mogi-Dutra e Mogi-Bertioga / Divulgação/ PMMC',
          },
          mb: ['5', '8'],
          value: 'https://www.odiariodemogi.net.br/image/policy:1.15230.1621460050:1621460050/image.jpg?f=2x1&w=1000'
        }}
      />
    </ThemeProvider>
  );
};

export default ArticleDR;