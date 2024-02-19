import { CustomDateType } from "./type";

const converDateInNumber = (valueDate: number) => valueDate > 9 ? `${valueDate}` : `0${valueDate}`;

export const convertDateFromDateInput = (_date: CustomDateType) => {
    const date = new Date(_date);

    const month  = (date.getMonth() + 1);

    return `${date.getFullYear()}-${converDateInNumber(month)}-${converDateInNumber(date.getDate())}`;
};