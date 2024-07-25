import styles from './control-panel.module.css'

function ControlPanel() {
  const handleAddTextField = (evt) => {
    console.log('add text field', evt.target);
  }

  const handleAddList = () => {
    console.log('add text list');
  }

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
        <form className={styles.item} onSubmit={handleAddTextField}>
          <div className={styles.actions}>
            <h3 className={styles.subtitle}>Текстовое поле</h3>
            <button type='submit' className={styles.addButton}>+</button>
          </div>
          <input type="text" placeholder={'Название'} id='name' />
          <input type="text" placeholder={'Лейбл'} id='name' />
          <select>
            <option value="text">text</option>
            <option value="email">email</option>
            <option value="phone">phone</option>
            <option value="number">number</option>
          </select>
          <label htmlFor="required">
            <input type="checkbox" id='required' />
            Обязательное
          </label>
        </form>
        <hr/>

        <form className={styles.item} onSubmit={handleAddList}>
          <div className={styles.actions}>
            <h3 className={styles.subtitle}>Список</h3>
            <button type='submit' className={styles.addButton}>+</button>
          </div>
          <input type="text" placeholder={'Пункт 1'} id='name' />
          <input type="text" placeholder={'Пункт 2'} id='name' />
          <input type="text" placeholder={'Пункт 3'} id='name' />
          <input type="text" placeholder={'Пункт 4'} id='name' />
          <input type="text" placeholder={'Пункт 5'} id='name' />
        </form>
        <hr/>

        <form className={styles.item} onSubmit={handleAddCheckbox}>
          <div className={styles.actions}>
            <h3 className={styles.subtitle}>Чекбокс</h3>
            <button type='submit' className={styles.addButton}>+</button>
          </div>
          <input type="text" placeholder={'Название'} id='name' />
          <input type="text" placeholder={'Лейбл'} id='name' />
          <label htmlFor="required">
            <input type="checkbox" id='required' />
            Обязательное
          </label>
        </form>
        <hr/>

        <form className={styles.item} onSubmit={handleAddSubmitButton}>
          <div className={styles.actions}>
            <h3 className={styles.subtitle}>Кнопка</h3>
            <button type='submit' className={styles.addButton}>+</button>
          </div>
          <input type="text" placeholder={'Название'} id='name' />

        </form>
      </div>
    </>
  )
}

export default ControlPanel;
