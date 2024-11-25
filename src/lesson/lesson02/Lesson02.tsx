//import react from '../../assets/react.jpg';
import MyButton from '../../components/myButton/MyButton';
import './lesson02.css'
function Lesson02(): JSX.Element {
    // Tworzenie zmiennych czyli const с версткой и положить в нее тег li
    const element = <li>Element in variable</li>;
    // или мы можем создать переменную со строкой для тега в верстке
    const text = "Text for JSX tag";
    const company = "Facebook"

    interface IUser{
      firstName: string
      lastName: string
    }

    // Tworzenie Obiektu z danymi użytkownika
    const user:IUser = {
        firstName: 'Brendan',
        lastName: 'Eich'
    }
    // Funkcja służąca do zmiany danych w objekcie
    function formatUser(user: IUser) {
      return user.firstName + ' ' + user.lastName;
  }
    // zmienna, od której znaczenia zalezy wyświetlenie dancyh
    // jeśli jest zalogowany to
    const isLoggedIn = false

    return (
      <div className="lesson-container">
        <h3>Lesson 02</h3>
        <p>React JSX components</p>
        {/* zdjęcie traktowana jest jako zmienna, aby je wyświetlić trzeba użyć {}*/}
        {/* <img className='react-img' src={react} alt= "opis zdjęcia"/> */}
        <ul>
            <li>Simple text</li>
          {element}
          <li>{text}</li>
          <li>React was created by{company} </li>
          <li>{formatUser(user)} is creator of JS </li>
          {/* użycie operatora warunkowego wewnątrz taga */}
          <li>User {isLoggedIn ? 'is' : 'is NOT' } in the system </li>
        </ul>
        {/* import komponenta guzik */}
        <MyButton/>
      </div>
    );
  }
//   tworzy związek z innymi komponentami
  export default Lesson02;
//   bez wpisania export nie będzie działać