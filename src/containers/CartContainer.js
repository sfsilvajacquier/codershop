import React from 'react';
import { Context } from '../context/cartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartContainer = () => {

    const [count] = useContext(Context);

    return (
        count > 0 ? (
            <div className="d-flex justify-content-center align-items-center bg-danger vh-100 h1 pb-5">{`tenes ${count} productos en tu carrito!`}</div>
        ) : (
            <Link to={'/'}>
            <h2 className="d-flex justify-content-center align-items-center bg-danger vh-100 pb-5">Volve a la home para agregar productos</h2>
            </Link>
        )
    )
}

export default CartContainer;