import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles';

const Navigation = () => (
  <Wrapper>
    <Logo>
      <h1>
        Study
        <br />
        Buddy
      </h1>
    </Logo>
    <StyledLink end to="/">
      Dashboard
    </StyledLink>
    <StyledLink to="/add-user">Add User</StyledLink>
    {/* <StyledLink activeClassName="active-link" to="/">
      Settings
    </StyledLink>
    <StyledLink activeClassName="active-link" to="/">
      Logout
    </StyledLink> */}
  </Wrapper>
);

export default Navigation;