import { FC } from "react";

type LayoutCodeProps = {
  layout: HTMLFormElement | CSSStyleDeclaration;
}

const ExportLayout: FC <LayoutCodeProps> = ({ layout }) => {
  console.log(">>>layout", typeof layout)
  return (
    <>
        {layout instanceof HTMLFormElement && <code>
          {layout && layout.outerHTML}
        </code>}
        {layout instanceof CSSStyleDeclaration && <code>
          {layout}
        </code>}
    </>
  )
}

export default ExportLayout;
