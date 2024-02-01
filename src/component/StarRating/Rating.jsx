import React, { useState } from 'react'
import './style.css'
import { FaStar } from "react-icons/fa"

const Rating = ({ noOfStar = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const handleMouseClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    }
    const handleMouseHover = (getCurrentIndex) => {
        setHover(getCurrentIndex)
    }
    const handleMouseLeave = () => {
        setHover(rating)
    }


    return (
        <div className='star-container'>
            {
                [...Array(noOfStar)].map((_, index) => {
                    index += 1;
                    return <FaStar
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        key={index}
                        size={40}
                        onMouseMove={() => handleMouseHover(index)}
                        onClick={() => handleMouseClick(index)}
                        onMouseLeave={() => handleMouseLeave()}
                    />
                })
            }
        </div>
    )
}

export default Rating
