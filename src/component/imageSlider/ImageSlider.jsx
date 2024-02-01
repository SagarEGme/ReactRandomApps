import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './style.css'

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [photoData, setPhotoData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)

    async function fetchApi() {
        try {
            setLoading(true)
            const res = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await res.json();

            if (data && data.length) {
                setPhotoData(data)
                setLoading(false)
            }

        } catch (e) {
            setLoading(false);
            console.log(e.message)
        }
    }

    function handleNext() {
        setCurrentSlide(currentSlide === photoData.length - 1 ? 0 : currentSlide + 1)
    }
    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? photoData.length - 1 : currentSlide - 1)

    }

    useEffect(() => {
        if (url !== '') fetchApi()
    }, [url])
    console.log(photoData)

    if (loading) return <div>Its loading</div>

    return <div className='container'>
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious} />
        {photoData && photoData.length ? photoData.map((photoItem, index) => 
            <img src={photoItem.download_url}
                key={photoItem.id}
                className={
                    currentSlide === index ? "active-image" : "active-image hide-active-image"

                } />
        )
            : <h1>hello</h1>
        }
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
        <span className="circle-indicators">
            {photoData && photoData.length ? photoData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={currentSlide === index ? "active-indicator" : "active-indicator inactive-indicator"}
                ></button>
            )) : null}
        </span>

    </div>
}