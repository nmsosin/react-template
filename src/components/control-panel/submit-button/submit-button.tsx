import styles from '../control-panel.module.css'


function SubmitButton() {
  const handleAddSubmitButton = () => {
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
            <h3 className={styles.subtitle}>Кнопка</h3>
            <button type='button' onClick={handleAddSubmitButton} className={styles.addButton}>+</button>
          </div>
          <input type="text" placeholder={'Название'} id='name' />
        </form>
    </>
  )
}

export default SubmitButton;
