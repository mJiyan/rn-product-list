import { View, ViewProps } from 'react-native';
import styled from 'styled-components';
import {
  color,
  compose,
  size,
  space,
  flexbox,
  borderRadius,
  shadow,
  position,
  ColorProps,
  SizeProps,
  SpaceProps,
  FlexboxProps,
  BorderRadiusProps,
  ShadowProps,
  PositionProps,
} from 'styled-system';


interface CustomBoxProps {
    width: number | string;
    height?: any;
    source: any;
    as?: any;
    justifyContent: string;
    mt?: number;
    alignItems: string;
    flexDirection: string;
}

export type BoxProps = ColorProps
  | SizeProps
  | SpaceProps
  | FlexboxProps
  | BorderRadiusProps
  | ShadowProps
  | PositionProps
  | ViewProps
  | CustomBoxProps;

const Box = styled(View)<BoxProps>(
  compose(color, size, space, flexbox, borderRadius, shadow, position),
);

export default Box;
