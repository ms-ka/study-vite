import { useParams } from "react-router-dom";
import style from "./storePage.module.css";
import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import { IStoreProduct } from "../../types/types";

//tworzę początkowe znaczenie dla useState, należy dodać zmienne za pomocą QuickFix ->Add missing properties
const initialState:IStoreProduct = {
  id: 0,
  title: "",
  description: "",
  category: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  tags: [],
  brand: "",
  sku: "",
  weight: 0,
  dimensions: {
    width: 0,
    height: 0,
    depth: 0
  },
  warrantyInformation: "",
  shippingInformation: "",
  availabilityStatus: "",
  reviews: [],
  returnPolicy: "",
  minimumOrderQuantity: 0,
  meta: {
    createdAt: "",
    updatedAt: "",
    barcode: 0,
    qrCode: ""
  },
  images: [],
  thumbnail: ""
}

export default function StorePage() {
  const { id } = useParams();

  //tutaj używam inicjalne znaczenie dla state, które z czasem zapełniam danymi
  const [product, setStoreProduct] = useState<IStoreProduct>(initialState);

  const getStoreProduct = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data= await res.json()
    setStoreProduct(data)
  }

  //jako ze otrzymujemy id jako string, trzeba tutaj poinformowac useEffect, ze id to string
  useEffect(() => {
    getStoreProduct(id as string);
  }, [id]);

  //wyświetlenie wybranych danych obiektu
  return (
    <div className={style.container}>
      {product ? (
        <>
          <h1>ID: {product.id}  {product.title}</h1>
          <div className={style.imageContainer}>
            {product.images.map((img, index) => (
              <img
                key={index}
                width={200}
                src={img}
                alt="preview img"
              />
            ))}
            
          </div>

          <span className={style.price}>{product.price} € </span>
          <div className={style.description}>{product.description}</div>
          <MyButton text="Buy" />
        </>
      ) : (
        
        // если данных нет сообщаем пользователю
        <h2> Sorry, no such product 👾 </h2>
      )}
    </div>
  );
}
