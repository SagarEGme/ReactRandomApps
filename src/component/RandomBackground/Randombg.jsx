import React, { useState } from 'react'
import './style.css'


const Randombg = () => {
    const [colorType, setColorType] = useState("hex");
    const [color, setColor] = useState("#000000");

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    }

    const changeBgHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexCode = "#"
        console.log(randomColorUtility(hex.length))

        for (let i = 0; i < 6; i++) {
            hexCode += hex[randomColorUtility(hex.length)]
            console.log(hexCode)
        }
        console.log(hexCode)
        setColor(hexCode)

    }
    const changeBgRgbColor = () => {
        let x=randomColorUtility(256);
        let y=randomColorUtility(256);
        let z = randomColorUtility(256);

        setColor(`rgb(${x},${y},${z})`);

    }
    return (
        <div style={{
            background: color,
            width: "100vw",
            height: "100vh"
        }}>
            <div>
            <button style={{ color: "#fff" }} onClick={() => setColorType('hex')}>Choose HEX</button>
            <button style={{ color: "#fff" }} onClick={() => setColorType('rgb')}>Choose RGB</button>
            <button style={{ color: "#fff" }} onClick={() => colorType === "hex" ? changeBgHexColor() : changeBgRgbColor()}>Change Background Color</button>
            </div>
            <div className="content">
                <p>{colorType === 'rgb' ? "RGB Code ":"HEX Code "}</p>
                <h4>{color}</h4>
            </div>
        </div>
    )
}

export default Randombg
