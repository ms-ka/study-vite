import MyButton from "../../components/myButton/MyButton";
//importuję komponent guzik i uzywam go z różnymi propsami

function Lesson03(): JSX.Element {
    // definiuję funkje obsługujące akcje przycisku
    // Funkcje logują odpowiednie komunikaty do konsoli po wywołaniu/ kliknięciu guziku.
    const handleClick = () => {
        console.log('click')
    }
    const handleSubmit = () => {
        console.log('submit')
    }
    const handleReset = () => {
        console.log('reset')
    }
    return(
    <div className='lesson-container'>
        <h2>Lesson 03</h2>
        <p>React props</p>
      <div>
        <MyButton type={"button"} text={'Click me!'} func={handleClick} isDanger={true}/>
        <MyButton type={'submit'} text={'Submit'} func={handleSubmit} isDanger={false} />
        <MyButton type={'reset'} text={'Reset'} func={handleReset} isDanger={true} />
        <MyButton/> 
        {/* Każdy przycisk MyButton jest wywoływany z różnymi props, dzięki czemu każdy przycisk ma inne działanie i styl. */}
      </div>
    </div>
    )
}
export default Lesson03;