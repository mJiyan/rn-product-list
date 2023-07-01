import { ActivityIndicator, FlatList, RefreshControl, View } from "react-native";

import { ProductListItem } from "./components";
import { ProductType, Maybe } from "../../shared";
import { ProductListNavigationProp } from "../../screens/product-list/ProductListScreen";

const SearchList = ({ 
    searchPhrase, 
    productList, 
    navigation,
    refreshing,
    onRefresh,
  }: { 
    searchPhrase: string, 
    productList: Maybe<ProductType[]>, 
    navigation: ProductListNavigationProp,
    refreshing: boolean,
    onRefresh: () => void
  }) => {
    const renderItem = ({ item }: { item: ProductType }) => {
        if (searchPhrase === "") {
          return <ProductListItem product={item} navigation={navigation} />;
        }
        if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
          return <ProductListItem product={item} navigation={navigation} />;
        }
        return <></>
      };
    return (
        <View>
          {refreshing ? <ActivityIndicator /> : null}
          <FlatList
            data={productList}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }    
          />
      </View>
    )
}

export default SearchList;
