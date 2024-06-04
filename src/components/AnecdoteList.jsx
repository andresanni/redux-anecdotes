import { vote } from '../reducers/anecdoteReducer';
import { useSelector, useDispatch } from 'react-redux';
import { createNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter) {
      return anecdotes.filter((anecdote) => anecdote.content.includes(filter));
    }

    return [...anecdotes].sort((a, b) => {
      return b.votes - a.votes;
    });
  });

  const dispatch = useDispatch();

  const handleVote = async (anecdote) => {
    dispatch(vote(anecdote));

    dispatch(createNotification(`you voted '${anecdote.content}'`, 5000));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
