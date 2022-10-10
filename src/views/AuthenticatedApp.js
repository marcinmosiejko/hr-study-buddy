import React from 'react';
import { Wrapper } from './Root.styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import Notes from './Notes';
import NotesWidget from 'components/organisms/NotesWidget/NotesWidget';
// import AddUser from './AddUser';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <NotesWidget />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigate replace to="/groups" />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/groups" element={<Dashboard />}>
            <Route path=":id" element={<Dashboard />} />
          </Route>
          {/* <Route path="/add-user" element={<AddUser />} /> */}
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
