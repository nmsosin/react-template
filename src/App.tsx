import styles from './App.module.css'
import ControlPanel from './components/control-panel/control-panel';
import PreviewForm from './components/preview/preview-form';

function App() {

  return (
    <>
      <h1>Редактор форм</h1>
      <div className={styles.container}>
        <ControlPanel />
        <PreviewForm />
      </div>
    </>
  )
}

export default App;
