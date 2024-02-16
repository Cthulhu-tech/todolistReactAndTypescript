import { TodoType } from "../../store/slices/todoSlice/type";
import { StoreType } from "../../store/type";
import { useSelector } from "react-redux";
import { Outlet } from "react-router"

const TodoPage = () => {

    const value = useSelector<StoreType, TodoType[]>((state) => state.todoDataStore.data);

    return <main>
        <aside>
            aside
        </aside>
        <section className="wrapper-todo">
            <Outlet/>
        </section>
    </main>
}

export default TodoPage;
