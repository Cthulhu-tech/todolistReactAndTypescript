import { NoDataComponent } from "../preloaderComponentsGroup/NoDataComponent/NoDataComponent";
import { setValueTodo } from "../../store/slices/todoSlice/todoSlice";
import { TodoCard } from "../todoComponentsGroup/todoCard/todoCard";
import { TodoType } from "../../store/slices/todoSlice/type";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../store/type";
import { useLayoutEffect } from "react";
import { AsideTodoType } from "./type";
import './asideComponent.scss';

export const AsideComponent = ({ data }: AsideTodoType) => {

    const dispatch = useDispatch();
    const value = useSelector<StoreType, TodoType[] | null>((state) => state.todoDataStore.data);

    useLayoutEffect(() => {
        dispatch(setValueTodo(data));
    }, [data]);

    if(!value || (value && !value.length)) return <NoDataComponent message='No Data' />

    return <aside className="aside">
        {value.map((todo) => <TodoCard key={todo.id} data={todo}/>)}
    </aside>
}