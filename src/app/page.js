import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-40 flex items-center justify-center mt-32'>
      <Link href="/ords/f?p=500:50:::NO::P50_TOKEN_ID:1CHABXH::P50_TOKEN_ID:1CHABXH::500:50:::NO::P50_TOKEN_ID:1CHABXH::P50_TOKEN_ID:1CHABXH" className='px-4 py-1 bg-blue-600 text-white rounded-md'>Go to see</Link>
    </div>
  )
}

export default page