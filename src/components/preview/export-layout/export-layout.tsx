import { FC } from "react";
import { LayoutCodeProps } from "./export-layout.types";

const ExportLayout: FC <LayoutCodeProps> = ({ layout }) => {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Код успешно скопирован в буфер обмена!');
    } catch (err) {
      alert(`Ошибка:, ${err}`);
    }
  };

  return (
    <>
        {
        layout instanceof HTMLFormElement
        ? <>
            <button onClick={() => handleCopy(layout.outerHTML)}>Скопировать код</button>
            <code>
              {layout && layout.outerHTML}
            </code>
        </>
        : <>
            <button onClick={() => handleCopy(layout)}>Скопировать код</button>
            <code>
              {JSON.stringify(layout)}
            </code>
          </>
        }
    </>
  )
}

export default ExportLayout;
