import React, { useState } from 'react'
import data from './data'
import './style.css'

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false)
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(selected === getCurrentId ? null : getCurrentId)

    }
    const handleMultipleSelection = (getCurrentId) => {
        let cpyMul = [...multiple]
        let indexOfCurrentId = cpyMul.indexOf(getCurrentId);

        if (indexOfCurrentId === -1) cpyMul.push(getCurrentId)
        else cpyMul.splice(indexOfCurrentId, 1)

        setMultiple(cpyMul)
    }


    return (
        <div className='wrapper'>
            <button
                onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
            >Enable Multiple Selection</button>
            <div className="accordian">
                {data && data.length ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div className="title" onClick={enableMultipleSelection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span> + </span>
                            </div>

                            {enableMultipleSelection ? multiple.indexOf(dataItem.id) !== -1 && <div>
                                {dataItem.answer}
                            </div> :
                                selected === dataItem.id && <div>{dataItem.answer}</div>
                            }


                        </div>
                    ))) : <div>no data found</div>
                }
            </div>
        </div>
    )
}

export default Accordian
