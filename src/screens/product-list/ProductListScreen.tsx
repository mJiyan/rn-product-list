import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList, SCREENS } from '../../shared';
import { SearchBar, SearchList } from '../../modules';
import { useLoadProducts } from './hooks';

export type ProductListNavigationProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.PRODUCT_LIST
>;

const ProductListScreen = ({ navigation }: {navigation: ProductListNavigationProp}): JSX.Element => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const {
    productList,
    refreshing,
    onRefresh
  } = useLoadProducts();

  return (
    <SafeAreaView style={{flex: 1}}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <View>
        <SearchList 
          searchPhrase={searchPhrase}
          productList={productList}
          navigation={navigation}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
    </SafeAreaView>
  );
}


export default ProductListScreen;
