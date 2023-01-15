import {useState} from "react"

export default function useTextState(initialValue){
  const [state, setState ] = useState(initialValue); 

  function handleChange(e) {
    setState(e.target.value);
  }
  function reset() {
    setState("")
  }

  return [state, handleChange, reset];
}