import { TodoListType, TodoType } from "./slices/todoSlice/type";
import { FormSliceType } from "./slices/formSlice/type";

export type ActionType<T> = {
    readonly payload: T;
    readonly type: string;
}

export type StoreType = {
    inputDataUserName: FormSliceType;
    todoDataStore: TodoListType<TodoType[]>;
}
