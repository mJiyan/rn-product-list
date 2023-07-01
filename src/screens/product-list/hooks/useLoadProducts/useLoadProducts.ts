import { useCallback, useEffect, useState } from "react";
import { FAKE_API_END_POINT, Maybe, ProductType } from "../../../../shared";

const useLoadProducts = () => {
    const [productList, setProductList] = useState<Maybe<ProductType[]>>(null);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadProducts()
      }, []);
    
      const loadProducts = () => {
        setRefreshing(true);
        fetch(`${FAKE_API_END_POINT}/products`)
          .then((response) => response.json())
          .then((responseJson) => {
            setRefreshing(false);
            setProductList(responseJson)
          })
          .catch((error) => {
            console.error(error);
          });
      }
    
      const onRefresh = useCallback(() => {
        setProductList([]);
        loadProducts();
      }, []);

      return {
        onRefresh,
        productList,
        refreshing,
      }

}

export default useLoadProducts;
