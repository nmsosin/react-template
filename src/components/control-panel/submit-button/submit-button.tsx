import { useState } from 'react';
import styles from '../control-panel.module.css'
import { ButtonField } from '../../../utils/types';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { addInput } from '../../../store/itemSlice';
import { v4 as uuid } from "uuid";


function SubmitButton() {
  const inputList = useAppSelector(state => state.inputs.inputList);
  const dispatch = useAppDispatch();
  
  const initialFormState = {};
  const [buttonState, setButtonState] = useState<ButtonField>(initialFormState);

  const isButtonExist = inputList.some(item => item.type === 'button');

  const isActionDisabled = buttonState?.name === undefined;

  const handleAddSubmitButton = () => {
    dispatch(addInput({
      id: uuid(),
      type: 'button',
      name: buttonState.name,
    }));
  };

  return (
    <>
        
        <form className={styles.item}>
          <div className={styles.actions}>
            <h3 className={styles.subtitle}>Кнопка</h3>
            <button
              type='button'
              onClick={handleAddSubmitButton}
              className={styles.addButton}
              disabled={isActionDisabled || isButtonExist}  
            >+</button>
          </div>
          <input
            type="text"
            placeholder={'Название'}
            id='name'
            onChange={(e) => setButtonState(f => ({...f, name: e.target.value}))}
          />
        </form>
    </>
  )
}

export default SubmitButton;
