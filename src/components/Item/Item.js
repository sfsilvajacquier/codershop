import React from 'react';
import { Link } from 'react-router-dom'
import './Item.css';

const Item = ({ title, thumbnail, id }) => {
    return (
        <div className="col-3  text-center">
            <div className="card mx-auto" style={{ width: "18rem" }}>
                <Link to={`/item/${id}`} className='links'>
                    <img className="card-img-top" src={thumbnail} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Item;