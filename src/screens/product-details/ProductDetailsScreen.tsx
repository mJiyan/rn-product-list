import { RouteProp } from '@react-navigation/native';

import { ProductType } from '../../shared';
import { ProductDetails } from '../../modules';

interface ProductDetailsProps {
    route?: RouteProp<{ params: { product: ProductType } }, 'params'>
}

const ProductDetailsScreen = ({ route }: ProductDetailsProps) => {
    const product = route?.params.product;
    return product ? <ProductDetails product={product} /> : null
}

export default ProductDetailsScreen;
