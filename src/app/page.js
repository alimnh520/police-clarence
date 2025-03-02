'use client'
import { QRCodeCanvas } from "qrcode.react";
import Link from 'next/link'
import React, { useRef } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { useReactToPrint } from "react-to-print";

const page = () => {

  const topView = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const contentRef = useRef();

  const handlePrint = useReactToPrint({ contentRef });
  return (
    <div className='w-full h-auto flex flex-col bg-[#e3e2e0] relative mt-32 pb-[70px] main-contain'>

      <div className='w-[81%] h-[88px] mt-[15px] border bg-white border-zinc-400 rounded-[2px] self-center flex items-center justify-start px-4 relative before:absolute before:w-full before:h-5 before:bg before:bottom-0 before:left-0 shadow-[0_2px_3px_#9b9a9a]'>
        <div onClick={handlePrint}>
          <img src='/printer_64.gif' alt='print' className='h-[50px]' />
        </div>
      </div>

      <div className='w-[780px] self-center mt-4 flex flex-col items-center justify-start' ref={contentRef}>
        <img src='/bangladesh_govt_logo.png' className='h-[124px]' />
        <p className='text-[#393938] text-[27px] font-bold text-center mt-5 leading-[26px]'>GOVERNMENT OF THE PEOPLE'S REPUBLIC OF <br />
          BANGLADESH</p>

        <div className='w-full h-40 flex justify-between items-start mt-3'>
          <div className="h-full flex flex-col items-center justify-center">
            <div className="size-36 bg-white flex items-center justify-center">
              <QRCodeCanvas value="" size="130" />
            </div>
            <p className="mt-1">Ref No. 1CHABXH</p>
          </div>
          <div className="text-center text-lg text-[#393938] font-medium flex flex-col items-center justify-start gap-y-3 ml-8">
            <p>Adamdighi Police Station</p>
            <p>Bogura</p>
          </div>
          <p className="self-end">Dated: 02-FEB-2025</p>
        </div>
        <div className="w-fit mt-4 flex flex-col items-center justify-start">
          <p className="text-[#393938] text-[24px] font-bold">POLICE CLEARANCE CERTIFICATE</p>

          <p className="leading-7 text-lg font-normal">The character and antecedents of Mr. <span className="text-[#393938] text-[16px] font-bold">MD JAKIR HOSSAIN</span> Son of <span className="text-[#393938] text-[16px] font-bold">MD SARAPAT ALI</span> Village/ Area: <span className="text-[#393938] text-[16px] font-bold">BIHIGRAM</span>, P/O: <span className="text-[#393938] text-[16px] font-bold">BIHIGRAM</span>, Post Code: <span className="text-[#393938] text-[16px] font-bold">5890</span>, P/S: <span className="text-[#393938] text-[16px] font-bold">Adamdighi</span>, District: <span className="text-[#393938] text-[16px] font-bold">Bogura</span> holder of Bangladesh International Passport No. <span className="text-[#393938] text-[16px] font-bold">A11560290</span> Issued at <span className="text-[#393938] text-[16px] font-bold">DIP/DHAKA</span> on <span className="text-[#393938] text-[16px] font-bold">15-JAN-25</span> have been verified and there is no adverse information against him/her on record.</p>

          <p className="mt-10 text-lg">This certificate is issued in pursuance of Ministry of Home Affairs Memo No. Nirdesh-2/75-Pt. 2152-Bohi(1), dated the 19th May, 1977.</p>

          <div className="w-full mt-10 flex items-center justify-between">
            <p className="">Superintendent of Police <br /> District Special Branch Bogura</p>
            <p>Seal.</p>
            <p className="text-end">Officer-in-Charge. <br /> Adamdighi Police Station.</p>
          </div>

          <p className="italic text-red-500 mt-12 text-sm">This is a digital copy of the unsigned certificate issued by Bangladesh Police Online Police Clearance Management System. The printed original must contain seal and signature of the designated officials.</p>
        </div>
      </div>
      <button className="size-20 self-center mt-12 relative hover:-top-[14px] transition-all duration-100 flex items-center justify-center hover:shadow-[0_2px_3px_#c8c7c5] top-0 rounded-full border bg-white border-[#c8c7c2b2] text-4xl text-gray-200 cursor-pointer" onClick={topView}>
        <IoIosArrowUp />
      </button>
    </div>
  )
}

export default page