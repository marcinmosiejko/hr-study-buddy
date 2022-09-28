import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { Link, useParams } from 'react-router-dom';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/groups`)
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups.at(0)}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.error(err));
  }, [id, groups]);

  return (
    <>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {group}{' '}
          </Link>
        ))}
      </nav>
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
