import styles from './lesson12.module.css'
import MyButton from '../../components/myButton/MyButton'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

//3. tworzę interface wraz ze znaczeniami w formularzu
interface IFormValues{
  firstName: string
  lastName: string
  email: string
}

export default function Lesson12(){

//dodaję Hook który zajmuje się nawigacją, do zmiennej przekazuję rezultat
const navigate = useNavigate()  

//1. uaktywniam funkcję Hook useFormik, w której tworzę obiekt 'formik' wewnątrz komponenta 'Lesson12' z jego ustawieniami, rezultat jest postawiony w miejsce zmiennej i dalej używany

const formik = useFormik({
//2. poniżej tworzę  obiekt z dwoma kluczami, którym przekazuję początkowe znaczenie initialValues i onSubmit
//tutaj będą początkowe znaczenia w formularzu
initialValues: {
  //tutaj już wprowadziłam odpowiedz w formularzu
  firstName: 'your name',
  //tu użytkownik wpisuje znaczenie w formularzu
  lastName: '',
  email: ''
} as IFormValues, 
// zamiast początkowej wartości pojawi się znaczenie z formularza po naciśnięciu guzika
onSubmit:(values: IFormValues, {resetForm}) => {
console.log(values);
resetForm();
//po wypełnieniu formularza przenosi na ustaloną w navigate stronę, trzeba wpisać jej ścieżkę
//navigate('/')
 navigate('../lesson-1')
}
});

//podłączam obiekt aby go użyć
  return (
    <div className='lesson-container'>
        <h2>Formik</h2> 
        <p>Formik to biblioteka do pracy z formami w React.</p>
        {/* onSubmit={formik.handleSubmit}: Obsługuje wysyłanie formularza. */}
    <form onSubmit={formik.handleSubmit} className={styles.form}>
       {/* input to dane wprowadzane przez użytkownika */}
        <input onChange={formik.handleChange} value={formik.values.firstName} name='firstName' type='text' placeholder='first name'/>
        {/* onChange={formik.handleChange}: Rejestruje zmiany w polach i aktualizuje stan Formika. */}
        <input onChange={formik.handleChange} value={formik.values.lastName} name='lastName' type='text' placeholder='last name'/>
        {/* value= sprawdzanie poprawności wartości */}
        <input onChange={formik.handleChange} value={formik.values.email} name='email' type='email' placeholder='e-Mail'/>
        <MyButton type='submit' text='send'/>
      </form>
      <h3 style={{ marginTop: '15px' }}>Что нужно сделать чтобы форма заработала:</h3>
      <ol>
        <li>Установили formik через 'npm i formik'</li>
        <li>Создали переменную formik в которую присвоили результат вызова функции useFormik() с настройками в объекте</li>
        <li>В объекте два обязательных ключа: initialValues (начальные значения), onSubmit (функция, которая вызовется при нажатии на кнопку в форме)</li>
        <li>Для form добавляем в onSubmit formik.handleSubmit</li>
        <li>Для input добавляем в onChange formik.handleChange</li>
        <li>Для input в value добавляем его значение через formik.values</li>
        <li>Для input в поле name должен быть тот же ключ, что и в initialValues</li>
      </ol>
    </div>
  );
// useFormik: Hook z biblioteki Formik, który upraszcza zarządzanie stanem i obsługą formularzy w React.
// useNavigate: Hook z React Router, który umożliwia programową nawigację między stronami.
// Hook React Router używany do nawigacji po wypełnieniu formularza.
// Umożliwia przeniesienie użytkownika na inną stronę po zakończeniu akcji.
}
