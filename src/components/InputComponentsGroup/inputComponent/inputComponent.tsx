import { InputType } from './type';
import './inputComponent.scss';

export const InputForm = (props: InputType) => {

    return <div className="wrapper-input">
        <span className='input-title'>
            {props.title}
        </span>
        <input
            className="input"
            type="text"
            value={props.value}
            onChange={props.inputValueHandler}
            placeholder={props.placeHolder}
        />
    </div>
}
