import { View, Image, TouchableOpacity } from "react-native";

import { SCREENS } from '../../../../shared';
import { SearchListRenderItemProps } from "../../utils";
import { BoxWithShadow, Box, ImageBox, Text } from "../../../../ui-library"

export type ProductListItemProps = Pick<SearchListRenderItemProps, "item" | "navigation"> 

const ProductListItem = ({ item, navigation }: ProductListItemProps) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 10,
      }}
      onPress={() => navigation?.navigate(SCREENS.PRODUCT_DETAILS, {
        product: item
      })}>
      <BoxWithShadow p={2}>
        <Box flexDirection="row">
          <Box px={2} flex={1}>
            <ImageBox
              style={{ width: 100, height: 100, resizeMode: 'center' }}
              source={{ uri: item.image }}
            />
          </Box>
          <Box flex={3} pl={3}>
            <Box>
              <Text>{item.title}</Text>
              <Box flexDirection="row" alignItems="center">
                <Box
                  flexDirection='row'
                  backgroundColor='#fff200'
                  alignItems='center'
                  px={1}
                  py={1}
                  mt={1}
                  borderRadius={4}
                >
                  <Text
                    color="#111"
                    fontSize={12}
                  >
                    {item.rating.rate}
                  </Text>
                </Box>
                <Text ml={2}>
                  ({item.rating.count})
                </Text>
              </Box>
            </Box>
            <Box mt={2}>
              <Text fontSize={16}>
                {`$${item.price}  `}
              </Text>
            </Box>
          </Box>
        </Box>
      </BoxWithShadow>
    </TouchableOpacity>

  )
}

export default ProductListItem;
