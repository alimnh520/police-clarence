import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

const ChildCom = ({children}) => {
    return (
        <div className="bg-[url('/body_bg.png')] bg-fixed cursor-pointer">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default ChildCom