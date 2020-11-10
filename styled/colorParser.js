import {get} from 'lodash';

import {colors} from '../tokens';

export const colorParser = data => {
  const result = get(colors, data);
  if (!result) {
    console.error('Não foi encontrado o token de cor correspondente.');
    return null;
  }
  return result;
};