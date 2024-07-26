import styles from './preview-form.module.css'
import { useAppSelector } from "../../utils/hooks";

function PreviewForm() {
  const inputList = useAppSelector(state => state.inputs.inputList);

  const isFormFilled = inputList.length > 0;

  const handleSaveLayout = () => {
    const code = document.getElementById('codeOutput')!.outerHTML;
    const blob = new Blob([code!], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'layout.html';
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const handleSaveStyles = () => {
    const elt = document.getElementById('codeOutput');
    const styles = window.getComputedStyle(elt!);
    const code = Object.entries(styles!).map(([k, v]) => {
      k = k.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
      return `${k}:${v}`
  }).join(';');
    const blob = new Blob([code!], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'styles.css';
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div>
      <h2 className={styles.sectionTitle}>Предварительный просмотр формы</h2>
      <div className={styles.exportButtons}>
          <button onClick={handleSaveLayout} disabled={!isFormFilled}>
            Сохранить html
          </button>
          <button onClick={handleSaveStyles} disabled={!isFormFilled}>
            Сохранить css
          </button>
        </div>
      <form action='submit' id="codeOutput">
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
    </div>
  )
}

export default PreviewForm;
