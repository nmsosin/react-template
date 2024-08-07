import styles from './preview-form.module.css'
import { useAppSelector } from "../../utils/hooks";
import { useRef, useState } from 'react';
import LayoutCode from './export-layout/export-layout';
import NavBar from './nav-bar/nav-bar';
import { formStyles, normalizedStyles } from './config';

import EditableItem from './editable-item/editable-item';

function PreviewForm() {
  const inputList = useAppSelector(state => state.inputs.inputList);
  const formRef = useRef(null);

  const [activePage, setActivePage] = useState<'preview' | 'layout' | 'styles'>('preview');

  const isFormFilled = inputList.length > 0;

  return (
    <div>
      <h2 className={styles.sectionTitle}>Предварительный просмотр формы</h2>
        <NavBar activePage={activePage} setActivePage={setActivePage} isDisabled={!isFormFilled} />
      <div className={styles.container}>
        { activePage === 'preview' && inputList.length > 0 &&
          <form
            id="codeOutput"
            ref={formRef}
            className="form"
            style={formStyles}
          >
            {inputList.length > 0 && inputList.map((item) => {
              if (item.type === 'text') {
                return <EditableItem key={item.id} item={item} children={
                  <label htmlFor={`${item.inputType}_${item.id}`}>
                    {item.label}
                    <input
                      type={item.inputType}
                      name={item.name}
                      required={item.isRequired}
                      placeholder={item.placeholder}
                    >
                    </input>
                  </label>
                } />
              } else if (item.type === 'list') {
                return <EditableItem key={item.id} item={item} children={
                  <select>
                    { 
                      item.options && item.options.length > 0 && item.options.map((select, index) => {
                        return <option value="select" key={index}>{select}</option>
                      })
                    }
                  </select>
                } />
              } else if (item.type === 'checkbox') {
                return <EditableItem key={item.id} item={item} children={
                  <label htmlFor={item.id}>
                    <input type="checkbox" required={item.isRequired} id={item.id} />
                      { item.label }
                  </label> 
                } />
              } else if (item.type === 'button') {
                return <EditableItem key={item.id} item={item} children={
                  <button type="button" onClick={() => alert('Submit button click handler')}>
                    {item.name}
                  </button>
                } />
              }
              
              })
            }
          </form>
        }

        { activePage === 'layout' && formRef && formRef.current &&
          <LayoutCode layout={formRef.current} />
        }

        { activePage === 'styles' &&
          <LayoutCode layout={normalizedStyles} />
        }
      </div>
    </div>
  )
}

export default PreviewForm;
