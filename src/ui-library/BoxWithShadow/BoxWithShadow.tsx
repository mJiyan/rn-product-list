import { View } from 'react-native';
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

import { BoxProps } from 'src/ui-library/Box';


const BoxWithShadow = styled(View)<BoxProps>(
    compose(color, size, space, flexbox, borderRadius, shadow, position),
);

BoxWithShadow.defaultProps = {
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 20,
    boxShadow: '0px 2.5px 2.5px rgba(0, 0, 0, 0.5)',
}

export default BoxWithShadow;
