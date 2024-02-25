import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  activeFilter: 'all',
  filter: [],
  filterLoadingStatus: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersFetched: (state, action) => {
      state.filterLoadingStatus = 'idle';
      state.filters = action.payload;
    
    },
    filtersFetchingError: state => {
      state.filterLoadingStatus = 'error'
    },
    filterSetActive: (state, action) => {
      state.activeFilter = action.payload
    }
  }
});

const {actions, reducer} = filtersSlice;

export default reducer;

export const {
  filtersFetched,
  filterSetActive,
  filtersFetchingError,
} = actions
