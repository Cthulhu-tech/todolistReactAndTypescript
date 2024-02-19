import { promiseComponentFunction } from "../utils/promiseComponentHandler/promiseComponentHandler";
import { Loading } from "../components/preloaderComponentsGroup/LoadingComponent/LoadingComponent";
import { AccessComponent } from "../components/accessComponent/accessComponent";
import { todoLoader } from "./loader/todoLoader/todoLoader";
import { ErrorPage } from "../view/errorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import { startPageType, todoPageType, todoSelectType, todoUpdateType } from "./type";

const TodoSelect = lazy(() => promiseComponentFunction<todoSelectType>(import('../components/todoComponentsGroup/selectTodo/selectTodo')));
const TodoUpdate = lazy(() => promiseComponentFunction<todoUpdateType>(import('../components/todoComponentsGroup/updateTodo/updateTodo')));
const StartPage = lazy(() => promiseComponentFunction<startPageType>(import('../view/startPage/startPage')));
const TodoPage = lazy(() => promiseComponentFunction<todoPageType>(import('../view/todoPage/todoPage')));

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Suspense fallback={<Loading/>}>
        <StartPage/>
      </Suspense>,
      errorElement: <ErrorPage />,
    },
    {
      path: "todo",
      loader: todoLoader,
      element: <AccessComponent>
          <Suspense fallback={<Loading/>}>
            <TodoPage/>
          </Suspense>
        </AccessComponent>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ":id",
          element: <Suspense fallback={<Loading/>}>
            <TodoSelect/>
          </Suspense>,
        },
        {
          path: "update",
          element: <Suspense fallback={<Loading/>}>
            <TodoUpdate/>
          </Suspense>,
        },
      ],
    },
]);
