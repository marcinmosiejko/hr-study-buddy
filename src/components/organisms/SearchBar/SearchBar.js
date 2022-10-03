import React, { useState } from 'react';
import { useStudents } from 'hooks/useStudents';
import { Input } from 'components/atoms/Input/Input';
import {
  SearchBarWrapper,
  StatusInfo,
  SearchWrapper,
  SearchResultsWrapper,
  SearchResultsItem,
} from './SearchBar.styles';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    try {
      const { students } = await findStudents(inputValue);
      setMatchingStudents(students);
    } catch (err) {
      console.log(err);
    }
  }, 500);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as: </p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          name="Search"
          id="Search"
          placeholder="Search"
        />
        {isOpen && matchingStudents.length > 0 ? (
          <SearchResultsWrapper>
            <ul {...getMenuProps()} aria-label="results">
              {matchingStudents.map((item, index) => (
                <SearchResultsItem
                  isHighlighted={highlightedIndex === index}
                  {...getItemProps({ item, index })}
                  key={item.id}
                >
                  {item.name}
                </SearchResultsItem>
              ))}
            </ul>
          </SearchResultsWrapper>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
