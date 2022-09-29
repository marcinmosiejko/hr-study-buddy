import React from 'react';
import { Wrapper } from './SearchResults.styles';

const SearchResults = ({ students }) => {
  return (
    <Wrapper>
      <ul>
        {students?.map((student) => (
          <li key={student.name}>{student.name}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default SearchResults;
