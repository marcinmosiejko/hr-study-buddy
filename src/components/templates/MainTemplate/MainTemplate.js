import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';
import Navigation from 'components/organisms/Navigation/Navigation';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
