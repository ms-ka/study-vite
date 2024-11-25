import { useEffect, useState } from "react";
//useState zwraca tablicę z dwoma elementami:
//Obecna wartość stanu.
//Funkcja służąca do aktualizacji tej wartości
import MyButton from "../myButton/MyButton";
import './counter.css'

export default function Counter() {

  // * пример с счетчиком (числовое значение)
  // Deklarujemy zmienną `count` i funkcję `setCount` do jej aktualizacji.
  const [count, setCount] = useState(0);


  const handleMinus = () => {
    setCount(prev => prev - 1);
  };
  // Aktualizacja stanu

  const handlePlus = () => {
    setCount(prev => prev + 1);
  };

  // * это действие не будет срабатывать каждый раз при обновлении компонента
  
  useEffect(()=> {
    console.log('render counter!')
  }, [])
  // useEffect uruchamia się po każdej zmianie jeśli nie podamy żadnych zależności ([]).
//Tylko przy pierwszym renderze - jeśli przekazany jest pusty array [] jako drugi argument.
//Po zmianie wybranych zależności - jeśli przekazany jest array z określonymi wartościami [count]

  return (
    <div className="counter">
      <MyButton func={handleMinus} text={"-"} />
      {/* <button onClick={handleMinus}>-</button> */}
      <span>{count}</span>
      <MyButton func={handlePlus} text={"+"} isDanger={false} />
      {/* <button onClick={handlePlus}>+</button> */}
    </div>
  );
}