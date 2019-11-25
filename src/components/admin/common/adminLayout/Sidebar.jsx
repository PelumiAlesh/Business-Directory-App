import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../../common/navbar/Navbar';

import './sidebar.css';

export class Sidebar extends Component {


    render() {
        return (
            <>
                <Navbar />
                <div className="fixed-sidebar">
                    <div className="admin-layout-header">
                        Admin
                    </div>
                    <Link to="/admin/directories">All Directories</Link>
                    <Link to="/admin/add/directory">Add directory</Link>
                </div>
            </>
        )
    }
}