import React, {useMemo, useState} from 'react';
import {addition, diminutive, remove, dellAll} from '../../store/reducers/cartReducer';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Modal, Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Ordering from "./Ordering";

function UserCart() {
    const cart = useSelector(state => state.cart.value || []);
    const list = useSelector(state => state.product.list);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = useState(false);

    const plusProduct = (e) => {
        let id = e.target.name;
        let countProduct = +list.find(i=>i['id']===id).count;
        let countCart = cart[id];
        if(countProduct===countCart){
            handleShow();
            return false
        }
        dispatch(addition(id))
    }
    const minusProduct = (e) => {
        let id = e.target.name;
        dispatch(diminutive(id))
    }
    const deleteProduct = (e) => {
        let id = e.target.name;
        dispatch(remove(id))
    }
    const deleteAllProduct = () => {
        dispatch(dellAll())
    }

    const sumCart = useMemo(() => list.map((elem) => {
        if (cart[elem.id]) {
            return cart[elem.id] * elem['real_price']
        }
    }), [list, cart]);
    let sum = useMemo(() =>  sumCart.reduce((acc, item) => Math.floor((acc + (item || 0)) * 100) / 100, 0), [sumCart]);

    return (
        JSON.stringify(cart) !== "{}" ? <div style={{paddingTop: '100px'}}>
            <Table responsive>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Pictures</th>
                    <th>Price without</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Add</th>
                    <th>Rem</th>
                    <th>Del</th>
                </tr>
                </thead>
                <tbody>
                {
                    list.map((elem, ind) => {
                        if (cart[elem.id]) {
                                return <tr key={elem.id}>
                                            <td>{elem['name']}</td>
                                            <td>{elem['real_price']}</td>
                                            <td><img className='img-cart' src={elem['img']} alt={elem['name']}/></td>
                                            <td>{elem['price']}</td>
                                            <td>{cart[elem.id]}</td>
                                            <td>{Math.floor(cart[elem.id] * elem['real_price'] * 100) / 100}</td>
                                            <td><Button name={elem.id} variant="light" onClick={plusProduct}>+</Button></td>
                                            <td><Button name={elem.id} variant="light" onClick={minusProduct}> - </Button></td>
                                            <td><Button name={elem.id} variant="light" onClick={deleteProduct}>x</Button></td>
                                </tr>
                        }
                    })
                }
                </tbody>
            </Table>
            <div className='d-flex justify-content-between flex-wrap'>
                    <div><Button onClick={() => setModalShow(true)} style={{padding:'10px', minWidth: '140px'}} variant="light">Make an order</Button></div>
                    <div><Button onClick={deleteAllProduct} style={{padding:'10px', minWidth: '140px'}} variant="light">Delete order</Button></div>
                    <div><NavLink to="/list"><Button style={{padding:'10px', minWidth: '140px'}} variant="light">Go to list</Button></NavLink></div>
            </div>
            <div><h2 style={{color: 'blue'}}>Want to order a product for: {sum} $</h2></div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body style={{textAlign: 'center'}}>Oops, product out of stock!</Modal.Body>
            </Modal>
            <Ordering sum={sum} show={modalShow} onHide={() => setModalShow(false)} />
        </div> : <div className='d-flex justify-content-center' style={{paddingTop: '200px'}}>
            <h2>Your cart is empty, add a product!</h2>
        </div>
    )
}

export default UserCart