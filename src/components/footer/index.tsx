import React from 'react'

export default function Footer() {
    return (
        <div className='footer-box-shadow w-full pb-3'>
            <div className='max-w-screen-xl mx-auto py-4 px-4 md:px-0'>
                <div className='flex items-center justify-between text-sm'>
                    <div>
                        <p className='text-gray-600 pt-5 md:pt-0'>© Copyright <span className='font-semibold text-gray-900'>Akeshya.</span> All Rights Reserved</p>
                    </div>
                    <div className='flex'>
                        <p className='text-[#14279b] hover:text-blue-300 p-4'>Terms and conditions</p>
                        <p className='text-[#14279b] hover:text-blue-300 p-4'>Refund policy</p>
                        <p className='text-[#14279b] hover:text-blue-300 p-4'>Privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
