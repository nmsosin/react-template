import { useState } from 'react';
import { addInput } from '../../../store/itemSlice';
import { useAppDispatch } from '../../../utils/hooks';
import styles from '../control-panel.module.css'
import type { TextField } from '../../../utils/types';
import { v4 as uuid } from "uuid";

function TextField() {
  const dispatch = useAppDispatch();
  const initialFormState = { isRequired: false};
  const [formState, setFormState] = useState<TextField>(initialFormState);

  const isActionDisabled = formState?.inputType === undefined
    || formState?.name === undefined
    || formState?.label === undefined
    || formState?.placeholder === undefined;

  const handleAddTextField = () => {
    console.log('formState', formState);
    
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

  return (
    <>
      <form className={styles.item}>
        <div className={styles.actions}>
          <h3 className={styles.subtitle}>Текстовое поле</h3>
          <button
            type='button'
            onClick={handleAddTextField}
            className={styles.addButton}
            disabled={isActionDisabled}
          >+</button>
        </div>
        <input
          type="text"
          placeholder={'Название'}
          id='name'
          onChange={(e) => setFormState({...formState, name: e.target.value})}
        />
        <input
          type="text"
          placeholder={'Лейбл'}
          id='label'
          onChange={(e) => setFormState({...formState, label: e.target.value})}
        />
        <input
          type="text"
          placeholder={'Плейсхолдер'}
          id='placeholder'
          onChange={(e) => setFormState({...formState, placeholder: e.target.value})}
        />
        <select
          defaultValue=""
          onChange={(e) => setFormState({...formState, inputType: e.target.value})}
        >
          <option disabled value="">Выберите тип</option>
          <option value="text">text</option>
          <option value="email">email</option>
          <option value="phone">phone</option>
          <option value="number">number</option>
        </select>
        <label htmlFor="required">
          <input
            type="checkbox"
            id='required'
            onChange={(e) => setFormState({...formState, isRequired: e.target.checked})}
          />
          Обязательное
        </label>
      </form>
    </>
  )
}

export default TextField;
