export default function Lesson06() {
  //Tworzenie zmiennych

  //Stringi
  let username: string = "Frodo";
  username = "Pipin";
  console.log(username);

  // Cyfry
  let number: number = 42;
  number = 2 + 2;
  console.log(number);

  //Boolean
  let isAdmin: boolean = true;
  isAdmin = 2 > 3;
  console.log(isAdmin);

  //NULL/ Undefined
  let emptyValue: null = null;
  console.log(emptyValue); // gdy wynik ma być nulowy

  let empty: undefined = undefined;
  console.log(empty); //rezultat zmiennej która nie przyswoiła znaczenia, oczekujemy wyniku, ale nie został on określony

  //===========Massivy
  //massiv tylko z stringów
  const rgb: string[] = ["red", "green", "blue"];
  console.log(rgb);

  //massiv tylko z liczb
  const numbers: number[] = [1, 2, 3, 4, 5];
  numbers.push(8);
  console.log(numbers);

  //tylko dla 2 elem. massiva
  const myArray: [string, number] = ["apple", 42];
  console.log(myArray);

  // =============Obiekty

  //tworzenie obiektu

  //tutaj szablon dla obiektu, tworzę nazwę i daję mu cechy
  interface IHero {
    name: string;
    age: number;
    isDark: boolean;
  }
  //objekt dziedzicący od poprzedniego obiektu z nową cechą
  interface IMagician extends IHero {
    magic(): void; //funkcja która nic nie zwraca
  }

  interface IVillain {
    name: string;
    isVillain: true;
  }

  //a tu konkretny obiekt z użyciem szablonu
  const aragorn: IHero = {
    name: "Aragorn",
    age: 150,
    isDark: false,
  };

  const legolas: IHero = {
    name: "Legolas",
    age: 360,
    isDark: false,
  };

  const gimli: IHero = {
    name: "Gimli",
    age: 60,
    isDark: false,
  };

  const gandalf: IMagician = {
      magic: function (): void {
          console.log("You shall not pass");
      },
      name: "Gandalf",
      age: 3400,
      isDark: false
  }

  const saruman: IVillain = {
    name: "Saruman",
    isVillain: true //jeśli zmienię na false to będzie błąd, bo w interfejsie jest określony jako true
  };

  // herosi w jednym massivie
  //const heroes: IHero[] = [aragorn, legolas, gimli];
  //console.log(heroes)

  //udało się dodać Gandalfa do massiva
  //heroes.push(gandalf)
  //console.log(heroes)

  //herosi, magicy i bandziory połączone w jeden massiv
  const heroes: (IHero | IVillain)[] = [aragorn, gimli, legolas, gandalf, saruman];

  console.log(heroes)

  return (
    <div>
      <h2>Lesson 06 </h2>
      <p>React TypeScript</p>
      <p>
        Самое важное на этом уроке происходит внутри компонента в теле функции и
        в консоли браузера ⚡️
      </p>
    </div>
  );
}
