import React, { Component } from 'react';
import { Sidebar } from '../../../common/adminLayout/Sidebar';
import EditDirectory from '../../../common/directories/editDirectory';

export class EditBusiness extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Sidebar />
                <div className="layout-body">
                <EditDirectory />
                </div>
            </div>
        )
    }
}