export type Maybe<T> = T | null | undefined;

export type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
};

export type RootStackParamList = {
    ProductList: undefined, // undefined because you aren't passing any params to the home screen
    ProductDetails: { product: ProductType },
  };
