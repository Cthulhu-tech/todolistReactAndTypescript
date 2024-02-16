import { useRouteError } from "react-router-dom";
import { ErrorComponentText } from "./type";
import './ErrorPage.scss';

export const ErrorPage = () => {
    const error = useRouteError() as ErrorComponentText;

    return <div className="wrapper-error">
        <h1 className="error__title">Ooops!</h1>
        <p className="error__text">
            <i>{error?.statusText || error?.message}</i>
        </p>
    </div>
}