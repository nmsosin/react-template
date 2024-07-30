import { FC, useState } from 'react';
import { addInput, updateInput } from '../../store/itemSlice';
import { useAppDispatch } from '../../utils/hooks';
import styles from '../control-panel/control-panel.module.css'
import type { ListField } from '../../utils/types';
import { v4 as uuid } from "uuid";
import { ListFieldProps } from './list-field.types';

const ListField:FC<ListFieldProps> = ({ isEditable, closeModal, list }) => {
  const dispatch = useAppDispatch();
  const initialFormState = list ? {
    id: list.id,
    type: 'list',
    name: list.name,
    label: list.label,
    options: list.options,
    isRequired: list.isRequired,
  } : { isRequired: false};
  const [formState, setFormState] = useState<ListField>(initialFormState);

  const isActionDisabled = formState?.optionsString === undefined
    || formState?.name === undefined
    || formState?.label === undefined;

  const handleAddListField = () => {
    dispatch(addInput({
      id: uuid(),
      type: 'list',
      name: formState.name,
      label: formState.label,
      options: formState.optionsString?.split(','),
      isRequired: formState.isRequired,
    }));
  };
  
  const handleEditListField = () => {
    dispatch(updateInput({
      id: formState.id,
      type: 'list',
      name: formState.name,
      label: formState.label,
      options: formState.options,
      isRequired: formState.isRequired,
    }));
    if (closeModal) {
      closeModal();
    }
  };

  return (
    <>
      <form className={styles.item}>
        <div className={styles.actions}>
          <h3 className={styles.subtitle}>Список</h3>
          { isEditable
          ? <button
              type='button'
              onClick={handleEditListField}
              className={styles.saveButton}
              disabled={isActionDisabled}
            >Сохранить</button> 
          : <button
            type='button'
            onClick={handleAddListField}
            className={styles.addButton}
            disabled={isActionDisabled}  
          >+</button>}
        </div>
        <input
          type="text"
          placeholder={'Название'}
          id={`name_listField_${isEditable}`}
          value={formState.name}
          onChange={(e) => setFormState(f =>({...f, name: e.target.value}))}  
        />
        <input
          type="text"
          placeholder={'Лейбл'}
          id={`label_listField_${isEditable}`}
          value={formState.label}
          onChange={(e) => setFormState(f =>({...f, label: e.target.value}))}
        />
        <input
          type="text"
          placeholder={'Опции через запятую'}
          id={`options_listField_${isEditable}`}
          value={formState.optionsString}
          onChange={(e) => setFormState(f =>({...f, optionsString: e.target.value, options: e.target.value.split(',')}))}  
        />
        <label htmlFor={`list-required_listField_${isEditable}`}>
          <input
            type="checkbox"
            id={`list-required_listField_${isEditable}`}
            checked={formState.isRequired}
            onChange={(e) => setFormState( f => ({...f, isRequired: e.target.checked}))}
          />
          Обязательное
        </label>
      </form>
    </>
  )
}

export default ListField;
