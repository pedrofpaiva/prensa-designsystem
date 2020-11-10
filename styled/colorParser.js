import {find} from 'lodash';

import {colors} from '../tokens/index.js';

export const colorParser = data => {
  const result = find(colors, {token: data});
  if (!result) {
    console.error('Não foi encontrado o token de cor correspondente.');
    return null;
  }
  return result.value;
};