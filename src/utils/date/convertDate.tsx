import { CustomDateType } from "./type";

const converDateInNumber = (valueDate: number) => valueDate > 9 ? `${valueDate}` : `0${valueDate}`;

export const ConvertDate = (_date: CustomDateType) => {
    const date = new Date(_date);

    const month  = (date.getMonth() + 1);
    const min = converDateInNumber(date.getMinutes());
    const hours = converDateInNumber(date.getHours());

    return `${converDateInNumber(date.getDate())}-${converDateInNumber(month)}-${date.getFullYear()} ${hours} : ${min}`;
};
