import { useDispatch, useSelector } from 'react-redux';
import {
  StyledSearchDiv,
  StyledSearchInput,
  StyledSearchLabel,
  StyledSearchSpan,
} from './SearchBarStyled';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/searchBarSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChangeFilterInput = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <StyledSearchDiv>
      <StyledSearchLabel>
        <StyledSearchSpan>Find contacts by name</StyledSearchSpan>
        <StyledSearchInput
          type="text"
          name="Search Bar"
          placeholder="Search contact..."
          value={filter}
          onChange={handleChangeFilterInput}
        />
      </StyledSearchLabel>
    </StyledSearchDiv>
  );
};

export default SearchBar;
