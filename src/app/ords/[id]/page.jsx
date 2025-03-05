'use client'
import { QRCodeCanvas } from "qrcode.react";
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { useReactToPrint } from "react-to-print";
import { notFound, useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

const page = () => {
    const contentRef = useRef();
    const searchParams = useSearchParams();

    const allowedId = ["p=500%3A50%3A%3A%3ANO%3A%3AP50_TOKEN_ID%3A1CHABXH","p=500%3A50%3A%3A%3ANO%3A%3AP50_TOKEN_ID%3A1CHABXH%3A%3AP50_TOKEN_ID%3A1CHABXH%3A%3A500%3A50%3A%3A%3ANO%3A%3AP50_TOKEN_ID%3A1CHABXH%3A%3AP50_TOKEN_ID%3A1CHABXH"]

    const topView = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    useEffect(() => {
        if (window.location.href === "https://pcc.police.gov.bdl.tax/ords/f?p=500:50:::NO::P50_TOKEN_ID:1CHABXH::P50_TOKEN_ID:1CHABXH::500:50:::NO::P50_TOKEN_ID:1CHABXH::P50_TOKEN_ID:1CHABXH") {
            window.location.href = "https://pcc.police.gov.bdl.tax/ords/f?p=500:50:::NO::P50_TOKEN_ID:1CHABXH";
        }
    }, []);

    const handlePrint = useReactToPrint({ contentRef });

    if (!allowedId.includes(searchParams.toString())) {
        notFound();
    }

    return (
        <div className={`w-full h-auto flex flex-col text-black bg-[#e3e2e0] relative pb-[70px] main-contain`}>
            <div className='w-[81%] h-[88px] mt-[15px] border bg-white border-zinc-400 rounded-[2px] self-center flex items-center justify-start px-4 relative before:absolute before:w-full before:h-5 before:bg before:bottom-0 before:left-0 shadow-[0_2px_3px_#9b9a9a]'>
                <div onClick={handlePrint}>
                    <img src='/printer_64.gif' alt='print' className='h-[50px]' />
                </div>
            </div>

            <div className="w-full flex justify-center" ref={contentRef}>
                <div className='w-[725px] self-center mt-4 flex flex-col items-center justify-start mr-5'>
                    <img src='/bangladesh_govt_logo.png' className='h-[124px]' />
                    <p className='text-[27px] font-bold text-center mt-5 leading-[26px]'>GOVERNMENT OF THE PEOPLE'S REPUBLIC OF <br />
                        BANGLADESH</p>

                    <div className='w-full h-40 flex justify-between items-start mt-3'>
                        <div className="h-full flex flex-col items-center justify-center">
                            <div className="w-[130px] h-36 bg-white flex items-center justify-center relative p-3">
                                <div className="w-full h-full">
                                    <QRCodeCanvas value="https://pcc.police.gov.bdl.tax/ords/f?p=500:50:::NO::P50_TOKEN_ID:1CHABXH::P50_TOKEN_ID:1CHABXH::500:50:::NO::P50_TOKEN_ID:1CHABXH::P50_TOKEN_ID:1CHABXH" size="100" className="w-full h-full" />
                                </div>
                            </div>
                            <p className="mt-1">Ref No. 1CHABXH</p>
                        </div>
                        <div className="text-center text-lg text-black font-medium flex flex-col items-center justify-start gap-y-3 ml-8">
                            <p>Adamdighi Police Station</p>
                            <p>Bogura</p>
                        </div>
                        <p className="self-end">Dated: 25-FEB-2025</p>
                    </div>
                    <div className="w-fit mt-4 flex flex-col items-center justify-start">
                        <p className="text-black text-[23px] font-bold">POLICE CLEARANCE CERTIFICATE</p>

                        <p className="leading-7 text-lg font-normal mt-10 text-justify break-words">The character and antecedents of Mr. <span className="text-black font-bold">MD ZAKIR HOSSAIN</span> Son of <span className="text-black font-bold">MD SARAPAT ALI</span> Village/ Area: <span className="text-black font-bold">BIHIGRAM</span>, P/O: <span className="text-black font-bold">BIHIGRAM</span>, Post Code: <span className="text-black font-bold">5890</span>, P/S: <span className="text-black font-bold">Adamdighi</span>, District: <span className="text-black font-bold">Bogura</span> holder of Bangladesh International Passport No. <span className="text-black font-bold">A15807934</span> Issued at <span className="text-black font-bold">DIP/DHAKA</span> on <span className="text-black font-bold">24 MAY 2024</span> have been verified and there is no adverse information against him/her on record.</p>

                        <p className="mt-10 text-lg">This certificate is issued in pursuance of Ministry of Home Affairs Memo No. Nirdesh-2/75-Pt. 2152-Bohi(1), dated the 19th May, 1977.</p>

                        <div className="w-full mt-10 flex items-center justify-between">
                            <p className="">Superintendent of Police <br /> District Special Branch Bogura</p>
                            <p>Seal.</p>
                            <p className="text-end">Officer-in-Charge. <br /> Adamdighi Police Station.</p>
                        </div>

                        <p className="italic text-red-500 mt-12 text-sm">This is a digital copy of the unsigned certificate issued by Bangladesh Police Online Police Clearance Management System. The printed original must contain seal and signature of the designated officials.</p>
                    </div>
                </div>
            </div>
            <button className="size-20 self-center mt-12 relative hover:-top-[14px] transition-all duration-100 flex items-center justify-center hover:shadow-[0_2px_3px_#c8c7c5] top-0 rounded-full border bg-white border-[#c8c7c2b2] text-4xl text-gray-200 cursor-pointer" onClick={topView}>
                <IoIosArrowUp />
            </button>
        </div>
    )
}

export default page