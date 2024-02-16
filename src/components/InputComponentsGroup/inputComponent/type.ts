export type InputHandlerType = (event: React.ChangeEvent<HTMLInputElement>) => {
    payload: any;
    type: string;
}

export type InputType = {
    inputValueHandler: InputHandlerType,
    value: string,
    placeHolder?: string,
    title?: string,
}
