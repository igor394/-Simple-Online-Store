import React, {useEffect} from 'react';
import {Button, Card, Popover,OverlayTrigger} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { removeCard } from '../store/reducers/productReducer';
import { addition } from '../store/reducers/cartReducer';
import {NavLink} from "react-router-dom";

const ProductCard = () => {
    const card = useSelector(state => state.product.card );
    const dispatch = useDispatch();

    useEffect(()=>{
        return () => {
            dispatch(removeCard());
        };
    },[])

    const handleCart = e =>{
        dispatch(addition(e.target.id))
    }

    return (
        <div className='d-flex justify-content-center' style={{ padding: '40px' }}>
            <div>
                <Card style={{ maxWidth: '32rem' }}>
                    <Card.Img variant="top" src={card.img} style={{ width: '400px' }} />
                    <Card.Body>
                        <Card.Title>{card.name}</Card.Title>
                        <Card.Text>Price without taxes: {card.price}</Card.Text>
                        <Card.Text>Real price: {card.real_price}</Card.Text>
                        <Card.Text>{card.allText}</Card.Text>
                        <div className='d-flex justify-content-between'>
                                <OverlayTrigger
                                    trigger="click"
                                    key='top'
                                    placement='top'
                                    overlay={
                                        <Popover id={`popover-positioned-top`}>
                                            <Popover.Content>
                                                You added a product to your cart
                                            </Popover.Content>
                                        </Popover>
                                    }
                                >
                                    <Button variant="light" id={card.id} onClick={handleCart}>Add to cart</Button>
                                </OverlayTrigger>
                            <NavLink to="/cart"><Button variant="light" >Go to cart</Button> </NavLink>
                            <NavLink to="/list"><Button variant="light" >Go to list</Button></NavLink>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ProductCard;