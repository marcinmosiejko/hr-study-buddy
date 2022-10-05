import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles';

const Navigation = () => {
  const { signOut } = useAuth();

  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/groups">Dashboard</StyledLink>
      <StyledLink as="a" onClick={signOut}>
        Logout
      </StyledLink>
      {/* <StyledLink to="/add-user">Add User</StyledLink> */}
      {/* <StyledLink activeClassName="active-link" to="/">
      Settings
    </StyledLink>
    <StyledLink activeClassName="active-link" to="/">
      Logout
    </StyledLink> */}
    </Wrapper>
  );
};

export default Navigation;
