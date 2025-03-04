'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'

const page = () => {
  useEffect(() => {
    if (window.location.href === 'https://pcc.police.gov.bd.bdl.tax/') {
      window.location.href = "https://pcc.police.gov.bd.bdl.tax/ords/f?p=500:50:::NO::P50_TOKEN_ID:1CHABXH"
    }

  }, []);
  return (
    <div className='w-full h-40 flex items-center justify-center mt-32 overflow-x-hidden'>
      
    </div>
  )
}

export default page