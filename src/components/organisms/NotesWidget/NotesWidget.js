import React, { useState } from 'react';
import Note from 'components/molecules/Note/Note';
import {
  NotesWrapper,
  WidgetHandler,
  Wrapper,
} from 'components/organisms/NotesWidget/NotesWidget.styles';
import { useGetNotesQuery } from 'store';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetNotesQuery();

  const handleToggleWidget = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        {data?.notes.length ? (
          data.notes.map(({ id, title, content }) => (
            <Note key={id} id={id} title={title} content={content} />
          ))
        ) : (
          <p>No notes to display. Create your first note.</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
