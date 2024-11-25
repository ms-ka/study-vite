import { useFormik } from "formik";
import { useState } from "react";
import styles from './formGender.module.css'
//ręczny import z nadaniem nazwy dla Hooka Yup
import * as Yup from 'yup'

//wysyła imię na API https://api.genderize.io i pokazuje wynik na stronie

//2. tworzę interface, interface to jest mój klucz
interface IFormData {
  name: string;
}

interface IGenderData {
  count: number,
  name: string,
  gender: string,
  probability: number;
}

//tutaj tworzę walidacaję, czyli sprawdzam czy użytkownik dał poprawne wartości
//tworzę obiekt który ma metodę shape, który sprawdza, czyli daje kluczą zasady sprawdzania
const schema = Yup. object().shape({
//tutaj sprawdzam konkretny klucz name
  name: Yup
  .string()
  .typeError('only letters are allowed')
  .required('please fill out this field')
  .min(1, 'must be larger than 0')
  .max(20, 'must be less than 0')
  .matches(/^[A-Za-z\s]+$/, "The name can only contain letters and spaces.")
  .matches(/^[A-Z]/, "The name must start with a capital letter.")
}
)

export default function FormGender() {
  const [genderData, setGenderData] = useState<IGenderData>({
    count: 0,
    name: '',
    gender: '',
    probability: 0
  });

//1. na początku tworzę obiekt formik z funkcji useFormik wraz z kluczami
const formik = useFormik({
  //początkowe znaczenie to klucz initialValues, IFormData to jego znaczenie
  initialValues: {
    name: ""
  } as IFormData,
  //wyłączam walidację po zmianie tekstu
  validateOnChange: false,
  //podłączam zmienną 'schema' z powyżej ustalonymi warunki walidacji poprzez klucz 'validationSchema'
  validationSchema: schema,
  //aktywność którą uaktywnimy po naciśnięciu guzika 'submit'
  onSubmit: (values: IFormData, { resetForm }) => {
    resetForm();
    fetchGender(values.name);
  }
});
  //odpowiedz stąd zapisywana jest w const genderData
  //await używa się wewnątrz funkcji asychronicznej, umożliwia wstrzymanie wypełnienia funkcji aż do zakończenia promise, po czym zwraca rezultat
  const fetchGender = async (name: string) => {
    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await response.json();
    setGenderData(data);
  };

    return (
      <div className="lesson-container">
        <h5>Know your gender ✨</h5>
        <form className={styles.formGender} onSubmit={formik.handleSubmit}>
        <label className={styles.error}>{formik.errors.name}</label>
          <input placeholder="type your name" onChange={formik.handleChange} value={formik.values.name} name="name" type="text" />
          <button type="submit">send request</button>
        </form>
  
        {genderData.name && (
          <p>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '💁‍♀️'} {genderData.probability * 100}%</p>
        )}
      </div>
    );
  }
