import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { heroesFetch } from '../../actions';

import { heroesFetched } from '../heroesList/heroesSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

const HeroesList = () => {

    const filteredHeroesSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.heroes.heroes,
        (filter, heroes) => {
            if (filter === 'all'){
                return heroes
            } else {
                return heroes.filter(item => item.element === filter)
            }
        }
    )

    const filteredHeroes = useSelector(filteredHeroesSelector)
    
    const {heroes, heroesLoadingStatus} = useSelector(state => state.heroes);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(heroesFetch(request))
        // eslint-disable-next-line
    }, []);

    const onDeleteHero = (id) => {
        const newArr = heroes.filter(item => item.id !== id);
        dispatch(heroesFetched(newArr));
    }

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }


    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem onDeleteHero={() => onDeleteHero(id)} key={id} {...props}/>
        })
    }


    const elements = renderHeroesList(filteredHeroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;