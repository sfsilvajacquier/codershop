import React from 'react'
import './count.css'

export default function Count({contador, onAdd, sumar}) {
    return (
        <div className='count'>
            <button className="btn btn-danger mx-4" onClick={() => onAdd('-')}>-</button>
            <div>
                {contador}
            </div>
            <button className="btn btn-success mx-4" onClick={()=>onAdd('+')}>+</button>
        </div>
    )
}