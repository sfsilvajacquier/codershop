import React, { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${id}?include_attributes=all`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="row d-flex justify-content-center align-items-center bg-danger">
            {loading ? <p>cargando</p> : ''}
            <div className='col-12 d-flex justify-content-center bg-danger vh-100' >
                <ItemDetail product={products} />
            </div>
        </div>
    );
}

export default ItemDetailContainer;