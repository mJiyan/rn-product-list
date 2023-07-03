import { useState } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList, SCREENS, Maybe } from '../../shared';
import { SearchBar, SearchList } from '../../modules';
import { useLoadProducts } from './hooks';
import { BoxWithShadow, Box } from '../../ui-library';

export type ProductListNavigationProp = StackNavigationProp<
  RootStackParamList,
  SCREENS.PRODUCT_LIST
>;

const ProductListScreen = ({ navigation }: { navigation: Maybe<ProductListNavigationProp>}): JSX.Element => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const {
    productList,
    refreshing,
    onRefresh
  } = useLoadProducts();

  return (
    <SafeAreaView style={{flex: 1}}>
      <BoxWithShadow justifyContent={'space-around'} height={50} p={20}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
      </BoxWithShadow>
      <Box>
        <SearchList
          searchPhrase={searchPhrase}
          productList={productList}
          navigation={navigation}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </Box>
    </SafeAreaView>
  );
}


export default ProductListScreen;
