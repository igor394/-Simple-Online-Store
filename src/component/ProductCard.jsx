import React from 'react';
import db from "../db/db.json";
import {Button, Card} from "react-bootstrap";

const ProductCard = () => {
    const item = db[0]
    return (
        <div className='d-flex justify-content-center' style={{padding: '18px'}}>
            <div>
                <Card style={{ maxWidth: '38rem'}}>
                    <Card.Img variant="top" src={item.img} style={{width: '600px'}}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.allText}</Card.Text>
                        <Button variant="light" href='/cart'></Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default ProductCard;