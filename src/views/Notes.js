import React, { useEffect } from 'react';
import {
  FormWrapper,
  NotesWrapper,
  StyledFormField,
  StyledTextareaField,
  Wrapper,
  StyledButton,
} from 'views/Notes.styles';
import Note from 'components/molecules/Note/Note';
import { useForm } from 'react-hook-form';
import { useGetNotesQuery, useAddNoteMutation } from 'store';
import { Title } from 'components/atoms/Title/Title';

const Notes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

  const { data, isLoading } = useGetNotesQuery();
  const [addNote, rest] = useAddNoteMutation();

  useEffect(() => {
    // console.log(data);
    // console.log(rest);
  }, [data]);

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ title: '', content: '' });
    }
  }, [formState, reset, isSubmitSuccessful]);

  const handleAddNote = (newNote) => {
    addNote(newNote);
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
        {errors.title && <span>Title is required</span>}
        {errors.content && <span>Content is required</span>}
      </FormWrapper>
      {isLoading ? (
        <Title as="h2">Loading...</Title>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ id, title, content }) => (
              <Note key={id} id={id} title={title} content={content} />
            ))
          ) : (
            <p>No notes to display. Create your first note.</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default Notes;
