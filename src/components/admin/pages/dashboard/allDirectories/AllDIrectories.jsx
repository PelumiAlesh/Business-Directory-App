import React, { Component } from 'react';
import { Sidebar } from '../../../common/adminLayout/Sidebar';
import { Directories } from '../../../common/directories/directories';

import './allDirectories.css';

export class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Sidebar />
                <div className="layout-body">
                <Directories />
                </div>
            </div>
        )
    }
}