import {
    render,
    screen,
  } from "@testing-library/react";
  
import { Maybe } from "../../shared"

import ProductListScreen, { ProductListNavigationProp } from "./ProductListScreen";

const mockOnRefresh = jest.fn();

jest.mock('./hooks', () => ({
    useLoadProducts: () => ({
        productList: [
            {
                "category": "men's clothing", 
                "description": "Your perfect pack ", 
                "id": 1, 
                "image": "https://fakestoreapi.com/img/xxx", 
                "price": 109.95, 
                "rating": {
                    "count": 120, 
                    "rate": 3.9
                }, 
                "title": "Fjallraven"
            }],
        refreshing: false,
        onRefresh: mockOnRefresh
    })
}));

const setUp = ({ navigation }: { navigation: Maybe<ProductListNavigationProp>}) => render(<ProductListScreen navigation={navigation} />)

describe(ProductListScreen.name, () => {
    it("should render module as expected", async () => {
        setUp({ navigation: null })
        expect(screen.getByText("Fjallraven")).toBeInTheDocument()
    })
})
