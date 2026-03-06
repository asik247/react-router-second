import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    const navgation = useNavigation()
    const isNavgation = navgation.state ==='loading'
    return (
        <div className='flex flex-col max-h-screen'>
            <Navbar></Navbar>

            <div className='h-100vh'>
                {
                    isNavgation && <h1 className='font-bold text-2xl'>Loadding....</h1>
                }
                 <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;