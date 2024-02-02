import React from 'react'
import useLocalStorage from './useLocalStorage'
import './style.css'

const Lightdark = () => {
    const [theme,setTheme]  = useLocalStorage("theme", "light")
    const handleToggleTheme=()=>{
        setTheme(theme==='dark'?'light':'dark')
    }
  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className="container">
            <p>hello world</p>
            <button onClick={handleToggleTheme}>Change theme</button>
        </div>
      
    </div>
  )
}

export default Lightdark
