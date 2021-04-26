import React, {useState} from 'react';

const ModalPopup = (props) => {
    const [check, setCheck] = useState(true);

    const disable = () => {
        setTimeout(() => {
            setCheck(false)
        }, 700)
    }

    if (!props.isView || !check) return null;
    if (props.isView && check) disable();
    return (
        <>
            {check && <div className='popup'>
                <p>Product added to cart!</p>
            </div>}
        </>
    );
};

export default ModalPopup;