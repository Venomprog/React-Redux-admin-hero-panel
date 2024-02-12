import { useHttp } from "../../hooks/http.hook";
import { useDispatch } from "react-redux";
import { filtersFetched, filtersFetchingError, heroesFetched } from "../../actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const {filters, heroes} = useSelector(state => state);

    const {request} = useHttp();

    const dispatch = useDispatch();

    useEffect(() => {
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))
    }, []);

    const onFilter = (element) => {
        if (element !== 'all') {
            const newArr = heroes.filter(item => item.element === element)
            dispatch(heroesFetched(newArr))
        } else {
            request("http://localhost:3001/heroes")
                .then(data => dispatch(heroesFetched(data)))
            
        }
    }

    const renderFiltersList = (arr) => {
        if (arr.length === 0){
            return
        }
        
        return arr.map((item, i) => {
            return <button key={i} className={item.classes} onClick={() => onFilter(item.element)} >{item.name}</button>
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