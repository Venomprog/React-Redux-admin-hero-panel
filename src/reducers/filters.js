const initialState = {
  filters: [],
  activeFilter: 'all',
  filter: []
}

const filters = (state = initialState, action) => {
  switch (action.type) {
      case 'FILTERS_SET_ACTIVE':
          return {
              ...state,
              activeFilter: action.payload,
          }
      case 'FILTERS_FETCHED':
          return {
              ...state,
              filters: action.payload,
          }
      case 'FILTERS_FETCHING_ERROR':
          return {
              ...state,
          }
      default: return state
  }
}

export default filters;