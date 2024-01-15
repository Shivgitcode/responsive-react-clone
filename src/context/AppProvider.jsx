import { useState } from "react";
import { createContext } from "react";
import { questions } from "../constant";

export const AppProvider = createContext();

export default function AppProviderData({ children }) {
  const [show, setShow] = useState(questions);
  const [layout, setLayout] = useState(true);
  function handleDesc(id) {
    setShow((prev) => {
      return prev.map((el) => {
        if (id === el.id) {
          return { ...el, opacity: !el.opacity };
        } else {
          return { ...el, opacity: true };
        }
      });
    });
  }

  const value = {
    show,
    setShow,
    handleDesc,
    layout,
    setLayout,
  };

  return <AppProvider.Provider value={value}>{children}</AppProvider.Provider>;
}
