import { createSlice, current } from '@reduxjs/toolkit';

const initialState = [];
export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, { payload }) => {
      state.push(payload);
    },
    deleteNote: (state, { payload }) => {
      return state.filter((note) => note.id !== payload);
    },
    editNote: (state, { payload }) => {
      console.log(payload);
      state.map((note) => (note.id === payload.id ? (note.content = payload.content) : note));
    },
    editNoteTitle: (state, { payload }) => {
      state.map((note) => (note.id === payload.id ? (note.title = payload.title) : note));
    },
  },
});
export const { addNote, deleteNote, editNote, editNoteTitle } = noteSlice.actions;
export default noteSlice.reducer;
