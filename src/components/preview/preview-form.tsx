import styles from './preview-form.module.css'
import { useAppSelector } from "../../utils/hooks";
import { useRef, useState } from 'react';
import LayoutCode from './export-layout/export-layout';
import NavBar from './nav-bar/nav-bar';

function PreviewForm() {
  const inputList = useAppSelector(state => state.inputs.inputList);
  const formRef = useRef(null);

  const [activePage, setActivePage] = useState<'preview' | 'layout' | 'styles'>('preview');

  const isFormFilled = inputList.length > 0;

  const exportStyles = formRef.current && getComputedStyle(formRef.current)
  console.log('formRef.current', formRef.current);

  return (
    <div>
      <h2 className={styles.sectionTitle}>Предварительный просмотр формы</h2>
        <NavBar activePage={activePage} setActivePage={setActivePage} isDisabled={!isFormFilled} />
      <div className={styles.container}>
        { activePage === 'preview' && 
          <form
            action='submit'
            id="codeOutput"
            onSubmit={() => alert('Submit handler')}
            ref={formRef}
            className={styles.form}
          >
            {inputList.length > 0 && inputList.map((item, idx) => {
              if (item.type === 'text') {
                return (
                  <label key={idx} htmlFor={item.inputType as string + item.id as string}>
                    {item.label}
                    <input
                      type={item.inputType}
                      name={item.name}
                      required={item.isRequired}
                    >
                    </input>
                  </label>);
              } else if (item.type === 'list') {
                return <select>
                  { 
                    item.options && item.options.length > 0 && (item.options as string[]).map((select, index) => {
                      return <option value="select" key={index}>{select}</option>
                    })
                  }
                </select>
              } else if (item.type === 'checkbox') {
                return <label htmlFor={item.id}>
                  <input type="checkbox" required={item.isRequired} id={item.id} />
                    { item.label }
                </label>
              } else if (item.type === 'button') {
                return <button type="submit">
                  {item.name}
                </button>
              }
              
              })
            }
          </form>
        }

        { activePage === 'layout' && formRef && formRef.current &&
          <LayoutCode layout={formRef.current} />
        }

        { activePage === 'styles' && formRef && formRef.current && exportStyles &&
          <LayoutCode layout={(formRef.current as HTMLFormElement).style} />
        }
      </div>
    </div>
  )
}

export default PreviewForm;
