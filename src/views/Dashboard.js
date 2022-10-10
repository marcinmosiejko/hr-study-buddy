import React, { useState } from 'react';
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
import { useGetGroupsQuery } from 'store';

const Dashboard = () => {
  const [currentStudent, setCurrentStudent] = useState({});
  const { getStudentById } = useStudents();
  const { data, isLoading } = useGetGroupsQuery();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleOpenStudentDetails = async (id) => {
    const matchingStudent = await getStudentById(id);
    setCurrentStudent(matchingStudent);
    handleOpenModal();
  };

  if (isLoading)
    return (
      <Wrapper>
        <TitleWrapper>Loading...</TitleWrapper>
      </Wrapper>
    );

  if (!id && data.groups.length > 0)
    return <Navigate to={`/groups/${data.groups.at(0).id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">{id ? `Group ${id}` : 'Select group'}</Title>
        <nav>
          {data.groups.map((group) => (
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
