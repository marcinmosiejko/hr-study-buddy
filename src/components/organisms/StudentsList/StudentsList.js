import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudentsByGroup } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [id, getStudentsByGroup]);

  return (
    <>
      <Title>{students.length > 0 ? `Students list` : null}</Title>
      <StyledList>
        {students?.map((userData, i) => (
          <StudentsListItem
            onClick={() => handleOpenStudentDetails(userData.id)}
            index={i}
            key={Object.values(userData).join('')}
            userData={userData}
          />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
