import React from 'react';
import {
  FormWrapper,
  NotesWrapper,
  StyledFormField,
  StyledTextareaField,
  Wrapper,
  StyledButton,
} from 'views/Notes.styles';
import Note from 'components/molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';
import { useForm } from 'react-hook-form';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm();

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ title: '', content: '' });
    }
  }, [formState, reset, isSubmitSuccessful]);

  const handleAddNote = (newNote) => {
    dispatch(addNote(newNote));
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField
          label="Title"
          name="title"
          id="title"
          {...register('title', { required: true })}
        />
        <StyledTextareaField
          isTextarea
          label="Content"
          name="content"
          id="content"
          {...register('content', { required: true })}
        />
        <StyledButton type="submit">Add</StyledButton>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ id, title, content }) => (
            <Note key={id} id={id} title={title} content={content} />
          ))
        ) : (
          <p>No notes to display. Create your first note.</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
