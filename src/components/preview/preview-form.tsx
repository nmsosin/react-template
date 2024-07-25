import styles from './preview-form.module.css'

function PreviewForm() {

  return (
    <>
      <form>
        <h2 className={styles.sectionTitle}>Предварительный просмотр формы</h2>
        <div className={styles.container}>
          Тут будет содержимое формы
        </div>
      </form>
    </>
  )
}

export default PreviewForm;
