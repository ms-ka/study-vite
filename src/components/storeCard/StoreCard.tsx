import MyButton from "../myButton/MyButton";
import { Link } from "react-router-dom";

//tutaj znajduje się jedna karta z towarem, która pobiera dany dzięki Propsom

//storeCard jest dzieckiem od Store

interface IStoreCardProps {
  id: number;
  title: string;
  price: number;
  images: string[];
  thumbnail: string;
}
//pokazuję jakie dane przyjdą w funkcję
export default function StoreCard({
  id,
  price,
  title,
  images,
  thumbnail,
}: IStoreCardProps) {
  return (
    //wstawienie linku dla całego obrazu, aby po kliknięciu przenieść się na inną stronę
    <Link to={String(id)}>
      <section>
        <h4>{title}</h4>
        <h5>Price: {price} € </h5>
        <div>
          <img src={thumbnail} alt="" />
        </div>
        {/* trzeba zmienić guzik na link, aby przeniósł na produkt, dodaję Link oraz info w jaki sposób rozpoznaje on produkt, tu po id */}
        <Link to={String(id)}>
          {" "}
          <MyButton isDanger={false} text=" go to the product" />
        </Link>
      </section>
    </Link>
  );
}
