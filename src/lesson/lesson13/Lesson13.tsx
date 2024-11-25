import * as Yup from 'yup'
import MyButton from '../../components/myButton/MyButton'
import styles from './lesson13.module.css'
import { useFormik } from 'formik';

interface IFormValues {
    model: string
    creator: string
    email: string
}

const schema = Yup.object().shape({
    model: Yup
    .number()
    .typeError('model is a number')
    .required('model is required')
    .integer('model is integer')
    .min(1, 'model should by more than 0')
    .max(1000, 'model should by less than 1000'),
    creator: Yup
    .string()
    .required('creator is required'),
    email: Yup
    .string()
    .email('incorrect email format')
    .max(50, 'email should by less than 50 symbols')
    .required('email is required')
 });

export default function Lesson13() {

  const formik =useFormik({
    initialValues: {
    model: '',
    creator: '',
    email: ''
    } as IFormValues,
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values: IFormValues, {resetForm}) => {
    console.log(values);
    resetForm();
    }
  });

  return (
    <div className="lesson-container">
      <h2>Lesson 13: Yup validation</h2>
      <p>Robot form 🤖</p>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm} action="">
        <input value={formik.values.model} onChange={formik.handleChange} name="model" type="text" placeholder="robot model" />
        <input value={formik.values.creator} onChange={formik.handleChange} name="creator" type="text" placeholder="creator name" />
        <input value={formik.values.email} onChange={formik.handleChange} name="email" type="text" placeholder="company email" />
        <MyButton type="submit" text="send" />
      </form>
      <span className='{styles.error}'>{formik.errors.model}</span>
      <span className='{styles.error}'>{formik.errors.creator}</span>
      <span className='{styles.error}'>{formik.errors.email}</span>
    </div>
  );
}