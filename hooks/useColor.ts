import { useState } from "react";

export const useColor = () => {
  const [color, setColor] = useState<string>("");
  const changeColor = (c: string) => {
    setColor(c);
  };
  return { color, changeColor };
};
