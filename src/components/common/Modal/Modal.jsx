import React from 'react';
import { Link } from "react-router-dom";

import './modal.css';

export const ModalComponent = ({ show, modalClose, image, description, name, webUrl, email, phone }) => {
    return (
        <Modal show={show} handleClose={modalClose}>
            <div className="business-img">
                <img src={image} alt="business" />
            </div>
            <div className="second-div">
                <p className="modal-name">{name}</p>
                <p className="modal-desc">{description}</p>
            </div>
            <div className="contact-div">
                <Link to={webUrl} className="webUrl">{webUrl}</Link>
                <p><a href="tel:0903232342" className="phone">&#x260E;  {phone}</a></p>
                <p><a href="mailto: email@example.com" className="email">&#9859;  {email}</a></p>
            </div>
        </Modal>
    )
};

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-flex' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
            {children}
            <button
                onClick={handleClose}
                className="closeModal-btn"
            >
                X
            </button>
            </section>
        </div>
    );
};
