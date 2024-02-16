import { ButtonType } from "./type";
import './buttonComponent.scss';

export const Button = (props: ButtonType) => {
    return <button
        className="button"
        disabled={props.disable}
    >
        {props.title}
    </button>
}