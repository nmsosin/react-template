import { CSSProperties } from "react";

export const formStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "40px",
  width: "400px",
  gap: "10px",
  borderRadius: "20px",
  border: "2px solid #646cff",
  boxSizing: "border-box",
  backgroundColor: "rgba(207, 207, 207, 0.45)",
}

export const normalizedStyles = ".form{" + Object.entries(formStyles).map(([k, v]) => {
  k = k.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
  return `${k}:${v}`
}).join(';') + ";}";