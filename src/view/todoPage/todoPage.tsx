import { NoDataComponent } from "../../components/preloaderComponentsGroup/NoDataComponent/NoDataComponent";
import { AsideComponent } from "../../components/asideComponent/asideComponent";
import { Await, Outlet, useLoaderData } from "react-router-dom";
import { TodoType } from "../../store/slices/todoSlice/type";
import './todoPage.scss';

const TodoPage = () => {

    const data = useLoaderData() as {data: TodoType[]};

    return <Await
        resolve={data.data}
        errorElement={<NoDataComponent message="Error" />}
    >{(data) => <>
        <AsideComponent data={data}/>
        <main className="main">
            <section className="wrapper-todo">
                <Outlet/>
            </section>
        </main>
    </>}
    </Await>
}

export default TodoPage;
