import { NoDataComponent } from "../../preloaderComponentsGroup/NoDataComponent/NoDataComponent";
import { InputForm } from "../../InputComponentsGroup/inputComponent/inputComponent";
import { TodoListType, TodoType } from "../../../store/slices/todoSlice/type";
import { ConvertDate } from "../../../utils/date/convertDate";
import { StoreType } from "../../../store/type";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import './updateTodo.scss';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Button } from "../../InputComponentsGroup/buttonComponent/buttonComponent";
import { updateValueTodo } from "../../../store/slices/todoSlice/todoSlice";

const UpdateTodo = () => {
    const dispatch = useDispatch();
    const value = useSelector<StoreType, TodoListType<TodoType>>((state) => state.todoDataStore);
    const [data, setData] = useState<TodoType | undefined>(() => {
        if(value.select) {
            return value.select;
        } else {
            if(value.data && value.data.length) {
                return value.data[0];
            } else {
                return undefined;
            }
        }
    });

    const updateHandler = (event: React.ChangeEvent<HTMLInputElement>) => setData((prevState) => {
        if(!prevState) return undefined;
        return {
            ...prevState,
            [event.target.name]: event.target.value,
        }
    });
    const timeHandler = (date: Date | null) => setData((prevState) => {
        if(!prevState || !date) return undefined;
        return {
            ...prevState,
            time: new Date(date).getTime(),
        }
    });

    const updateHandlerChecked = (event: React.ChangeEvent<HTMLInputElement>) => setData((prevState) => {
        if(!prevState) return undefined;
        return {
            ...prevState,
            checked: event.target.checked,
        }
    });

    const updateHandlerTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(data) {
            dispatch(updateValueTodo(data));
        }
    }

    if(!data) return <NoDataComponent message="No select todo" />

    return <>
        <form
            onSubmit={updateHandlerTodo}
            className='todo-select-data'
            key={data.id}
        >
            <section className="todo-update">
                <label>
                    <span>Checked: </span>
                    <input
                        type="checkbox"
                        checked={data.checked}
                        onChange={updateHandlerChecked}
                    />
                </label>
                <label>
                    <span>Message: </span>
                    <InputForm
                        name='message'
                        inputValueHandler={updateHandler}
                        value={data.message}
                    />
                </label>
                <label>
                    <span>Title: </span>
                    <InputForm
                        name='title'
                        inputValueHandler={updateHandler}
                        value={data.title}
                    />
                </label>
                <div className="wrapper-date-picker">
                    <span>Date: </span>
                    <DatePicker
                        showTimeSelect
                        selected={new Date(data.time)}
                        onChange={timeHandler}
                        dateFormat="MM/dd/yyyy h:mm aa"
                    />
                </div>
                <Button
                    title={`update - ${data.id}`}
                    disable={false}
                />
            </section>
        </form>
    </>
}

export default UpdateTodo;
