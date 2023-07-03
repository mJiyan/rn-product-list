import {
    render,
    screen,
  } from "@testing-library/react";
  
import { PRODUCT_MOCK } from "../../../../shared"

import ProductListItem, { ProductListItemProps } from "./ProductListItem";

const setUp = ({ item, navigation }: ProductListItemProps) => render(<ProductListItem item={item} navigation={navigation} />)

describe(ProductListItem.name, () => {
    it("should render module as expected", async () => {
        setUp({ item: PRODUCT_MOCK, navigation: null })
        expect(screen.getByText("Mens Casual Premium Slim Fit T-Shirts")).toBeInTheDocument()
    })
})
