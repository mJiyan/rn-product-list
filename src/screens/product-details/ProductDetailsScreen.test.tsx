import {
    render,
    screen,
  } from "@testing-library/react";
  
import { PRODUCT_MOCK } from "../../shared"
import ProductDetailsScreen, { ProductDetailsProps } from "./ProductDetailsScreen";

const setUp = ({ route }: ProductDetailsProps) => render(<ProductDetailsScreen route={route} />)

describe(ProductDetailsScreen.name, () => {
    it("should render module as expected", async () => {
        setUp({ route: { params: { product: PRODUCT_MOCK}, key: "", name: "params" } })
        expect(screen.getByText("Slim-fitting style, contrast.")).toBeInTheDocument()
    })
})
