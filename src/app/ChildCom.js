import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

const ChildCom = ({children}) => {
    return (
        <div className="mt-32">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default ChildCom