import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full flex flex-col fixed top-0 z-20'>
            <div className='w-full h-[81px] bg-white flex justify-start px-[15px] py-[3px] '>
                <img src='/PCMS_app_logo.png' alt='PCMS_app_logo' className='h-full -mt-[3px]' />
            </div>
            <nav className='w-full h-[50px] bg-[#164677] flex items-center justify-start'>
                <ul className='h-full text-white flex items-center justify-center text-lg font-medium px-px'>
                    <li className='h-full flex items-center justify-center hover:bg-blue-500'>
                        <Link href='' className='h-full flex items-center justify-center px-[13px]'>Home</Link>
                    </li>
                    <li className='h-full flex items-center justify-center hover:bg-blue-500'>
                        <Link href='' className='h-full flex items-center justify-center px-[13px]'>Apply</Link>
                    </li>
                    <li className='h-full flex items-center justify-center hover:bg-blue-500'>
                        <Link href='' className='h-full flex items-center justify-center px-[13px]'>My Account</Link>
                    </li>
                    <li className='h-full flex items-center justify-center hover:bg-blue-500'>
                        <Link href='' className='h-full flex items-center justify-center px-[13px]'>Contact us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header