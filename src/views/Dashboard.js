import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useParams } from 'react-router-dom';
import { Wrapper, TitleWrapper, GroupLink } from './Dashboard.styles';
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const groups = await getGroups();
        setGroups(groups);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id, getGroups]);

  if (!id && groups.length > 0)
    return <Navigate to={`/group/${groups.at(0)}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">{id ? `Group ${id}` : 'Select group'}</Title>
        <nav>
          {groups.map((group) => (
            <GroupLink key={group} to={`/group/${group}`}>
              {group}
            </GroupLink>
          ))}
        </nav>
      </TitleWrapper>
      <ViewWrapper>
        <StudentsList />
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
