const parseCustom = (theme, {custom}) => {
  if(!custom)
    return '';
  let object = [];
  object.push(`
    ${custom}
  `);
  return object.join('');
};

const parseCustomDef = (theme, {customDef}) => {
  let object = [];
  switch (customDef) {
    case 'demo':
      object.push(`
        background-color: rgba(1, 22, 39, 0.2);
        color: rgba(255, 55, 255, 1);
        font-weight: bold;
        height: 100px;
        span { 
          border: 1px solid rgba(255, 55, 255, 1);
          font-size: 11px;
          padding: 3px;
          margin: 0px; 
        }
      `);
  }
  return object.join('');
};

export {parseCustom, parseCustomDef};