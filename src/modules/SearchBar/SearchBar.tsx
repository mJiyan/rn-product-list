import { TextInput } from "react-native";

const SearchBar = ({ searchPhrase, setSearchPhrase }: { searchPhrase: string, setSearchPhrase: ((text: string) => void) | undefined}) => (
    <TextInput
      placeholder="Search"
      value={searchPhrase}
      onChangeText={setSearchPhrase}
    />
)

export default SearchBar;
