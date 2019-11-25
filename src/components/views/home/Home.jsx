import React, {Component} from 'react';

import { Navbar } from '../../common/navbar/Navbar';
import { Card } from '../../common/cards/Card';
import { data } from '../../../services/data.service.js';
import { ModalComponent } from '../../common/Modal/Modal';

import './home.css';

export class Home extends Component {
    state = {
        directoryData: [],
        categories: [],
        filterKeyword: '',
        modalOpen: false,
        modalData: {},
    }
    
    componentDidMount() {
        const dirData = data.getData();
        this.setState({
            directoryData: dirData.directories,
            categories: dirData.categories
        });
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            directoryData: nextProps.directories
        })
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = () => {
        let currentData = [];
        let newData = [];

        if(this.state.filterKeyword !== "") {
            currentData = data.getData().directories;
            newData = currentData.filter(item => {
                const itemWords = item.title + item.des
                const lc = itemWords.toLowerCase();
                console.log('word', this.state.filterKeyword)
                const filterKeywordLowecase = this.state.filterKeyword.toLowerCase();
                return lc.includes(filterKeywordLowecase);
            })
        } else {
            newData = data.getData().directories;
        }
        this.setState({
            directoryData: newData,
        })
    }
    toggleModal = (value, data={}) => {
        this.setState({
            modalOpen: value,
            modalData: data,
        })
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="header">
                    <div className="header-container">
                        <h1>Connect With Local Businesses Pretty Much For Anything In Nigeria</h1>
                        <form className="search_form">
                            <div className="input-group">
                            <input type="text" className="form-control" name="filterKeyword" onChange={this.onChange} placeholder="Search our business directory" />
                            <span className="input-group-btn">
                                <button className="btn btn-default" onClick={this.handleSubmit} type="button">Search</button>
                            </span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="main-body">
                    {this.state.directoryData.map(data => {
                        return (
                            <Card 
                            image={data.imgUrl} 
                            name={data.title}
                            description={data.description}
                            email={data.email}
                            phone={data.phone}
                            key={data.id}
                            showModal={() => this.toggleModal(true, data)}
                            />
                        )
                    })
                    }
                    {this.state.directoryData.length === 0 ? 'No Business found' : null}
                </div>
                <ModalComponent 
                    modalClose={() => this.toggleModal(false)}
                    show={this.state.modalOpen}
                    image={this.state.modalData.imgUrl}
                    description={this.state.modalData.description}
                    name={this.state.modalData.title}
                    phone={this.state.modalData.phone}
                    email={this.state.modalData.email}
                    webUrl={this.state.modalData.website}
                />

            </React.Fragment>
        )
    }
}