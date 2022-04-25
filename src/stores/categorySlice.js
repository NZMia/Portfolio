import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../common';

export const fetchAllCategory = createAsyncThunk(
  'category/fetchAll',
  async () => {
    try {
      const res = await api.get(`/category`);
      return res.data;
    } catch (err) {
      throw Error(err.message);
    }
  }
);
export const categorySlice = createSlice({
  name: 'category',

  initialState: {
    categoryItems: [
      {
        title: 'CSS',
        icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        id: 1,
      },
      {
        title: 'JavaScript',
        icon: 'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg',
        id: 2,
      },
      {
        title: 'React JS',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        id: 3,
      },
      {
        title: 'Webpack',
        icon: 'https://raw.githubusercontent.com/webpack/media/master/logo/icon.png',
        id: 4,
      },
      {
        title: 'Redux Toolkit',
        icon: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
        id: 5,
      },
      {
        title: 'Test Library',
        icon: 'https://testing-library.com/img/octopus-64x64.png',
        id: 6,
      },
    ],
  },

  extraReducers: {
    [fetchAllCategory.fulfilled]: (state, { payload }) => {
      state.categoryItems = payload;
    },
  },
});

export default categorySlice.reducer;
