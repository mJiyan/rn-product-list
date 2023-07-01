import { View, Text } from "react-native"
import { ProductType } from "../../shared"

const ProductDetails = ({ product }: { product: ProductType}) => {
    const {
        id,
        title,
        price,
        description,
        category,
        image,
        rating: {
            rate,
            count
        }
    } = product;
    
    return (
        <View>
            <Text>id: {id}</Text>
            <Text>title: {title}</Text>
            <Text>price: {price}</Text>
            <Text>description: {description}</Text>
            <Text>category: {category}</Text>
            <Text>rate: {rate}</Text>
            <Text>count: {count}</Text>
        </View>
    )
}

export default ProductDetails
