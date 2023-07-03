import { View } from "react-native"

import { BoxWithShadow, Text, Box, ImageBox, ProductDetailsItems } from '../../ui-library';
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
        <Box p={30}>
            <BoxWithShadow>
                    <Box flexDirection="row" width="100%" backgroundColor={"red"} mt={3}>
                        <Box flex={1}><Text fontSize={20} color={"white"} textAlign={"center"}>{title}</Text></Box>
                    </Box>
                <Box flexDirection="column" alignItems="center" justifyContent="center" pt={2}>
                    <ImageBox
                      style={{ width: 150, height: 150, resizeMode: 'center' }}
                      source={{ uri: image }}
                    />
                </Box>
                <Box flexDirection="column" alignItems="center" justifyContent="center" py={5} px={2}>
                    <ProductDetailsItems
                        title="Price"
                        content={`$${String(price)}`}
                    />
                    <ProductDetailsItems
                        title="Category"
                        content={category}
                    />

                    <ProductDetailsItems
                        title="Rate"
                        content={`${String(rate)}/5 - (${String(count)})`}
                    />

                    <ProductDetailsItems
                        title="Description"
                        content={description}
                        flexDirection="column"
                        numberOfLines={3}
                    />
                </Box>
            </BoxWithShadow>
        </Box>
    )
}

export default ProductDetails
