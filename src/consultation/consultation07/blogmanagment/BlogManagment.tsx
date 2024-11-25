import { useState, ChangeEvent, createContext} from "react";
import style from "./blogmanagment.module.css";
import { useFormik } from "formik";
import MyButton from "../../../components/myButton/MyButton";
import Card from "../card/Card";

//! 1) импортируем createContext из react
//! 2) создаем контекст
//! 3) обернуть все необходимое где хотим использовать контекст в BlockmanagmentProvider
//! 4) в блок BlogManagementProvider.Provider нужно передать в пропсе value наш message
//! 5) использовать контекст там где нужно
//* 6) не забываем экспортировать BlogManagmentProvider

export const BlogManagmentProvider = createContext<string|undefined>(undefined)

function BlogManagment() {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const formik = useFormik({
    initialValues: { textAreaValue: "" },
    onSubmit: (values, { resetForm }) => {
      resetForm();
      setMessage(values.textAreaValue);
    },
  });

  console.log(message);

  //   const [textAreaValue, setTextAreaValue] = useState<string>("");
  //   const onChangeTextAreaMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
  //     setTextAreaValue(event.target.value);
  //   };

  return (<BlogManagmentProvider.Provider value={message} >
 <form onSubmit={formik.handleSubmit} className={style.blogManagmentWrapper}>
      <textarea
        className={style.textArea}
        name="textAreaValue"
        value={formik.values.textAreaValue}
        onChange={formik.handleChange}
        placeholder="Enter message to post"
      />
      <MyButton text="Post Message" type="submit" />
      <Card/>
    </form>
  </BlogManagmentProvider.Provider>
    
  );
}
export default BlogManagment;