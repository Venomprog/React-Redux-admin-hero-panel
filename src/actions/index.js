import { heroesFetched, heroesFetchingError, heroesFetching } from "../components/heroesList/heroesSlice"
import { filtersFetched,filtersFetchingError } from "../components/heroesFilters/filterSlice";

export const heroesFetch = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}
export const filtersFetch = (request) => (dispatch) => {
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
        .catch(() => dispatch(filtersFetchingError()))
}
