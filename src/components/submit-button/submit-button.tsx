import { FC, useState } from 'react';
import styles from '../control-panel/control-panel.module.css'
import { ButtonField } from '../../utils/types';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { addInput, updateInput } from '../../store/itemSlice';
import { v4 as uuid } from "uuid";
import { SubmitButtonProps } from './submit-button.types';


const SubmitButton: FC<SubmitButtonProps> = ({ isEditable, button, closeModal }) => {
  const inputList = useAppSelector(state => state.inputs.inputList);
  const dispatch = useAppDispatch();
  
  const initialFormState = button 
    ? {
      id: button.id,
      type: button.type,
      name: button.name,
    } : {};
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

  const handleEditSubmitButton = () => {
    dispatch(updateInput({
      id: buttonState.id,
      type: 'button',
      name: buttonState.name,
    }));
    closeModal();
  };

  return (
    <>
      <form className={styles.item}>
        <div className={styles.actions}>
          <h3 className={styles.subtitle}>Кнопка</h3>
          { isEditable
          ? <button
              type='button'
              onClick={handleEditSubmitButton}
              className={styles.saveButton}
              disabled={isActionDisabled}
            >Сохранить</button> 
          : <button
            type='button'
            onClick={handleAddSubmitButton}
            className={styles.addButton}
            disabled={isActionDisabled || isButtonExist}  
          >+</button>}
        </div>
        <input
          type="text"
          placeholder='Название'
          value={buttonState.name}
          id='name'
          onChange={(e) => setButtonState(f => ({...f, name: e.target.value}))}
        />
      </form>
    </>
  )
}

export default SubmitButton;
