import {useState, useEffect} from "react";

const useLocalStorage = (key, defaultVal) =>{ 
  const [state, setState] = useState(()=>{
    let val;
    try{
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch(e) {
      val = String(defaultVal);
    }
    return val;
  });
  
  useEffect(()=>{
    window.localStorage.setItem(key, JSON.stringify(state))
  },[state]);
  return [state, setState];
}

export default useLocalStorage;
