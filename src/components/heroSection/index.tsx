import Image from 'next/image'
import React from 'react'
import Hero from '../../../public/assest/hero-img.png'
import { heroScrollImage } from '@/utils'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
    const router = useRouter();
    return (
        <div className='w-full'>
            <div id='hero' className='max-w-screen-xl mx-auto py-4 px-4 xl:px-0'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 items-center'>
                    <div className='order-2 lg:order-1'>
                        <h1 className='text-heading text-[#14279b] font-bold' data-aos="fade-up">Grow your business with Akeshya</h1>
                        <h2 className='text-gray-600 md:text-2xl' data-aos="fade-up" data-aos-delay="400">We are team of talented website designers, developers & digital marketeers</h2>
                        <button
                            className='text-[#14279b] hover:text-white hover:bg-[#14279b] px-8 py-2 border-2 border-[#14279b] rounded-full mt-9'
                            data-aos="fade-up" data-aos-delay="800"
                            onClick={() => router.push('/#aboutus')}
                        >
                            Get Started
                        </button>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" className='order-1 lg:order-2 flex justify-center'>
                        <Image src={Hero} alt='hero image' className='lg:animate-up-down' />
                    </div>
                </div>
            </div>

            <div className=' w-full bg-green-100 '>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 items-center  mt-7 mb-14 max-w-screen-xl mx-auto py-6'>
                    {
                        heroScrollImage.map(item => (
                            <div key={item.id} className='flex justify-center'>
                                <Image src={item.path} alt={item.alt} width={100} height={100} className='grayscale hover:grayscale-0' data-aos="zoom-in" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
