import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleCreate = async (event) => {
    event.preventDefault();
    const anecdoteContent = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createAnecdote(anecdoteContent));
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleCreate}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
