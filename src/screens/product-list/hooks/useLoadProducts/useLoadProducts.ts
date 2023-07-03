import { useCallback, useEffect, useState } from "react";
import { FAKE_API_END_POINT, Maybe, ProductType } from "../../../../shared";

const useLoadProducts = () => {
    const [productList, setProductList] = useState<Maybe<ProductType[]>>(null);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        loadProducts()
      }, []);

    const loadProducts = () => {
      setRefreshing(true);
      fetch(`${FAKE_API_END_POINT}/products`)
        .then((response) => response.json())
        .then((responseJson) => {
          setProductList(responseJson)
        })
        .catch((error) => {
          setError(String(error))
        })
        .finally(() => {
          setRefreshing(false);
        })
    }

    const onRefresh = () => {
      setProductList([]);
      loadProducts();
    }

    return {
      onRefresh,
      productList,
      refreshing,
      error,
    }

}

export default useLoadProducts;
