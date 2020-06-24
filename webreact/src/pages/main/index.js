// import React, { Component } from 'react';
import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css'


export default function Main() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState();
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        loadProducts();
        console.log(products);
    }, products);

    function prevPage() {
        if (page === 1) return;

        const pageNumber = page - 1;

        loadProducts(pageNumber);
    }

    function nextPage() {
        
        if (page === productInfo.pages) return;
        
        const pageNumber = page + 1;
        
        loadProducts(pageNumber);
    }


    async function loadProducts(page = 1) {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        console.log(docs);

        setProductInfo(productInfo);
        setProducts(docs);
        setPage(page);

        console.log(products);
    }


    return (
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{ product.title }</strong>
                    <p>{ product.description }</p>
                    <Link to={`/products/${product._id}`}>Details</Link>

                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={prevPage}>prev</button>
                <button disabled={page === productInfo.pages }onClick={nextPage}>next</button>
            </div>
        </div>
    )
}