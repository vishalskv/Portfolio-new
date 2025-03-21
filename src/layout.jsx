import React from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import { Outlet } from 'react-router-dom';
import "./App.css"

const Layout = () => {
    return (
        <div className='container-fluid main-container'>
            <div className='row'>
                <div className='col-12'>

                    <Header />
                </div>
                <div className='row p-5'>
                    <div className='col-4'>

                        <Sidebar />
                    </div>
                    <div className='col-8'>

                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout