import { inputDataUserName } from "./slices/formSlice/formSlice";
import { todoDataStore } from "./slices/todoSlice/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({
    reducer: {
        inputDataUserName: inputDataUserName.reducer,
        todoDataStore: todoDataStore.reducer,
    }
});
