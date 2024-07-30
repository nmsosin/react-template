import styles from './editable-item.module.css'
import { useAppDispatch } from "../../../utils/hooks";
import { FC, ReactNode, useState } from 'react';
import Modal from '../../modal/modal';
import { deleteInput } from '../../../store/itemSlice';
import { InputItem } from '../../../utils/types';
import SubmitButton from '../../submit-button/submit-button';
import TextField from '../../text-field/text-field';
import ListField from '../../list-field/list-field';
import CheckboxField from '../../checkbox-field/checkbox-field';

export type EditableItemProps = {
  item: InputItem;
  children: ReactNode;
}


const EditableItem:FC<EditableItemProps> = ({children, item}) => {
  const [isMouseOver,setIsMouseOver] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEnter = () => {
    setIsMouseOver(true)
  }

  const handleLeave = () => {
    setIsMouseOver(false)
  }
  const dispatch = useAppDispatch();

  const handleEditInput = () => {
    setIsEditModalOpen(true);
  }

  const handleDeleteInput = (id?: string) => {
    dispatch(deleteInput({ id }));
  }

  const handleCloseButton = () => {
    setIsEditModalOpen(false);
  }


  return (
    <>
      <div className={styles.actionsWrapper} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {children}
        { isMouseOver ? 
        <div className={styles.actions}>
          <input type="button" className={styles.editButton} onClick={() => handleEditInput()}/>
          <input type="button" className={styles.deleteButton} onClick={() => handleDeleteInput(item.id)}/>
        </div> : null
        }
      </div>

      {
        isEditModalOpen && item.type === 'button' &&
        <Modal children={<SubmitButton isEditable button={item} closeModal={() => setIsEditModalOpen(false)}/>} onClose={handleCloseButton} />
      }

      {
        isEditModalOpen && item.type === 'text' &&
        <Modal children={<TextField isEditable textInput={item} closeModal={() => setIsEditModalOpen(false)}/>} onClose={handleCloseButton} />
      }

      {
        isEditModalOpen && item.type === 'list' &&
        <Modal children={<ListField isEditable list={item} closeModal={() => setIsEditModalOpen(false)}/>} onClose={handleCloseButton} />
      }

      {
        isEditModalOpen && item.type === 'checkbox' &&
        <Modal children={<CheckboxField isEditable checkbox={item} closeModal={() => setIsEditModalOpen(false)}/>} onClose={handleCloseButton} />
      }
    </>
  );
}

export default EditableItem;
