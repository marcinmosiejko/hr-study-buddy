import { v4 as uuid } from 'uuid';
import { createStore } from 'redux';

export const addNote = (payload) => {
  return { type: 'notes/add', payload: { ...payload, id: uuid() } };
};

export const removeNote = (payload) => {
  return { type: 'notes/remove', payload };
};

const initialState = {
  notes: [
    { id: uuid(), title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet' },
  ],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'notes/add':
      return { ...state, notes: [action.payload, ...state.notes] };
    case 'notes/remove':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const store = createStore(
  notesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
