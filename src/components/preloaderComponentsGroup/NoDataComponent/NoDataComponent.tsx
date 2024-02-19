import { NoDataComponentType } from "./type";
import './NoDataComponent.scss';

export const NoDataComponent = ({ message }: NoDataComponentType) => {

    return <section className="no-data">
        <span className="no-data__text">{message}</span>
    </section>
}