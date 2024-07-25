import styles from './preview-form.module.css'
import { useAppSelector } from "../../utils/hooks";

function PreviewForm() {
  const inputList = useAppSelector(state => state.inputs.inputList);

  return (
    <>
      <form action='submit'>
        <h2 className={styles.sectionTitle}>Предварительный просмотр формы</h2>
        <div className={styles.container}>
          {inputList.length > 0 && inputList.map((item, idx) => {
            if (item.type === 'text') {
              return (
              <label key={idx} htmlFor={item.inputType as string + item.id as string}>
                {item.label}
                <input
                  type={item.inputType}
                  name={item.name}
                  required={item.isRequired}
                >
                </input>
              </label>);
            } else if (item.type === 'list') {
              return <select>
                { 
                  item.options && item.options.length > 0 && (item.options as string[]).map((select, index) => {
                    return <option value="select" key={index}>{select}</option>
                  })
                }
              </select>
            }
            


          })}
        </div>
      </form>
    </>
  )
}

export default PreviewForm;
