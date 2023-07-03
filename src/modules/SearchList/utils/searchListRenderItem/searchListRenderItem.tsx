import { ProductListItem } from "../../components";
import { ProductType } from "../../../../shared";
import { SearchListProps } from "../../SearchList";

export type SearchListRenderItemProps = Omit<SearchListProps, "onRefresh" | "productList" | "refreshing"> & { item: ProductType}

export const searchListRenderItem = ({ item, navigation, searchPhrase }: SearchListRenderItemProps) => {
  if (searchPhrase === "") {
    return <ProductListItem item={item} navigation={navigation} />;
  }
  if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    return <ProductListItem item={item} navigation={navigation} />;
  }
  return <></>
};