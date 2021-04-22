import React from 'react';
import {NavLink} from 'react-router-dom'
import db from '../db/db.json'
import {Card, Button} from "react-bootstrap";

const ProductList = () => {
    return (
        <div className='d-flex justify-content-between' style={{padding: '10px'}}>
            {db.map((item, index)=>
                <Card style={{ width: '14rem'}}>
                <Card.Img variant="top" src={item.img} style={{width: '200px'}}/>
                <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                    <NavLink to='/card'> <Button variant="light">Go somewhere</Button></NavLink>
                </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default ProductList;