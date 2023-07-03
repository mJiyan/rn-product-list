import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import SearchBar, { SearchBarProps} from "./SearchBar";
import { wait } from '../../shared/tests'

const mockSetSearchPhrase = jest.fn();
const SEARCH_VALUE = "game of thrones"

const setUp = ({ searchPhrase, setSearchPhrase }: SearchBarProps) => 
    render(
        <SearchBar 
            searchPhrase={searchPhrase} 
            setSearchPhrase={setSearchPhrase}
        />
    )

describe(SearchBar.name, () => {
    it("should render module as expected", async () => {
        setUp({ searchPhrase:'', setSearchPhrase: mockSetSearchPhrase() })

        const searchInput = screen.getByPlaceholderText("Search for a product...")

        await userEvent.type(searchInput, SEARCH_VALUE);

        await wait(1000)

        expect(mockSetSearchPhrase).toBeCalled()
    })
})
