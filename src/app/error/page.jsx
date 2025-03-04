import { FiAlertTriangle } from "react-icons/fi";
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-[#e3e2e0]'>
            <h1 className='text-4xl font-semibold flex items-center justify-center gap-x-3'> <span className="text-orange-300 text-5xl mb-2"><FiAlertTriangle /></span> 404 page not found</h1>
        </div>
    )
}

export default page