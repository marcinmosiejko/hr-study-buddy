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
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

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
    return <Navigate to={`/groups/${groups.at(0).id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">{id ? `Group ${id}` : 'Select group'}</Title>
        <nav>
          {groups.map((group) => (
            <GroupLink key={group.id} to={`/groups/${group.id}`}>
              {group.id}
            </GroupLink>
          ))}
        </nav>
      </TitleWrapper>
      <ViewWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
