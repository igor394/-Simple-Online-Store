import React from 'react';
import { NavLink } from 'react-router-dom'
import { Card, Button } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { showCard } from '../store/reducers/productReducer';

const ProductList = () => {
    const products = useSelector(state => state.product.list );
    const dispatch = useDispatch();

    const addCardProduct = (e) => {
        dispatch(showCard(products.find(i=> i['id']===e.target.id)))
    }

    return (
        <div className='d-flex justify-content-start flex-wrap' style={{ padding: '20px' }}>
            {products.map((item) =>
                <Card key={item.id} style={{ width: '14rem', margin: '15px' }}>
                    <Card.Img variant="top" src={item.img} style={{ width: '200px', paddingLeft: '20px', paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.text}</Card.Text>
                        <NavLink to='/card'> <Button id={item.id} onClick={addCardProduct} variant="light">Go to product</Button></NavLink>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default ProductList;