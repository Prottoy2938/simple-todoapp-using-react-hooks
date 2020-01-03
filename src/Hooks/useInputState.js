import { useState } from "react";

export default initialState => {
  const [value, setvalue] = useState(initialState);

  const handleChange = e => {
    setvalue(e.target.value);
  };
  const reset = () => {
    setvalue("");
  };
  return [value, handleChange, reset];
};
