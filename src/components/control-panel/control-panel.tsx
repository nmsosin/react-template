import CheckboxField from './checkbox-field/checkbox-field';
import styles from './control-panel.module.css';
import ListField from './list-field/list-field';
import SubmitButton from '../submit-button/submit-button';
import TextField from './text-field/text-field';

function ControlPanel() {

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Выбор элемента формы</h2>
      <div className={styles.panel}>
        <TextField />
        <hr/>

        <ListField />
        <hr/>

        <CheckboxField />
        <hr/>

        <SubmitButton />
      </div>
    </div>
  )
}

export default ControlPanel;
