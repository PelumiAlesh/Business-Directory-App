import React, { Component } from 'react';


import InputField from '../../../common/form/InputField';
import { data } from '../../../../services/data.service';

export class AddDirectory extends Component {
    state = {
            name: '',
            email: '',
            phone: '',
            description: '',
            imageUrl: '',
            webUrl: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        data.createBusiness(this.state);
        alert('Business Added Successfully')
    }
    onChange = (e) => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    render() {
        const { name, email, phone, description, imageUrl, webUrl } = this.state;
        return (
            <div className="container">
                <div>
                <p id="heading">Create a Business </p>
                <form onSubmit={this.handleSubmit}>
                <InputField 
                    type="text"
                    value={name}
                    id="name-input"
                    onChange={this.onChange}
                    name="name"
                    labelName="Name"
                    className="form-input"
                    required
                />
                <div className="input-wrap">
                <label htmlFor='email-description'>Description</label>
                <textarea
                    value={description}
                    id="email-description"
                    name="description"
                    onChange={this.onChange}
                    cols={52}
                    row={50}
                    required
                />
                </div>
                <InputField 
                    type="email"
                    value={email}
                    id="email-input"
                    onChange={this.onChange}
                    name="email"
                    labelName="Email"
                    className="form-input"
                    required
                />
                <InputField 
                    type="tel"
                    value={phone}
                    id="phone-input"
                    onChange={this.onChange}
                    name="phone"
                    labelName="Phone"
                    className="form-input"
                    required
                />
                <InputField 
                    type="text"
                    value={webUrl}
                    id="webUrl-input"
                    onChange={this.onChange}
                    name="webUrl"
                    labelName="Web Url"
                    className="form-input"
                    required
                />
                <InputField 
                    type="text"
                    value={imageUrl}
                    id="imageUrl-input"
                    onChange={this.onChange}
                    name="imageUrl"
                    labelName="Image Url"
                    className="form-input"
                    required
                />
                <button className="btn" id="submit-btn" type="submit" value="Create Business">Create Business</button>
                </form>
                </div>
            </div>
        )
    }
}
