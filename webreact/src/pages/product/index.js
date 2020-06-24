import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router';

import Api from '../../services/api';

import './style.css'


export default function Product() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    async function getProduct(id) {
        const response = await Api.get(`/products/${id}`);

        setProduct(response.data);
    }

    useEffect(() => {
        getProduct(id);
    }, []);


    return (
        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <p>
                URL: <a href={product.url}>{product.url}</a>
            </p>
        </div>
    )


}