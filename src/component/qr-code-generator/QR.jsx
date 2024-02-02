import React, { useState } from 'react'
import QRcode from 'react-qr-code'

const QR = () => {
    const [input,setInput] = useState("");
    const [qrvalue,setQrvalue] = useState("")
    const handleQr=()=>{
        setQrvalue(input)
        setInput("")
    }
    const handleInput=(e)=>{
        setInput(e.target.value)
    }
  return (
    <div>
        <h1>QR code Generator</h1>
        <div>
            <input 
            style={{border:'2px solid black', margin:"10px"}}
            type="text" 
            name='qr-code'
            value={input}
            onChange={handleInput}
            onKeyDown={(e)=> e.key==='Enter' && handleQr()}
             />
             <button onClick={handleQr}>Generate QR</button>
        </div>
      <QRcode value={qrvalue}/>
    </div>
  )
}

export default QR
