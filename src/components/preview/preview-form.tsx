import styles from './preview-form.module.css'
import { useAppSelector } from "../../utils/hooks";

function PreviewForm() {
  const inputList = useAppSelector(state => state.inputs.inputList);

  return (
    <>
      <form action='submit'>
        <h2 className={styles.sectionTitle}>Предварительный просмотр формы</h2>
        <div className={styles.container}>
          Тут будет содержимое формы
          {inputList.length > 0 && inputList.map(item => {
            return (
            <label htmlFor={item.inputType as string + item.id as string}>
              <input
                type={item.inputType}
                name={item.name}
                required={item.isRequired}
              >
              </input>
            </label>);
          })}
        </div>
      </form>
    </>
  )
}

export default PreviewForm;
