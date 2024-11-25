import React, { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import MyButton from "../myButton/MyButton";
import styles from "./catFact.module.css";

//tworzę komponent, który podczas ładowania strony wysyła zapytanie
//podczas naciśnięcia guzika pokazuje dane w postaci faktów o kocie

interface ICatFact {
  fact: string;
}

export default function CatFact(): JSX.Element {
  //3. Tutaj będą się zapisywały fakty ze strony
  const [facts, setFacts] = useState<string[]>([]); // massiv stringów

  //7. Loader - przełącznik informujący o ładowaniu
  const [loading, setLoading] = useState<boolean>(true);

  //1. tutaj funkcja otrzymuje fakt o kocie z API
  const fetchCatFact = async (): Promise<void> => {
    setLoading(true); //Loader jest wyświetlany, gdy loading jest true.
    const res = await fetch("https://catfact.ninja/fact");
    const data: ICatFact = await res.json();

    //4. Zapis danych w zmiennej stanu, aby móc później używać i zmieniać
    setFacts((prevFacts) => [...prevFacts, data.fact]); // Dodanie nowego faktu
    setLoading(false);
  };

  //2. tutaj funkcja zwraca się do serwera w useEffect poprzez pusty massiv, aby funkcja uruchomiła się tylko raz
  useEffect(() => {
    fetchCatFact();
  }, []);

  // Funkcja obsługująca przycisk GET MORE INFO
  const handleGetCat = () => {
    setTimeout(() => {
      fetchCatFact();
    }, 1000);
  };

  // Funkcja obsługująca przycisk DELETE ALL DATA
  const handleDeleteAll = () => {
    setFacts([]);
  };

  return (
    <div className={styles.catContainer}>
      <h3>Cat Fact 🐱</h3>
      {/* 6. добавили в верстку картинку и кнопу с обработчиком onClick для функции */}
      <MyButton text="Get more info" func={handleGetCat} />
      {/* если в loading true мы покажем Loader, если false -  */}
      {facts.length > 0 && (
        <MyButton text="delete all data" func={handleDeleteAll} />
      )}

      {loading ? (
        <Loader />
      ) : (
        //Zastosowano map, aby wyświetlić każdy fakt w osobnym p
        <>
          {facts.length > 0 && (
            <div className={styles.catWrapper}>
              {facts.map((fact, index) => (
                <p key={index}>{fact}</p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
