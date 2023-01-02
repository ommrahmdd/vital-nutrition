import React, { useState } from "react";

let context = React.createContext({});

export default function Context({ children }: { children: React.ReactNode }) {
  let [theme, setTheme] = useState<string>(
    localStorage.getItem("darkMode") || ""
  );
  let handleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };
  return (
    <context.Provider value={{ theme, handleTheme }}>
      {children}
    </context.Provider>
  );
}
