import { createContext, useReducer } from "react";

const ThemeContexttt = createContext();

const initialData = {theme:  localStorage.getItem("themey") ===null ?"light" : (localStorage.getItem("themey")==="light" ? "light":"darck")};
const reducer = (firstState, action) => {
  switch (action.type) {
    
    case "NEW_COLOR":
      return { ...firstState, theme: action.NEW_VALUE };

    default:
      return firstState;
  }
};


export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  
  const changeLight = (Light) => {
    
    localStorage.setItem("themey", Light)
    
    dispatch({ type: "NEW_COLOR", NEW_VALUE: Light });
    
  };
  

  return (
     <ThemeContexttt.Provider value={{ ...firstState,changeLight}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;