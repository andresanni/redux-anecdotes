import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(_state = '', action) {
      return action.payload;
    },
    resetNotification() {
      return '';
    },
  },
});

export const { setNotification, resetNotification } = notificationSlice.actions;

export const createNotification = (message, timeOut) => {
  return (dispatch) => {
    dispatch(setNotification(message));
    setTimeout(() => {
      dispatch(resetNotification());
    }, timeOut);
  };
};

export default notificationSlice.reducer;
