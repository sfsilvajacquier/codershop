
import React, { useState } from 'react'
import Count from '../components/Count/Count'
import Button from '../components/Button/Button'

export default function CountContainer({min, max}) {

    const [contador, setContador] = useState(0)

    const onAdd = (sign) => {
        if ( (sign === '+') && ((contador < max)) ) setContador(contador+1)
        else if ( (sign === '-') && (contador > min) ) setContador(contador-1)
    } 

    return (
        <div>
            <Count contador={contador} onAdd={onAdd} />
            <Button itemCount={contador} />
        </div>
    );
}