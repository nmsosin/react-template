import { Dispatch, FC, SetStateAction } from "react";
import styles from './nav-bar.module.css';

type NavBarProps = {
  activePage: 'preview' | 'layout' | 'styles';
  setActivePage: Dispatch<SetStateAction<"preview" | "layout" | "styles">>;
  isDisabled: boolean;
}

const NavBar: FC <NavBarProps> = ({ activePage = 'preview', setActivePage, isDisabled }) => {
  return (
    <div className={styles.bar}>
      <button
        disabled={isDisabled}
        type='button'
        className={`${styles.button} ${activePage === 'preview' ? styles.button_active : ''}`}
        onClick={() => setActivePage('preview')}
      >Превью</button>
      <button
        disabled={isDisabled}
        type='button'
        className={`${styles.button} ${activePage === 'layout' ? styles.button_active : ''}`}
        onClick={() => setActivePage('layout')}
      >Разметка</button>
      <button
        disabled={isDisabled}
        type='button'
        className={`${styles.button} ${activePage === 'styles' ? styles.button_active : ''}`}
        onClick={() => setActivePage('styles')}
      >Стили</button>
    </div>
  )
}

export default NavBar;
