import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper } from './Nav.styles';

const Nav = () => (
  <Wrapper>
    <Link className="link ">
      Study
      <br />
      Buddy
    </Link>
    <Link className={['link', 'active'].join(' ')} to="/">
      Dashboard
    </Link>
    <Link className="link" to="/add-user">
      Add User
    </Link>
    <Link className="link" to="/">
      Settings
    </Link>
    <Link className="link" to="/">
      Logout
    </Link>
  </Wrapper>
);

Nav.propTypes = {};

export default Nav;
