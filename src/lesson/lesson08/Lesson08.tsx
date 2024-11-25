import { useState, useEffect } from "react";
import MyButton from "../../components/myButton/MyButton";
import Counter from "../../components/counter/counter";
import FetchDog from "../../components/fetchDog/FetchDog";

export default function Lesson08(): JSX.Element {
  console.log("render lesson08!");

  const [toggle, setToggle] = useState(false);

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  useEffect(() => {
    console.log("render useEffect()");
  }, []);

  return (
    <div className="lesson-container">
      <h2>Lesson 08</h2>
      <p>UseEffect() hook</p>
      {/* jesli w toggle jest true to pokażemy komponent na stronie */}
      {/* Tu wyświetlany jest obecny stan toggle, który jest konwertowany do tekstu (true lub false). */}
      <span>State: {`${toggle}`}</span>
      {/* służy do zmiany wartości toggle. Po kliknięciu wywołuje funkcję handleToggle */}
      <MyButton func={handleToggle} isDanger={false} text={`change state`} />
      {/* Komponent Counter jest renderowany tylko wtedy, gdy toggle jest true. Jeśli toggle jest false, Counter nie pojawia się na stronie. */}
      {toggle && (<Counter />)}
      <FetchDog />
    </div>
  );
}
