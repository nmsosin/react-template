import styles from '../control-panel.module.css'


function CheckboxField() {
  const handleAddCheckboxField = () => {
    alert("COMING SOON");
    
    // dispatch(addInput({
    //   id: uuid(),
    //   type: 'list',
    //   name: formState.name,
    //   label: formState.label,
    //   options: (formState.options as string).split(','),
    //   // isRequired: formState.isRequired,
    // }));
  };

  return (
    <>
        <form className={styles.item}>
          <div className={styles.actions}>
            <h3 className={styles.subtitle}>Чекбокс</h3>
            <button type='button' onClick={handleAddCheckboxField} className={styles.addButton}>+</button>
          </div>
          <input type="text" placeholder={'Название'} id='name' />
          <input type="text" placeholder={'Лейбл'} id='name' />
          <label htmlFor="required">
            <input type="checkbox" id='required' />
            Обязательное
          </label>
        </form>
    </>
  )
}

export default CheckboxField;
