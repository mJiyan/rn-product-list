import { Image } from 'react-native';
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
} from 'styled-system';

import { BoxProps } from 'src/ui-library/Box'


const ImageBox = styled(Image)<BoxProps>(
  compose(color, size, space, flexbox, borderRadius, shadow, position),
);

export default ImageBox;
