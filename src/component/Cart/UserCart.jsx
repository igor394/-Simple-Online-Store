import React,{useMemo} from 'react';
import {addition, diminutive, remove} from '../../store/reducers/cartReducer';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function UserCart() {
    const cart = useSelector(state => state.cart.value);
    const list = useSelector(state => state.product.list);
    const dispatch = useDispatch();

    const plusProduct = (e) => {
        dispatch(addition(e.target.name))
    }
    const minusProduct = (e) => {
        dispatch(diminutive(e.target.name))
    }
    const deleteProduct = (e) => {
        dispatch(remove(e.target.name))
    }

    const sumCart = useMemo(() => list.map((elem) => {
        if (cart[elem.id]) {
            return cart[elem.id] * elem['real_price']
        }
    }));
    let sum = useMemo(() =>  sumCart.reduce((acc, item) => {
        return Math.floor((acc + (item || 0)) * 100) / 100;
    }, 0));

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
                            {
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
                        }
                    })
                }
                </tbody>
            </Table>
            <div className='d-flex justify-content-between'>
                <div><h2 style={{color: 'blue'}}>Want to order a product for: {sum} $</h2></div>
                <Button variant="light">Make an order</Button>
                <NavLink to="/list"><Button variant="light">Go to list</Button></NavLink>
            </div>
        </div> : <div className='d-flex justify-content-center ' style={{paddingTop: '200px'}}>
            <h2>Your cart is empty, add a product!</h2>
        </div>
    )
}

export default UserCart