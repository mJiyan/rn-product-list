import {
    render,
    screen,
  } from "@testing-library/react";
  
import { ProductType, PRODUCT_MOCK } from "../../shared"

import ProductDetails from "./ProductDetails";

const setUp = ({ product }: { product: ProductType}) => render(<ProductDetails product={product} />)

describe(ProductDetails.name, () => {
    it("should render module as expected", async () => {
        setUp({ product: PRODUCT_MOCK })
        expect(screen.getByText("Slim-fitting style, contrast.")).toBeInTheDocument()
    })
})
