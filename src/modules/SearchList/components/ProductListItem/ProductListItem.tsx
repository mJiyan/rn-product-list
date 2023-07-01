import { View, Text, Image, TouchableOpacity } from "react-native";

import { SCREENS, ProductType } from '../../../../shared';
import { ProductListNavigationProp } from "../../../../screens/product-list/ProductListScreen";

const ProductListItem = ({ product, navigation }: { product: ProductType, navigation: ProductListNavigationProp }) => {
  return (
    // <Text key={id} onPress={() => navigation.navigate(SCREENS.PRODUCT_DETAILS, {
    //   id: id
    // })}>
    //   {title}
    // </Text>
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        marginTop: 10,
        borderBottomColor: '#dfe4ea',
        borderBottomWidth: 1,
        paddingVertical: 10,
      }}
      onPress={() => navigation.navigate(SCREENS.PRODUCT_DETAILS, {
        product
      })}>
      <View style={{ flexDirection: 'row' }}>
        {/* Product Image View */}
        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <Image
            style={{ width: 100, height: 100, resizeMode: 'center' }}
            source={{ uri: product.image }}
          />
        </View>
        {/* Product Details View */}
        <View style={{ flex: 3 }}>
          {/* -- Ratings View */}
          <View>
            <Text style={{ fontFamily: 'SSRegular' }}>{product.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff200',
                  alignItems: 'center',
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                  borderRadius: 4,
                  marginTop: 4,
                }}
              >
                <Text
                  style={{
                    color: '#111',
                    marginRight: 8,
                    fontFamily: 'SSBold',
                    fontSize: 16,
                  }}
                >
                  {product.rating.rate}
                </Text>
              </View>
              <Text style={{ marginLeft: 6, fontFamily: 'SSRegular' }}>
                ({product.rating.count})
              </Text>
            </View>
          </View>
          {/* -- Price View */}
          <View style={{ marginTop: 4 }}>
            <Text style={{ fontFamily: 'SSBold', fontSize: 16 }}>
              {`$${product.price}  `}
            </Text>
          </View>
        </View>
      </View>
      {/* Offer View */}
      <View
        style={{
          paddingHorizontal: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
      
      </View>
      {/* Specifications Wrap */}
      <View
        style={{
          marginTop: 4,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
      </View>
    </TouchableOpacity>

  )
}

export default ProductListItem;
