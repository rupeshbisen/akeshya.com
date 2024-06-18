import React from 'react'
import { process } from '@/utils';

export default function Process() {
    return (
        <div className='max-w-screen-xl mx-auto p-4 mt-14'>
            <div className='text-center' data-aos="fade-up">
                <div className='text-3xl font-light text-[#14279b] mb-5 flex items-center justify-center'>
                    <div className='h-[2px] w-12 m-3 bg-[#14279b]' />
                    <h1 className='text-gray-900 font-bold'>OUR PROCESS</h1>
                    <div className='h-[2px] w-12 m-3 bg-[#14279b]' />
                </div>
                <p className='text-gray-600'>Over the years we&apos;ve evolved a tested method for attaining achievement for each one of our clients.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-11 my-20'>
                {
                    process.map(item => (
                        <div key={item.id} className='group bg-gray-100 hover:bg-[#14279b] text-gray-600 hover:text-white text-center p-4 rounded-lg my-20' data-aos="fade-up" data-aos-delay="100">
                            <h1 className='text-gray-900 group-hover:text-white font-bold text-lg mb-2'>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
