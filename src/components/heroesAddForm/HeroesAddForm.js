import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { heroesFetched } from "../../actions";

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать (ГОТОВО)
// в общее состояние и отображаться в списке + фильтроваться (ГОТОВО)
// Уникальный идентификатор персонажа можно сгенерировать через uiid  (ГОТОВО)
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [element, setElement] = useState('');

    const {heroes} = useSelector(state => state);
    const dispatch = useDispatch();

    const changeName = (e) => {
        const value = e.target.value;
        setName(value);
    }

    const changeDescription = (e) => {
        const value = e.target.value;
        setDescription(value)
    }

    const changeElement = (e) => {
        const value = e.target.value;
        setElement(value)
    }


    const onSentForm = (e) => {
        e.preventDefault();
        const newId = uuidv4();
        const newHero = {
            id: newId,
            name: name,
            description: description,
            element: element
        }

        dispatch(heroesFetched([...heroes, newHero]))
    }


    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSentForm}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={name}
                    onChange={changeName}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={description}
                    onChange={changeDescription}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={changeElement}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit"  className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;