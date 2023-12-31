import { ActivityIndicator, FlatList, RefreshControl } from "react-native";

import { searchListRenderItem } from "./utils";
import { ProductType, Maybe } from "../../shared";
import { ProductListNavigationProp } from "../../screens/product-list/ProductListScreen";
import { Box } from "../../ui-library"

export type SearchListProps = {
  searchPhrase: string, 
  productList: Maybe<ProductType[]>, 
  navigation:Maybe<ProductListNavigationProp>,
  refreshing: boolean,
  onRefresh: () => void
}

export const ACTIVITY_INDICATOR_TESTID = "ACTIVITY_TESTID"

const SearchList = ({ 
    searchPhrase, 
    productList, 
    navigation,
    refreshing,
    onRefresh,
  }: SearchListProps) => (
      <Box>
        {refreshing ? <ActivityIndicator data-testid={ACTIVITY_INDICATOR_TESTID} /> : null}
        <FlatList
          data={productList}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => searchListRenderItem({ item, navigation, searchPhrase })}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }    
        />
    </Box>
  )


export default SearchList;
