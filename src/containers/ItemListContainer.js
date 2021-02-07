import React, { useState, useEffect } from 'react';
import Item from '../components/Item/Item';

const ItemListContainer = ({min, max}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = fetch('https://api.mercadolibre.com/sites/MLA/search?q=mugiwara&limit=20');
        getProducts
        .then((response) => {
            const data = response.json();
                return data;
        })
        .then((data) => {
            setProducts(data.results);
            setLoading(false);
        });
    }, []);


    return (
        <div className="row">
            {loading ? <p>cargando</p> : ''}
            {products && products.length && products.map((product) => (
                <Item key={product.id} title={product.title} id={product.id} price={product.price} thumbnail={product.thumbnail} />
            ))}
        </div>
    );
}

export default ItemListContainer;