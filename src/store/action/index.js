import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectProduct} from '../reducers/productReducer';
import {minus, delet, selectCart} from '../store/cartSlice';


// export default function CartList() {
//     const product = useSelector(selectProduct);
//     const cart = useSelector(selectCart);
//     const dispatch = useDispatch();
//
//     const goodObj = goods.reduce((acc, item) => {
//         acc[item['articul']] = item;
//         return acc;
//     }, {});

    export default function clickHandler = (event) => {
        event.preventDefault();
        let targ = event.target;
        switch (targ.classList.value) {
            case 'minus-good btn btn-primary':
                dispatch(minus(targ.getAttribute('data-key')));
                break;
            case 'del-good btn btn-primary':
                dispatch(delet(targ.getAttribute('data-key')));
                break;
            default:
                return true;
        }
    };
