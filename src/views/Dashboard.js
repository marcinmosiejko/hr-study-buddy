import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useParams } from 'react-router-dom';
import { Wrapper, TitleWrapper, GroupLink } from './Dashboard.styles';
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';
import { Navigate } from 'react-router-dom';
import useModal from 'hooks/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

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

  const handleOpenStudentDetails = async (id) => {
    const matchingStudent = await getStudentById(id);
    setCurrentStudent(matchingStudent);
    handleOpenModal();
  };

  if (!id && groups.length > 0)
    return <Navigate to={`/groups/${groups.at(0)}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">{id ? `Group ${id}` : 'Select group'}</Title>
        <nav>
          {groups.map((group) => (
            <GroupLink key={group} to={`/groups/${group}`}>
              {group}
            </GroupLink>
          ))}
        </nav>
      </TitleWrapper>
      <ViewWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        {isOpen ? (
          <Modal handleCloseModal={handleCloseModal}>
            <StudentDetails student={currentStudent} />
          </Modal>
        ) : null}
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
