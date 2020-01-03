import { useState } from "react";
function useToggle(initialState = false) {
  const [state, setstate] = useState(initialState);
  const toggle = () => {
    setstate(!state);
  };
  return [state, toggle];
}
export default useToggle;
