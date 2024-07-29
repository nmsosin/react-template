import { useState } from 'react';
import { useAppDispatch } from '../../../utils/hooks';
import styles from '../control-panel.module.css'
import { ListField } from '../../../utils/types';
import { addInput } from '../../../store/itemSlice';
import { v4 as uuid } from "uuid";


function CheckboxField() {
  const dispatch = useAppDispatch();
  const initialFormState = { isRequired: false};
  const [checkboxState, setCheckboxState] = useState<ListField>(initialFormState);

  const isActionDisabled = checkboxState?.name === undefined || checkboxState?.label === undefined;

  const handleAddCheckboxField = () => {
    dispatch(addInput({
      id: uuid(),
      type: 'checkbox',
      name: checkboxState.name,
      label: checkboxState.label,
      isRequired: checkboxState.isRequired,
    }));
  };

  return (
    <>
        <form className={styles.item}>
          <div className={styles.actions}>
            <h3 className={styles.subtitle}>Чекбокс</h3>
            <button
              type='button'
              onClick={handleAddCheckboxField}
              className={styles.addButton}
              disabled={isActionDisabled}  
            >+</button>
          </div>
          <input
            type="text"
            placeholder={'Название'}
            id='name'
            onChange={(e) => setCheckboxState({...checkboxState, name: e.currentTarget.value})}
          />
          <input
            type="text"
            placeholder={'Лейбл'}
            id='checkbox-label'
            onChange={(e) => setCheckboxState({...checkboxState, label: e.target.value})}
          />
          <label htmlFor="checkbox-required">
            <input
              type="checkbox"
              id='checkbox-required'
              onChange={(e) => setCheckboxState(f => ({...f, isRequired: e.target.checked}))}
            />
            Обязательное
          </label>
        </form>
    </>
  )
}

export default CheckboxField;
