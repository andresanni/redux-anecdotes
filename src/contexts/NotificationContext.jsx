import { createContext, useReducer } from 'react';

const NotificationContext = createContext();

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.payload;
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const NotificationContextProvider = ({ children }) => {
  const [notification, notificationDispatcher] = useReducer(
    notificationReducer,
    ''
  );

  return (
    <NotificationContext.Provider
      value={[notification, notificationDispatcher]}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationContextProvider };
