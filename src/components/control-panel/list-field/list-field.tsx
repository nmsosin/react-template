import { useState } from 'react';
import { addInput } from '../../../store/itemSlice';
import { useAppDispatch } from '../../../utils/hooks';
import styles from '../control-panel.module.css'
import type { ListField } from '../../../utils/types';
import { v4 as uuid } from "uuid";

function ListField() {
  const dispatch = useAppDispatch();
  const initialFormState = { isRequired: false};
  const [formState, setFormState] = useState<ListField>(initialFormState);

  const isActionDisabled = formState?.inputType === undefined
    || formState?.name === undefined
    || formState?.label === undefined;

  const handleAddListField = () => {
    console.log('formState', formState);
    
    dispatch(addInput({
      id: uuid(),
      type: 'list',
      name: formState.name,
      label: formState.label,
      options: (formState.options as string).split(','),
      // isRequired: formState.isRequired,
    }));
  };

  return (
    <>
      <form className={styles.item}>
        <div className={styles.actions}>
          <h3 className={styles.subtitle}>Список</h3>
          <button
            // disabled={isActionDisabled}
            type='button'
            onClick={handleAddListField}
            className={styles.addButton}
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
          placeholder={'Опции через запятую'}
          id='options'
          onChange={(e) => setFormState({...formState, options: e.target.value})}  
        />
      </form>
    </>
  )
}

export default ListField;
