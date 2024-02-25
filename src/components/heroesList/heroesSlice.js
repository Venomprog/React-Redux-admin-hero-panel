import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
}


const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    heroesFetching: state => {state.heroesLoadingStatus = 'loading'},
    heroesFetched: (state, action) => {
      state.heroesLoadingStatus = 'idle';
      state.heroes = action.payload;
    
    },
    heroesFetchingError: state => {
      state.heroesLoadingStatus = 'error'
    },
    heroesCreated: (state, action) => {
      state.heroes.push(action.payload)
    }
  }
});

const {actions, reducer} = heroesSlice;

export default reducer;

export const {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroesCreated
} = actions