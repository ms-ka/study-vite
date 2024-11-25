// импорт хука useState()
import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import "./lesson04.css";

function Lesson04(): JSX.Element {
  // * изменение обычных переменных в React не приведет к обновлению компонента 🫤

  // let count = 0;

  // const handleMinus = () => {
  //   count = count - 1
  //   console.log(count)
  // }

  // const handlePlus = () => {
  //   count = count + 1
  //   console.log(count)
  // }

  // * забираем значения из хука долго и в три строчки (так мы делать не будем)

  // let state = useState(0)
  // let count = state[0]
  // let setCount = state[1]

  // * функция useState принимает начальное значение
  // * возвращает массив из двух элементов, которые мы забираем через деструктуризацию
  // 1. - переменная состояния с текущим значением
  // 2. - функция для изменения этой переменной

  // * пример с счетчиком (числовое значение)
  const [count, setCount] = useState(0);

  // * пример со строкой
  const [name, setName] = useState<string>("John");

  // * пример с булевым значением
  // const [toggle, setToggle] = useState(true)

  // * пример с массивом
  const [items, setItems] = useState<number[]>([1, 2, 3]);

  const handleMinus = () => {
    setCount(prev => prev - 1);
  };

  const handlePlus = () => {
    setCount(prev => prev + 1);
  };

  // * обработчики для практики useState()

  // изменение строки
  const handleUpperCase = ():void => {
    setName(prev => prev.toUpperCase());
  };

  // изменение массива
  // * состояние нельзя мутировать
  // поэтому мы передаем в функцию сеттер новое значение
  // в случаем с массивом мы используем spread оператор для копии текущего значения массива

  const handleChangeArray = ():void => {
    // удалили элемент по индексу
    setItems(items.filter((_,index) => index !== 0))
    // дописали элемент в начало
    setItems(items => [4, ...items])
  };

  console.log(items)

  return (
    <div className="lesson-container">
      <h2>Lesson 04</h2>
      <p>React hook useState()🪝</p>
     
      <p>
        Чтобы хранить и отображать на странице изменяющиеся данные в React мы используем 'состояние'
        (state) - это особая переменная в React, которая приходит в результате выполнения функции
        useState(). Если это переменная изменится - это будет сигнал к обновлению страницы.
      </p>
      <p>
        Чтобы изменить значения состояния мы используем функцию, которая приходит вторым элементом в
        массиве из useState() - она перезаписывает состояние. Изменение состояния вызывает ререндр с
        новыми данными
      </p>
      <div className="state-practice">
      <h4>UseState practice:</h4>
        <p>Изменение строки:</p>
        <div>
          <span>{name}</span>
          <MyButton func={handleUpperCase} text={"Change name"} isDanger={false} />
        </div>
        <p>Изменение массива:</p>
        <div>
          <span>{items[0]}, {items[1]}, {items[2]}</span>
          <MyButton func={handleChangeArray} text={"Change first number"} isDanger={false} />
        </div>
      </div>
    </div>
  );
}

export default Lesson04;
