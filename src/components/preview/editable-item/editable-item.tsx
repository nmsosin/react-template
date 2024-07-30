import styles from './editable-item.module.css'
import { useAppDispatch } from "../../../utils/hooks";
import { FC, ReactNode, useState } from 'react';

import { deleteInput } from '../../../store/itemSlice';
import { InputItem } from '../../../utils/types';

export type EditableItemProps = {
  item: InputItem;
  children: ReactNode;
}


const EditableItem:FC<EditableItemProps> = ({children, item}) => {
  const [isMouseOver,setIsMouseOver] = useState(false)

  const handleEnter = () => {
    setIsMouseOver(true)
  }

  const handleLeave = () => {
    setIsMouseOver(false)
  }
  const dispatch = useAppDispatch();

  const handleEditInput = (id?: string) => {
    console.log(id);
  }

  const handleDeleteInput = (id?: string) => {
    dispatch(deleteInput({ id }));
  }

  return (
    <div className={styles.actionsWrapper} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
      { isMouseOver ? 
      <div className={styles.actions}>
        <input type="button" className={styles.editButton} onClick={() => handleEditInput(item.id)}/>
        <input type="button" className={styles.deleteButton} onClick={() => handleDeleteInput(item.id)}/>
      </div> : null
      }
    </div>
  );
}

export default EditableItem;
