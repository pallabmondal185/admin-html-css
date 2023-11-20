import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Index = () => {
    const [isCloseSidebar, setIsCloseSidebar] = useState(true);


    return (
        <div>
            <Header setIsCloseSidebar={setIsCloseSidebar} />
            <Sidebar isCloseSidebar={isCloseSidebar} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Index
