import { FC, useState } from 'react';
import { addInput, updateInput } from '../../store/itemSlice';
import { useAppDispatch } from '../../utils/hooks';
import styles from '../control-panel/control-panel.module.css'
import type { TextField } from '../../utils/types';
import { v4 as uuid } from "uuid";
import { TextFieldProps } from './text-field.types';

const TextField:FC<TextFieldProps> = ({ isEditable, textInput, closeModal }) => {
  const dispatch = useAppDispatch();
  const initialFormState = textInput
    ? {
      id: textInput.id,
      type: 'text',
      inputType: textInput.inputType,
      name: textInput.name,
      label: textInput.label,
      placeholder: textInput.placeholder,
      isRequired: textInput.isRequired,
    } : { isRequired: false};
  const [formState, setFormState] = useState<TextField>(initialFormState);

  const isActionDisabled = formState?.inputType === undefined
    || formState?.name === undefined
    || formState?.label === undefined
    || formState?.placeholder === undefined;

  const handleAddTextField = () => {
    dispatch(addInput({
      id: uuid(),
      type: 'text',
      inputType: formState.inputType,
      name: formState.name,
      label: formState.label,
      placeholder: formState.placeholder,
      isRequired: formState.isRequired,
    }));
  };

  const handleEditTextField = () => {
    dispatch(updateInput({
      id: formState.id,
      type: 'text',
      name: formState.name,
      label: formState.label,
      inputType: formState.inputType,
      placeholder: formState.placeholder,
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
          <h3 className={styles.subtitle}>Текстовое поле</h3>
          { isEditable
            ? <button
                type='button'
                onClick={handleEditTextField}
                className={styles.saveButton}
                disabled={isActionDisabled}
              >Сохранить</button> 
            : <button
              type='button'
              onClick={handleAddTextField}
              className={styles.addButton}
              disabled={isActionDisabled}  
            >+</button>}
        </div>
        <input
          type="text"
          placeholder={'Название'}
          id={`label_textField_${isEditable}`}
          value={formState.name}
          onChange={(e) => setFormState(f => ({...f, name: e.target.value}))}
        />
        <input
          type="text"
          placeholder={'Лейбл'}
          id={`label_textField_${isEditable}`}
          value={formState.label}
          onChange={(e) => setFormState(f => ({...f, label: e.target.value}))}
        />
        <input
          type="text"
          placeholder={'Плейсхолдер'}
          id={`placeholder_textField_${isEditable}`}
          value={formState.placeholder}
          onChange={(e) => setFormState(f => ({...f, placeholder: e.target.value}))}
        />
        <select
          defaultValue={formState.inputType ?? ''}
          onChange={(e) => setFormState(f => ({...f, inputType: e.target.value}))}
        >
          <option disabled value="">Выберите тип</option>
          <option value="text">text</option>
          <option value="email">email</option>
          <option value="phone">phone</option>
          <option value="number">number</option>
        </select>
        <label htmlFor={`text-required_textField_${isEditable}`}>
          <input
            type="checkbox"
            id={`text-required_textField_${isEditable}`}
            onChange={(e) => setFormState( f => ({...f, isRequired: e.target.checked}))}
            checked={formState.isRequired === true}
          />
          Обязательное
        </label>
      </form>
    </>
  )
}

export default TextField;
