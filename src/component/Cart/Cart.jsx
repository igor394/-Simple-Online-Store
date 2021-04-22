import React from 'react';
import {Table} from "react-bootstrap";
import db from '../../db/db.json'


function Cart(props) {



    return (

        <Table responsive>
            <thead>
            <tr>
                <th>#</th>
                {db.map((_, index) => (
                    <th key={index}>Table heading</th>
                ))}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                {db.map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
            </tr>
            <tr>
                <td>2</td>
                {db.map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
            </tr>
            <tr>
                <td>3</td>
                {db.map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                ))}
            </tr>
            </tbody>
        </Table>
    );

};

export default Cart;