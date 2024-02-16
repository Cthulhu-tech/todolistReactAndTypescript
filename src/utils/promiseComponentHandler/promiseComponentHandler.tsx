import { IFunctionComponentPromise } from "./type";

export const promiseComponentFunction: IFunctionComponentPromise =  <T,>(_import: Promise<T>) => {
    const randomInterval = Math.floor(Math.random() * (3000 - 500 + 1) + 500);
    const promiseComponent = new Promise<T>((resolve) => {
      setTimeout(() => {
        resolve(_import);
      }, randomInterval);
    }).then((element) => element);
    return promiseComponent;
  }