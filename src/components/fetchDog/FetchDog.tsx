import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import styles from "./fetchDog.module.css"

// протипизировали данные с сервера
interface IDogData {
  message: string;
  status: string;
}

export default function FetchDog(): JSX.Element {

  // завели state для изменяемых данных
  const [dogImg, setDogImg] = useState<string>('');

  // функция обновляющая state
  //Wywołanie fetch z adresem URL — fetch wysyła żądanie do określonego URL. Domyślnie wysyła zapytanie GET.
  //Obsługa odpowiedzi — Pierwszy .then zwraca odpowiedź (tzw. obiekt Response), który może być przetworzony na JSON lub inny format.
  //Dalsze operacje — Drugi .then umożliwia pracę z danymi po przetworzeniu.
  const fetchDog = (): void => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json()) // Konwersja odpowiedzi na JSON
      .then((data: IDogData): void => { // Obsługa danych
        setDogImg(data.message);
      });
  };

  // ! fetchDog(); - вызов функции изменяющей state без useEffect() вызовет бесконечный ререндр компонента

  // * вызов внутри useEffect случится только при начале жизненного цикла (один раз за цикл)
  useEffect(() => {
    fetchDog();
  }, []);
// Pusty array, więc kod uruchomi się tylko raz po załadowaniu komponentu.

return (
  <div className="lesson-container">
    {dogImg && (
      <>
        <h3>Fetch dog 🐶</h3>
        <div className={styles.imgWrapper}>
          <img src={dogImg} alt="" />
        </div>
        <MyButton func={fetchDog} text={'update dog'} />
      </>
    )}

  </div>
);
}