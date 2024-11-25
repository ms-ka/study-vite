import Message from '../message/Message';
import style from './card.module.css'

function Card() {
    return (
      <div className={style.cardWrapper}>
        <p className={style.fullNameTitle}>Użytkownik anonimowy</p>
        <Message/>
      </div>
    );
  }
  export default Card;