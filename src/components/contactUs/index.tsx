import React from 'react'
import { LuMapPin } from "react-icons/lu";
import { RiMailSendLine, RiPhoneLine } from "react-icons/ri";

export default function ContactUs() {
    return (
        <div className='max-w-screen-xl mx-auto p-4 text-sm'>
            <div data-aos="fade-up">
                <div className='text-3xl flex items-center justify-center text-[#14279b] mb-11 font-light'>
                    <div className='h-[2px] w-12 m-3 bg-[#14279b]' />
                    <h1 className='text-gray-900 font-bold'>CONTACT US</h1>
                    <div className='h-[2px] w-12 m-3 bg-[#14279b]' />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 mb-12' >
                <div className='lg:col-span-4 md:col-span-6'  data-aos="fade-up " data-aos-delay="100 ">
                    <h2 className='text-[#14279b] text-3xl mb-2 font-semibold'>Akeshya</h2>
                    <p className='text-gray-500'>Designers, developers & marketeers capable of delivering solutions according to your needs,</p>
                </div>
                <div className='text-gray-600 lg:col-span-3 md:col-span-6' data-aos="fade-up " data-aos-delay="200 ">
                    <div className='flex'>
                        <LuMapPin className='text-[#14279b] text-5xl mr-4' />
                        <p className='mb-7'>26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>
                    </div>
                    <div className='flex'>
                        <RiMailSendLine className='text-[#14279b] text-3xl mr-4' />
                        <p className='mb-7'>info@akeshya.com</p>
                    </div>
                    <div className='flex'>
                        <RiPhoneLine className='text-[#14279b] text-3xl mr-4' />
                        <p className='mb-7'>+91 94942 40922</p>
                    </div>
                </div>
                <div className='lg:col-span-5 md:col-span-12' data-aos="fade-up " data-aos-delay="300">
                    <div>
                        <input type='text' className='w-full p-3 border mb-4' placeholder='Your Name' />
                        <input type='email' className='w-full p-3 border mb-4' placeholder='Your Email' />
                        <input type='text' className='w-full p-3 border mb-4' placeholder='Subject' />
                        <textarea rows={5} className='w-full p-3 border mb-4' placeholder='Message' />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-[#14279b] hover:bg-[#57aae1] text-white py-3 px-5 text-base rounded-full' >Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
