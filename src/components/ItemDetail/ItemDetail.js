import React from 'react';
import './ItemDetail.css';
import CountContainer from '../../containers/CountContainer'

const ItemDetail = ({ product }) => {
    
    return (
        <div className="col-3  text-center">
            <div className="card card-detail mx-auto" style={{ width: "18rem" }}>               
                <img className="card-img-top" src={product.thumbnail} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Id: {product.id}<br />Price: ${product.price}</p>
                    <CountContainer min='0' max='10'/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;