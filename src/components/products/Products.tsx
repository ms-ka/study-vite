import { useEffect, useState } from "react";
import styles from './products.module.css';
import { IProduct } from "../../types/types";
import { useCart } from "../../context/cartContext";
import ShopProduct from "../shopProduct/ShopProduct";
import Cart from "../cart/Cart";

export default function Products() {
    //trzeba importować IProduct z types
    // w zmiennej products przechowywane są wszystkie produkty, które użyję potem w return
    const [products, setProducts] = useState<IProduct[]>([]);
    //zwracam się do kontekstu koszyka
    const {addToCart} = useCart();

  //asychroniczne zapytanie do serwera
  const getProducts = async () => {
    //w fetch mówię jakie dane i skąd je chcę, czyli wstawiam link
    //dodaję mu zmienną 'rezultat', w której przechowywana będzie odpowiedz
    //dodaję oczekiwanie na odpowiedz await
    const response = await fetch("https://fakestoreapi.com/products");
    //tworzę zmienną 'data', w której będzie rezultat zmienionego, za pomocą metody json zapytania 'result'
    //dodaję oczekiwanie na zmianę
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };

  //tutaj już mam odpowiedz w formie 'data'
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Cart/>
      <div className={styles.shopContainer}>
        {/* map wywołuje zapytanie grupowe, dla całego massiv */}
        {products.map(product => (
          // każda karta będzie w sobie zawierała klucz z inf o produkcie
          <div>
            <ShopProduct key={product.id} price={product.price} id={product.id} title={product.title} image={product.image} />
          </div>

      ))}
    </div>
  </div>
);
}