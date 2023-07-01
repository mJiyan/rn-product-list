import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS, RootStackParamList } from './shared';
import { ProductDetailsScreen, ProductListScreen } from "./screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const ProductStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={SCREENS.PRODUCT_LIST}
            >
                <Stack.Screen name={SCREENS.PRODUCT_LIST} component={ProductListScreen}  />
                <Stack.Screen name={SCREENS.PRODUCT_DETAILS} component={ProductDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

