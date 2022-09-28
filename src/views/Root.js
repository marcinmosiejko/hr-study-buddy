import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
// import AddUser from './AddUser';
import Dashboard from './Dashboard';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Navigate replace to="/group" />} />
              <Route path="/group" element={<Dashboard />}>
                <Route path=":id" element={<Dashboard />} />
              </Route>
              {/* <Route path="/add-user" element={<AddUser />} /> */}
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
