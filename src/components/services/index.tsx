import { service } from '@/utils'
import React from 'react'

export default function Services() {
    return (
        <div id='services' className='max-w-screen-xl mx-auto p-7 md:p-4'>
            <div className='text-center mb-9 mt-20' data-aos="fade-up">
                <div className='text-3xl font-light text-[#14279b] mb-5 flex items-center justify-center'>
                    <div className='h-[2px] w-12 m-3 bg-[#14279b]' />
                    <h1 className='text-gray-900 font-bold'>SERVICES</h1>
                    <div className='h-[2px] w-12 m-3 bg-[#14279b]' />
                </div>
                <p className='text-gray-600'>Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.</p>
            </div>

            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        service.map(item => (
                            <div key={item.id} className='group icon-box  text-gray-600 hover:text-white shadow-xl rounded-lg p-6' data-aos="fade-up" data-aos-delay="100">
                                <div className='bg-[#14279b] group-hover:bg-white h-16 w-16 rounded-full flex items-center justify-center mb-5'>
                                    <div className="text-4xl text-white group-hover:text-[#14279b]">{item.icon}</div>
                                </div>
                                <h1 className='text-gray-900 group-hover:text-white mb-3 font-semibold'>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
