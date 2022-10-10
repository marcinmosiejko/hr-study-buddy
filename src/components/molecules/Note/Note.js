import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import {
  NoteWrapper,
  StyledDeleteButton,
} from 'components/molecules/Note/Note.styles';
import { useRemoveNoteMutation } from 'store';

const Note = ({ id, title, content }) => {
  const [removeNote] = useRemoveNoteMutation();

  const handleRemoveNote = () => {
    console.log('remove');
    removeNote({ id });
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton onClick={handleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
