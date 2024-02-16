export type TodoType = {
    message: string;
    time: string;
    title: string;
    id: number;
};

export type TodoListType<T> = {
    data: T;
};
