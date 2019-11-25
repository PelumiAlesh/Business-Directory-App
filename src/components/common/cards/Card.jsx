import React, {Component} from 'react';

import './card.css';

export class Card extends Component {
    state = {
        directoryData: [],
    }
    render() {
        const { image, name, description, phone, email, showModal} = this.props;
        return (
            <div onClick={showModal} className="card-container">
                <p className="img-container">
                    <img src={image} alt="business" />
                </p>
                <div className="body">
                    <p className="name">{name}</p>
                    <p className="description">{description}</p>
                    <p><a href="tel:0903232342" className="phone">&#x260E;  {phone}</a></p>
                    <p><a href="mailto: email@example.com" className="email">&#9859;  {email}</a></p>
                </div>
            </div>
        )
    }
}