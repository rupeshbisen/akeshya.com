import { features } from '@/utils'
import React from 'react'

export default function Features() {
    return (
        <div className='max-w-screen-xl mx-auto p-4 mb-20'>
            <div data-aos="fade-up">
                <div className='text-3xl flex items-center justify-center font-light text-[#14279b] mb-5'>
                    <div className='h-[2px] w-12 m-3 bg-[#14279b]' />
                    <h1 className='text-gray-900 font-bold'>OUR CORE FEATURES</h1>
                    <div className='h-[2px] w-12 m-3 bg-[#14279b]' />
                </div>
                <p className='text-gray-600'>Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-9'  data-aos="fade-up" data-aos-delay="300">
                {
                    features.map(item => (
                        <div key={item.id} className='bg-gray-100 flex items-center hover:bg-green-100 h-20 p-4 rounded-sm'>
                            <div>{item.icon}</div>
                            <h1 className='text-gray-600 hover:text-[#14279b] font-semibold'>{item.title}</h1>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
