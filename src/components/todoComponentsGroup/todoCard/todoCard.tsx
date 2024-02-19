import { ConvertDate } from '../../../utils/date/convertDate';
import { TodoTypeInCardComponent } from './type';
import { Link } from 'react-router-dom';
import './todoCard.scss';

export const TodoCard = (props: TodoTypeInCardComponent) => {

    const converDate = ConvertDate(props.data.time);

    return <Link to={`${props.data.id}`}>
        <article
            className={
                props.data.checked ?
                'todo checked' :
                'todo'
            }
        >
            <p className='todo__title'>{props.data.title}</p>
            <div className='wrapper-todo__time'>
                <label>
                    {converDate}
                </label>
            </div>
        </article>
    </Link>
}
