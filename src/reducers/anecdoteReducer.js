import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdote';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    updateVoted(state, action) {
      return state.map((anecdote) =>
        anecdote.id === action.payload.id ? action.payload : anecdote
      );
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { appendAnecdote, updateVoted, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (anecdoteContent) => {
  return async (dispatch) => {
    const savedAnecdote = await anecdoteService.create(anecdoteContent);
    dispatch(appendAnecdote(savedAnecdote));
  };
};

export const vote = (anecdote) => {
  return async (dispatch) => {
    const modifiedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    const updatedAnecdote = await anecdoteService.update(
      anecdote.id,
      modifiedAnecdote
    );

    dispatch(updateVoted(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;
