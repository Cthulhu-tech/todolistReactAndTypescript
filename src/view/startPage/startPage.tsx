import { InputForm } from "../../components/InputComponentsGroup/inputComponent/inputComponent";
import { Button } from "../../components/InputComponentsGroup/buttonComponent/buttonComponent";
import { InputHandlerType } from "../../components/InputComponentsGroup/inputComponent/type";
import { updateValue } from "../../store/slices/formSlice/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StoreType } from "../../store/type";
import { useState } from "react";
import './startPage.scss';

const StartPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const value = useSelector<StoreType, string>((state) => state.inputDataUserName.name);

    const inputValueHandler: InputHandlerType = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => void dispatch(updateValue(event.target.value));

    const actionHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(loading) return;
        setLoading((prevState) => prevState = true);
        setTimeout(() => {
            navigate('/todo');
            setLoading((prevState) => prevState = false);
        }, 1500);
    }

    return <div className="wrapper-form">
        <form className="form" onSubmit={actionHandler}>
            <div className="form__input">
                <InputForm
                    name="user_login"
                    placeHolder="You name"
                    title={`You name: ${value}`}
                    inputValueHandler={inputValueHandler}
                    value={value}
                />
            </div>
            <div className="form__button">
                <Button
                    title='Submit'
                    disable={value.length <= 0 || loading}
                />
            </div>
        </form>
    </div>
}

export default StartPage;
