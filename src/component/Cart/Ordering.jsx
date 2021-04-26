import React, {useEffect, useState} from 'react';
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap';
const ADRES = 'Select office of ';


const Ordering = (props) => {
    const [total, setTotal] = useState(props.sum);
    const [number, setNumber] = useState(null);
    const [checkDeliv, setCheckDeliv] = useState(false)
    const [develi, setDeveli] = useState('');

    useEffect(() => {
        setNumber(Math.floor(Math.random() * (1000 - 1)) + 1)
    }, [])

    const deliveriSeting = (e) => {
        e.preventDefault();
        let select = e.target.elements.contact.value;
        setCheckDeliv(true)
        switch (select) {
            case 'ukr':
                setTotal(prev => prev + 26)
                setDeveli(ADRES + ' UKRPOST')
                break;
            case 'new':
                setTotal(prev => prev + 55)
                setDeveli(ADRES + ' NEWPOST')
                break;
            case 'time':
                setTotal(prev => prev + 35)
                setDeveli(ADRES + ' INTIME')
                break;
            default:
                console.log('error');
        }
    }

    return (
        <Modal animation={false}
               {...props}
               size='lg'
               aria-labelledby='contained-modal-title-vcenter'
               centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Place an order #{number}, for the total cost {total} $
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Pick up the goods yourself from one of our stores</h4>
                <ul style={{paddingLeft: '50px'}}>
                    <li>Kiev, Kreshatik str, 20</li>
                    <li>Dnepr, Titova str, 38</li>
                    <li>Zaporozhie, Sobornyi str, 163</li>
                </ul>
            </Modal.Body>
            <Modal.Body>
                <h4>Or arrange delivery</h4>
                <form onSubmit={deliveriSeting}>
                    <p>Please select your method:</p>
                    <div>
                        <div>
                            <input type='radio' value='ukr' name='contact'/>
                            <label htmlFor='contactChoice1'>Ukr Post (+26$)</label>
                        </div>
                        <div>
                            <input type='radio' value='new' name='contact'/>
                            <label htmlFor='contactChoice1'>New Post (+55$)</label>
                        </div>
                        <div>
                            <input type='radio' value='time' name='contact'/>
                            <label htmlFor='contactChoice1'>In Time (+35$)</label>
                        </div>
                    </div>
                    <div>
                        <button type='submit'>Delivery settings</button>
                    </div>
                </form>
            </Modal.Body>
            {checkDeliv && <Modal.Body>

                <InputGroup className='mb-3'>
                    <FormControl
                        placeholder={develi}
                        aria-label='Recipient s username'
                        aria-describedby='basic-addon2'
                    />
                    <InputGroup.Append>
                        <Button variant='outline-secondary'>Send an order</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Modal.Body>}
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Ordering;