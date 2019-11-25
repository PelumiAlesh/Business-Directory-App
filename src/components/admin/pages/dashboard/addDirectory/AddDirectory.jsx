import React, { Component } from 'react';
import { Sidebar } from '../../../common/adminLayout/Sidebar';
import { AddDirectory } from '../../../common/directories/addDirectory';

export class AddBusiness extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Sidebar />
                <div className="layout-body">
                <AddDirectory />
                </div>
            </div>
        )
    }
}