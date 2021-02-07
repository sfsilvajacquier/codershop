import React, { useContext } from 'react';
import { Context } from '../../context/cartContext'

const Button = ({ click, itemCount }) => {
    
    const [count, setCount] = useContext(Context);

    const handleClick = () => setCount(count + itemCount);

    return (
        <button type='button' className=" btn btn-danger mt-3" onClick={handleClick}>Comprar {itemCount}</button>
    )
}

export default Button;