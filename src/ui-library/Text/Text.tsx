import { Text as T } from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  typography,
  space,
  flexbox,
  ColorProps,
  SizeProps,
  TypographyProps,
  SpaceProps,
  FlexboxProps,
} from 'styled-system';

interface CustomTextProps {
    mt: number;
    width: number | string;
    height: number;
}

export type TextProps = ColorProps
    | SizeProps
    | SpaceProps
    | FlexboxProps
    | TypographyProps
    | CustomTextProps

const Text = styled(T)<TextProps>(compose(typography, space, color, size, flexbox));

export default Text;
