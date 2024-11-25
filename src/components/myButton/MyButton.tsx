//Guzik jest komponentem który wykonuje określoną akcję po kliknięciu , w zależności od funkcji przekazanej przez props

//opcja bez strukturyzacji z obiektem props

//W tej wersji props jest używany jako obiekt, a wszystkie właściwości są odwoływane przez props.klucz.

// import './myButton.css'
// function MyButton(props){
//     console.log(props)
//     return <button onClick={props.func}
//     className='my-button'> {props.text} </button>
// }
// export default MyButton;

//wariant z destrukturyzacją
//W tej wersji props jest destrukturyzowany bezpośrednio w parametrach funkcji.
//używamy znaczenie wg kluczy, używamy klucze obiektu
import styles from './myButton.module.css';
import cn from 'classnames';

//pamiętać o rozpoczęciu interfejsu z I dodaniu słowa Props w nazwie komponenta
interface IMyButtonProps {
  text?: string 
  isDanger?: boolean
  type?: 'button'| 'submit' | 'reset'
  func?:() => void
}

const handleDefaultClick = () => {
  //console.log("default click!");
};

//Jeśli funkcja kliknięcia (func) nie zostanie przekazana, domyślnie
//wywoła handleDefaultClick, który po prostu loguje „default click” do konsoli.

function MyButton({
  func = handleDefaultClick,
  isDanger = true,
  text = "Lets start",
  type = "button" }:IMyButtonProps) { //dodaję props type
  //Ustawiono domyślne wartości dla func, isDanger i text, co czyni kod bardziej przejrzystym i unika konieczności obsługi undefined wartości.

  return (
    // <button
    //   onClick={func}
    //   className={`my-button ${isDanger ? "btn-danger" : "btn-primary"}`}
    //   type = {type} //dodaję atrybut type
    // >
    //   {text}
    // </button>
    <button type={type} onClick={func}
    className={cn(styles.myButton, {
      // если isDanger будет true
      // мы добавим styles.btnDanger
      // если false - класс добавлен не будет
      [styles.btnDanger]:isDanger,
      // каждое следующее условие мы указываем через запятую
      [styles.btnPrimary]:!isDanger
    })}>
      {text}
    </button>
  );
}
export default MyButton;
