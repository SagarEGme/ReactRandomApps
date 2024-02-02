import React, { useEffect, useState } from 'react'

const useLocalStorage = ({key,defaultValue}) => {
    const [value,setValue] = useState(()=>{
        let currentval;
        try{
            currentval = (localStorage.getItem(key) || defaultValue)
        } catch (e){
            console.log(e.message)
            currentval = defaultValue;
        }

    })
  useEffect(()=>{
    localStorage.setItem(key, value)
  },[key,value])
  
  return [value,setValue]
}

export default useLocalStorage
