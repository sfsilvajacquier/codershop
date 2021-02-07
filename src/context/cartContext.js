import React, { useState } from 'react'

export const Context = React.createContext([]);

const CartContext = (props) => {

    const [count, setCount] = useState(0)

    return (
        <Context.Provider value={[count, setCount]}>
            {props.children}
        </Context.Provider>
    )
}

export default CartContext;