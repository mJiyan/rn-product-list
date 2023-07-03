import { render, screen } from "@testing-library/react";

import SearchList, { SearchListProps, ACTIVITY_INDICATOR_TESTID } from "./SearchList";
import { PRODUCT_LIST_MOCK } from '../../shared'

const mockOnRehresh = jest.fn();


const setUp = ({ searchPhrase, onRefresh, navigation, productList, refreshing }: SearchListProps) => 
    render(
        <SearchList 
            searchPhrase={searchPhrase} 
            refreshing={refreshing} 
            productList={productList} 
            navigation={navigation} 
            onRefresh={onRefresh}
        />
    )

describe(SearchList.name, () => {
    it("should show activity indicator and find product list item", async () => {
        setUp({
            searchPhrase: '',
            onRefresh: mockOnRehresh(),
            productList: PRODUCT_LIST_MOCK,
            refreshing: true,
            navigation: null
        })

        const acitvityIndicator = screen.getByTestId(ACTIVITY_INDICATOR_TESTID);
        
        expect(screen.getByText("Mens Casual Premium Slim Fit T-Shirts")).toBeInTheDocument()
        expect(acitvityIndicator).toBeInTheDocument();
    })

    it("should not show activity indicator", async () => {
        setUp({
            searchPhrase: '',
            onRefresh: mockOnRehresh(),
            productList: PRODUCT_LIST_MOCK,
            refreshing: false,
            navigation: null
        })

        const acitvityIndicator = screen.queryByTestId(ACTIVITY_INDICATOR_TESTID);
        
        expect(acitvityIndicator).not.toBeInTheDocument();
    })
})
