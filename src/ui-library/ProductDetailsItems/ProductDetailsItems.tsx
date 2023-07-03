import { Box, Text} from "../../ui-library"

export type ProductDetailsItems = {
    title: string,
    content: string,
    numberOfLines?: number,
    flexDirection?: string
}

const ProductDetailsItems = ({ title, content, numberOfLines, flexDirection= "row" }: ProductDetailsItems) => {
    return (
    <Box flexDirection="row" width="100%" pl={15} pt={1}>
        <Box flex={1} flexDirection={flexDirection} alignItems={"center"} justifyContent={"center"} ><Text fontSize={15} fontWeight="bold">{title}: </Text><Text fontSize={15} numberOfLines={numberOfLines}>{content}</Text></Box>
    </Box>
    )
}

export default ProductDetailsItems;
