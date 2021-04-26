import React, {useEffect, useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { removeCard } from '../store/reducers/productReducer';
import { addition } from '../store/reducers/cartReducer';
import {NavLink} from "react-router-dom";

const ProductCard = () => {
    const card = useSelector(state => state.product.card );
    const list = useSelector(state => state.product.list );
    const cart = useSelector(state => state.cart.value || [] );
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        return () => {
            dispatch(removeCard());
        };
    },[dispatch])

    const handleCart = e =>{
        let id = e.target.id;
        let countProduct = +list.find(i=>i['id']===id).count;
        let countCart = cart[id];
        if(countProduct===countCart){
            handleShow();
            return false
        }
        dispatch(addition(id))
    }

    return (
        <div className='d-flex justify-content-center' style={{ padding: '40px' }}>
                <Card style={{ maxWidth: '32rem' }}>
                    <Card.Img variant="top" src={card.img} style={{ width: '400px' }} />
                    <Card.Body>
                        <Card.Title>{card.name}</Card.Title>
                        <Card.Text>Price without taxes: {card.price}</Card.Text>
                        <Card.Text>Real price: {card.real_price}</Card.Text>
                        <Card.Text>{card.allText}</Card.Text>
                        <div className='d-flex justify-content-between'>
                            <div>
                                {/*<OverlayTrigger*/}
                                {/*    trigger="click"*/}
                                {/*    key='top'*/}
                                {/*    placement='top'*/}
                                {/*    overlay={*/}
                                {/*        <Popover id={`popover-positioned-top`}>*/}
                                {/*            <Popover.Content>*/}
                                {/*                You added a product to your cart*/}
                                {/*            </Popover.Content>*/}
                                {/*        </Popover>*/}
                                {/*    }*/}
                                {/*>*/}
                                <Button variant="light" id={card.id} onClick={handleCart}>Add to cart</Button>
                                {/*</OverlayTrigger>*/}
                                <NavLink style={{paddingLeft:'20px'}} to="/list"><Button variant="light" >Go to list</Button></NavLink>
                            </div>

                            <NavLink to="/cart"><Button variant="light" ><img style={{width: '30px'}} src="/cart.png" alt="cart"/></Button> </NavLink>

                        </div>
                    </Card.Body>
                </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>Oops, product out of stock!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProductCard;