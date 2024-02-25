import { filtersFetched,filtersFetchingError } from "../components/heroesFilters/filterSlice";

export const filtersFetch = (request) => (dispatch) => {
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
        .catch(() => dispatch(filtersFetchingError()))
}
