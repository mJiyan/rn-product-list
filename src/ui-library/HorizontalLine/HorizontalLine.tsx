import { View } from 'react-native';
import styled from 'styled-components';
import {
    compose,
    color,
    size,
    typography,
    space,
    flexbox,
} from 'styled-system';

import { BoxProps } from 'src/ui-library/Box';

const HorizontalLine = styled(View)<BoxProps>(compose(typography, space, color, size, flexbox));

HorizontalLine.defaultProps = {
    height: 1, 
    width: '100%', 
    backgroundColor: "rgba(0, 0, 0, 0.2)", 
    margin: 5
}

export default HorizontalLine;