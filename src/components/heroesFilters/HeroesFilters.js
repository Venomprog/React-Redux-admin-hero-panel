import { useDispatch } from "react-redux";
import { filterSetActive } from "./filterSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchFilters } from "./filterSlice";

const HeroesFilters = () => {
    const {filters, activeFilter} = useSelector(state => state.filters);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilters())

    }, [])


    const onFilter = (element) => {
        dispatch(filterSetActive(element))
    }

    const renderFiltersList = (arr) => {
        if (arr.length === 0){
            return
        }
        
        return arr.map((item, i) => {
            const additionalClass = item.element === activeFilter ? 'active' : null
            return <button key={i} className={`${item.classes}  ${additionalClass}`} onClick={() => onFilter(item.element)} >{item.name}</button>
        })
    }

    const elements = renderFiltersList(filters);


    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;