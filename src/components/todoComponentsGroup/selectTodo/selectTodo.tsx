import { NoDataComponent } from '../../preloaderComponentsGroup/NoDataComponent/NoDataComponent';
import { deleteValueTodo, selectValueTodo } from '../../../store/slices/todoSlice/todoSlice';
import { Button } from '../../InputComponentsGroup/buttonComponent/buttonComponent';
import { TodoListType, TodoType } from '../../../store/slices/todoSlice/type';
import { ConvertDate } from '../../../utils/date/convertDate';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../../../store/type';
import { useParams } from 'react-router';
import './selectTodo.scss';

import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const SelectTodo = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const value = useSelector<StoreType, TodoListType<TodoType>>((state) => state.todoDataStore);
    
    useLayoutEffect(() => {
        dispatch(selectValueTodo(Number(id)));
    }, [id]);

    const deleteHandler = () => dispatch(deleteValueTodo(Number(id)));

    if(value.select) return <section
            className='todo-select-data'
            key={value.select.id}
        >
            <h1
                className='todo-select-data__title'
            >
                {value.select.title}
            </h1>
            <div className='todo-select-data__message'>
                <span>{ConvertDate(value.select.time)}</span>
                <p>{value.select.message}</p>
            </div>
            <div className='wrapper-button'>
                <div
                    onClick={deleteHandler}
                    className='select-todo'
                >
                    <Button
                        title={`delete - ${id}`}
                        disable={false}
                    />
                </div>
                <Link
                    to={'/todo/update'}
                    className='select-todo'
                >
                    <Button
                        title={`update - ${id}`}
                        disable={false}
                    />
                </Link>
            </div>
    </section>

    return <NoDataComponent
        message={`Data not select. Todo - id ${id}`}
    />
}

export default SelectTodo;
