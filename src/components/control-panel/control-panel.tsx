import styles from './control-panel.module.css'
import ListField from './list-field/list-field';
import TextField from './text-field/text-field';

function ControlPanel() {
  const handleAddCheckbox = () => {
    console.log('add checkbox');
  }

  const handleAddSubmitButton = () => {
    console.log('add submit button');
  }

  return (
    <>
      <div className={styles.panel}>
        <h2>Выбор элемента формы</h2>
        <TextField />
        <hr/>

        <ListField />
        <hr/>

        <form className={styles.item}>
          <div className={styles.actions}>
            <h3 className={styles.subtitle}>Чекбокс</h3>
            <button type='button' onClick={handleAddCheckbox} className={styles.addButton}>+</button>
          </div>
          <input type="text" placeholder={'Название'} id='name' />
          <input type="text" placeholder={'Лейбл'} id='name' />
          <label htmlFor="required">
            <input type="checkbox" id='required' />
            Обязательное
          </label>
        </form>
        <hr/>

        <form className={styles.item}>
          <div className={styles.actions}>
            <h3 className={styles.subtitle}>Кнопка</h3>
            <button type='button' onClick={handleAddSubmitButton} className={styles.addButton}>+</button>
          </div>
          <input type="text" placeholder={'Название'} id='name' />

        </form>
      </div>
    </>
  )
}

export default ControlPanel;
