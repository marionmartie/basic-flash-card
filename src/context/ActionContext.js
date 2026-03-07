import { createContext, useContext } from "react";

export const ActionContext = createContext();

export function useActions() {
  const context = useContext(ActionContext);

  if (!context) {
    throw new Error('useActions must be used within ActionProvider');
  }

  return context;
}