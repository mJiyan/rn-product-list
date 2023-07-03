import { TextInput } from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  border,
  shadow,
  position,
  fontFamily,
  typography,
  ColorProps,
  SizeProps,
  SpaceProps,
  FlexboxProps,
  BorderProps,
  ShadowProps,
  PositionProps,
  FontFamilyProps,
  TypographyProps
} from 'styled-system';


interface CustomInputProps {
    width: number;
    height: number;
}

export type InputProps = SizeProps
    | SpaceProps
    | FlexboxProps
    | ShadowProps
    | ColorProps
    | PositionProps
    | BorderProps
    | FontFamilyProps
    | TypographyProps
    | CustomInputProps

const Input = styled(TextInput)<InputProps>(
  compose(typography, color, size, space, flexbox, shadow, position, border, fontFamily),
);

Input.defaultProps = {
  autoCapitalize: 'none',
  fontFamily:"fCardTitle"
}

export default Input;
