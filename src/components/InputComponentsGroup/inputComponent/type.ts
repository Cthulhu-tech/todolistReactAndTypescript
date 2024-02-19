export type InputHandlerType = (event: React.ChangeEvent<HTMLInputElement>) => void

export type InputType = {
    inputValueHandler: InputHandlerType;
    value: string;
    name: string;
    placeHolder?: string;
    title?: string;
}
