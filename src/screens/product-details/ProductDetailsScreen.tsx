import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList, SCREENS } from '../../shared';

interface ProductDetailsProps {
    navigation?: StackNavigationProp<
        RootStackParamList,
        SCREENS.PRODUCT_DETAILS
    >,
    route?: RouteProp<{ params: { id: number } }, 'params'>
}

const ProductDetailsScreen = ({ navigation, route }: ProductDetailsProps) => {
    return (
        <View>
            <Text>ProductDetails: {route?.params.id}</Text>
        </View>
    )
}

export default ProductDetailsScreen;
