import React, { useState, useEffect } from 'react';
import { useStudents } from 'hooks/useStudents';
import SearchResults from 'components/molecules/SearchResults/SearchResults';
import { Input } from 'components/atoms/Input/Input';
import {
  SearchBarWrapper,
  StatusInfo,
  SearchWrapper,
} from './SearchBar.styles';
import debounce from 'lodash.debounce';

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    try {
      const { students } = await findStudents(searchPhrase);
      setMatchingStudents(students);
    } catch (err) {
      console.log(err);
    }
  }, 500);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchPhrase]);

  const handleSearchStudents = (e) => {
    setSearchPhrase(e.target.value);
  };

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as: </p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input
          value={searchPhrase}
          onChange={handleSearchStudents}
          name="Search"
          id="Search"
        />
        {searchPhrase && matchingStudents.length > 0 ? (
          <SearchResults students={matchingStudents}></SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
