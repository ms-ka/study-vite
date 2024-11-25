import { useEffect, useState } from "react";
import { IStoreProduct } from "../../types/types";
import styles from "./store.module.css";
import StoreCard from "../storeCard/StoreCard";
import MyButton from "../myButton/MyButton";
import { useFormik } from "formik";

//trzeba tutaj załadować dane z API, co robi useEffect
//Włączam API w przeglądarce i sprawdzam cały obiekt
//obiekt ten ma 4 klucze, należy stworzyć zapytanie asynchroniczne i przerobić je
export default function Store() {
  //zarzadza stanem wew komponentu
  //interfejs opisujacy strukture obiektu, pobierany z types
  //storeProducts zmianna stanu
  //setStoreProducts funkcja zmieniajaca stan
  //poczatkowe znaczenie useState<IStoreProduct[]>([]) z massiwu obiektow z typem IStoreProduct
  const [storeProducts, setStoreProducts] = useState<IStoreProduct[]>([]);

  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    onSubmit: (values, { resetForm }) => {
      getStoreAmountProducts(values.amount);
      resetForm();
      console.log(values);
    },
  });

  //asychroniczna funkcja żądające dane z serwera
  const getStoreProducts = async () => {
    //objekt dla odpowiedzi na fetch /zapytanie
    const res = await fetch(`https://dummyjson.com/products`);
    //otrzymanie danych, przekształcenie w json i położenie ich do data
    const data = await res.json();
    //sprawdzenie czy dziala
    setStoreProducts(data.products);
  };

  // ! функция с запросом на ограниченное число товаров
  //limit wyszukiwania produktów
  const getStoreAmountProducts = async (amount: string) => {
    const res = await fetch(`https://dummyjson.com/products?limit=${amount}`);
    const data = await res.json();
    setStoreProducts(data.products);
  };

  //wywołanie funkcji następuje wew. useEffect
  useEffect(() => {
    getStoreProducts();
    //dzieki pustemu massovovi efekt wypelni sie tylko raz
  }, []);

  return (
    // bardzo wązne aby użyć tutaj jako name 'amount' z formika
    <div className="styles.container">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="enter amount"
          value={formik.values.amount}
          // obrabia zmiany
          onChange={formik.handleChange}
          name="amount"
        />
        <MyButton text="go!" type="submit" />
      </form>

      <div className={styles.formContainer}>
        {storeProducts.map((product) => (
          <StoreCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            images={product.images}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
