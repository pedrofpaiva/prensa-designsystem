import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import styled, {withTheme} from 'styled-components';

import {parseProps} from './propsParser';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  text-transform: uppercase;
  border: unset;
  cursor: pointer;
  &:disabled {
    cursor: unset;
    &:hover {
      animation-name: none;
    }
  }
  &:hover {
    animation-name: buttonHover;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
  @keyframes buttonHover {
    from {opacity: 100%;}
    to {opacity: 80%;}
  }
  ${props => parseProps('', props)};
  ${props => props.xs && parseProps('xs', props)};
  ${props => props.sm && parseProps('sm', props)};
  ${props => props.md && parseProps('md', props)};
  ${props => props.lg && parseProps('lg', props)};
  ${props => props.xl && parseProps('xl', props)};
`;

const StyledAria = styled.a`
  max-width: max-content;
  text-decoration: unset;
`;

const Button = ({
  children,
  color,
  disabled,
  fontColor,
  width,
  fullWidth,
  leftIcon,
  onClick,
  radius,
  rightIcon,
  size,
  style,
  variant,
  loading,
  enterKey,
  removeText,
  px,
  on,
  path,
  xs,
  sm,
  md,
  lg,
  xl,
}) => {

  // Trigger to Handle enter keydown for forms
  const handleKeyPress = event => {
    if (event.keyCode === 13) enterKey();
  };
  useEffect(() => {
    enterKey && window.addEventListener('keydown', handleKeyPress);
    return () => enterKey && window.removeEventListener('keydown', handleKeyPress);
  });

  //All props with $ are forwarded ONLY to components (Not to HTML like onClick)
  const getXsProps = () => xs && ({
    $color: xs.color ? xs.color : color,
    $variant: xs.variant ? xs.variant : variant,
    $radius: xs.radius ? xs.radius : radius,
    $size: xs.size ? xs.size : size,
    $width: xs.width ? xs.width : width,
    removeText: xs.removeText ? xs.removeText : removeText,
  });
  const getSmProps = () => sm && ({
    $color: sm.color ? sm.color : color,
    $variant: sm.variant ? sm.variant : variant,
    $radius: sm.radius ? sm.radius : radius,
    $size: sm.size ? sm.size : size,
    $width: sm.width ? sm.width : width,
    removeText: sm.removeText ? sm.removeText : removeText,
  });
  const getMdProps = () => md && ({
    $color: md.color ? md.color : color,
    $variant: md.variant ? md.variant : variant,
    $radius: md.radius ? md.radius : radius,
    $size: md.size ? md.size : size,
    $width: md.width ? md.width : width,
    removeText: md.removeText ? md.removeText : removeText,
  });
  const getLgProps = () => lg && ({
    $color: lg.color ? lg.color : color,
    $variant: lg.variant ? lg.variant : variant,
    $radius: lg.radius ? lg.radius : radius,
    $size: lg.size ? lg.size : size,
    $width: lg.width ? lg.width : width,
    removeText: lg.removeText ? lg.removeText : removeText,
  });
  const getXlProps = () => xl && ({
    $color: xl.color ? xl.color : color,
    $variant: xl.variant ? xl.variant : variant,
    $radius: xl.radius ? xl.radius : radius,
    $size: xl.size ? xl.size : size,
    $width: xl.width ? xl.width : width,
    removeText: xl.removeText ? xl.removeText : removeText,
  });

  const renderRoot = () => {
    return (
      <StyledButton
        on={on}
        px={px}
        fullWidth={fullWidth}
        style={style}
        onClick={onClick}
        disabled={disabled}
        fontColor={fontColor}
        removeText={removeText}
        $color={color}   
        $variant={variant}
        $radius={radius}
        $size={size}
        $width={width}
        xs={getXsProps()}
        sm={getSmProps()}
        md={getMdProps()}
        lg={getLgProps()}
        xl={getXlProps()}
      >
        {loading && 'Carregando...'}
        {leftIcon && leftIcon}
        <span>{children}</span>
        {rightIcon && rightIcon}
      </StyledButton>
    );
  };

  return path ? <StyledAria href={path} target='_blank'>{renderRoot()}</StyledAria> : renderRoot();
};

Button.propTypes = {
  /**
   * Corresponde ao texto escrito do botão
   */
  children: PropTypes.string.isRequired,
  /**
   * Altera a cor geral do componente
   */
  color: PropTypes.string,
  /**
   * Ativa/desativa o estado disabed nativo do elemento
   */
  disabled: PropTypes.bool,
  /**
   * Permite a troca da cor da fonte para casos específicos
   */
  fontColor: PropTypes.string,
  /**
   * Ativa o estilo com largura máxima para o botão (cresce 100% do width disponível)
   */
  fullWidth: PropTypes.bool,
  /**
   * Permite alterar a largura do componente (disponível a família de tamanhos em Number e String)
   */
  width: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * Permite a passagem de um componente SVG para ícone no lado esquerdo
   */
  leftIcon: PropTypes.element,
  /**
   * Lida com o evento de clique do botão
   */
  onClick: PropTypes.func,
  /**
   * Permite a escolha do token para border-radius
   */
  radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
  /**
   * Permite a passagem de um ícone à direita
   */
  rightIcon: PropTypes.element,
  /**
   * Permite a escolha de um tamanho (height) para o botão
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Passagem de estilos customizados inline
   */
  style: PropTypes.object,
  /**
   * Permite a escolha de uma das variações de estrutura do componente
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
  /**
   * Ativa a informação "Carregando"
   */
  loading: PropTypes.bool,
  /**
   * Recebe o evento de clique na tecla enter | return através de uma função
   */
  enterKey: PropTypes.func,
  /**
   * Permite alterar o espacamento interno no botão
   */
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** 
   * Permite remover o texto do botão
   */
  removeText: PropTypes.bool,
  /**
   * AMP :: Props equivalente a onClick, executa a ação do clique no AMP
   */
  on: PropTypes.string,
  /**
   * AMP :: Props equivalente a onClick, executa a ação de clique para links externos
   */
  path: PropTypes.string,
  xs: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool
  }),
  sm: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool
  }),
  md: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool
  }),
  lg: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool
  }),
  xl: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool
  }),
};

Button.defaultProps = {
  px: 2,
  disabled: false,
  variant: 'filled',
  color: 'primary1',
  radius: 'default',
  size: 4,
  loading: false
};

export default withTheme(Button);