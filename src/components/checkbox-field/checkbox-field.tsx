import { FC, useState } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import styles from '../control-panel/control-panel.module.css'
import { ListField } from '../../utils/types';
import { addInput, updateInput } from '../../store/itemSlice';
import { v4 as uuid } from "uuid";
import { CheckboxFieldProps } from './checkbox-field.types';


const CheckboxField:FC<CheckboxFieldProps> = ({ isEditable, closeModal, checkbox }) => {
  const dispatch = useAppDispatch();
  const initialFormState = checkbox ? {
    id: checkbox.id,
    type: 'checkbox',
    name: checkbox.name,
    label: checkbox.label,
    isRequired: checkbox.isRequired,
  } : { isRequired: false };
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

  const handleEditCheckboxField = () => {
    dispatch(updateInput({
      id: checkboxState.id,
      type: 'checkbox',
      name: checkboxState.name,
      label: checkboxState.label,
      isRequired: checkboxState.isRequired,
    }));
    if (closeModal) {
      closeModal();
    }
  };

  return (
    <>
        <form className={styles.item}>
          <div className={styles.actions}>
            <h3 className={styles.subtitle}>Чекбокс</h3>
            { isEditable
              ? <button
                  type='button'
                  onClick={handleEditCheckboxField}
                  className={styles.saveButton}
                  disabled={isActionDisabled}
                >Сохранить</button> 
              : <button
                type='button'
                onClick={handleAddCheckboxField}
                className={styles.addButton}
                disabled={isActionDisabled}  
              >+</button>}
          </div>
          <input
            type="text"
            placeholder={'Название'}
            id={`name_checkbox_${isEditable}`}
            value={checkboxState.name}
            onChange={(e) => setCheckboxState(f =>({...f, name: e.target.value}))}
          />
          <input
            type="text"
            placeholder={'Лейбл'}
            id={`label_checkbox_${isEditable}`}
            value={checkboxState.label}
            onChange={(e) => setCheckboxState(f =>({...f, label: e.target.value}))}
          />
          <label htmlFor="checkbox-required">
            <input
              type="checkbox"
              id={`required_checkbox_${isEditable}`}
              checked={checkboxState.isRequired}
              onChange={(e) => setCheckboxState(f => ({...f, isRequired: e.target.checked}))}
            />
            Обязательное
          </label>
        </form>
    </>
  )
}

export default CheckboxField;
