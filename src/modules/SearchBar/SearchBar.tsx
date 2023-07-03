import { TextInput } from "react-native";
import { Input } from "../../ui-library"

export type SearchBarProps = {
  searchPhrase: string,
  setSearchPhrase: ((text: string) => void) | undefined
}

const SearchBar = ({ searchPhrase, setSearchPhrase }: { searchPhrase: string, setSearchPhrase: ((text: string) => void) | undefined}) => (
    <Input
      placeholder="Search for a product..."
      value={searchPhrase}
      onChangeText={setSearchPhrase}
      placeholderTextColor={'rgba(0, 0, 0, 0.5)'} 
      autoCapitalize='none'
    />
)

export default SearchBar;
