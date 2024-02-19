import { createTodo } from "../../../utils/createTodo/createTodo";
import { TodoType } from "../../../store/slices/todoSlice/type";
import { defer } from "react-router";

export const todoLoader = async () => {
    const data = new Promise<TodoType[]>((resolve) => {
        setTimeout(() => {
            resolve(createTodo());
        }, 3000);
    });

    return defer({
        data,
      });
}
