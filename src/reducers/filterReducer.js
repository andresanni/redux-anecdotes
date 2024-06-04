import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterBy(state, action) {
      return action.payload;
    },
  },
});

// const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'FILTER':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// //Action creators
// export const filter = (filter) => {
//   return {
//     type: 'FILTER',
//     payload: filter,
//   };
// };

export const { filterBy } = filterSlice.actions;
export default filterSlice.reducer;
