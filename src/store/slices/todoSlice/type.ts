export type TodoType = {
    checked: boolean;
    message: string;
    time: number;
    title: string;
    id: number;
};

export type TodoListType<T> = {
    data: T[] | null;
    select: T | undefined;
};
