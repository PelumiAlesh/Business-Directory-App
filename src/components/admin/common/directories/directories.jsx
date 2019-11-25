import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';

import { server } from '../../../../services/data.service.js';
import { Card } from '../../../common/cards/Card';


export class Directories extends Component {
    state = {
        directoryData: [],
        redirect: false,
        data: {}
    }
    componentDidMount() {
        const dirData = server.getDirs();
        this.setState({
            directoryData: dirData
        });
    }
    handleClick = (data) => {
        console.log('hiiii')
        this.setState({
            redirect: true,
            data,
        })
    }
    render() {
        if(this.state.redirect) {
        return <Redirect to={{
            pathname: '/admin/edit/business',
            state: {
                businessData: this.state.data
            }
        }} />
        }
        return (
            <div className="container">
                {this.state.directoryData.map(data => {
                    return (
                        <div key={data.id} onClick={() => this.handleClick(data)}>
                        <Card
                            image={data.imgUrl}
                            name={data.title}
                            description={data.description}
                            email={data.email}
                            phone={data.phone}
                            key={data.id}
                        />
                        </div>
                    )
                })
                }
            </div>
        )
    }
}
