import Image from 'next/image'
import About from '../../../public/assest/counts-img.svg'
import { BsGlobe } from "react-icons/bs";
import { BsEmojiSmile, BsJournalRichtext } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import NumberTicker from '@/commonComponents/NumberTicker';
import { RiCheckDoubleLine } from "react-icons/ri";

export default function AboutUs() {
    return (
        <div className='max-w-screen-xl mx-auto py-4 px-4 xl:px-0'>
            <div data-aos="fade-up">
                <div className='text-3xl flex items-center justify-center font-light text-[#14279b] mb-9'>
                    <div className='h-[2px] w-12 m-3 bg-[#14279b]' />
                    <h1 className='text-gray-900 font-bold'>ABOUT US</h1>
                    <div className='h-[2px] w-12 m-3 bg-[#14279b]' />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5' >
                <div className='text-gray-600' data-aos="fade-up" data-aos-delay="150">
                    <p className='mb-3'>We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.</p>
                    <p className='mb-3 flex items-center'><span className='text-[#14279b] text-xl mr-2'><RiCheckDoubleLine /></span>We started with a simple idea: do what is best for the client.</p>
                    <p className='mb-3 flex items-center'><span className='text-[#14279b] text-xl mr-2'><RiCheckDoubleLine /></span>Our methodical and individual approach to each project delivers the finest possible results for your media.</p>
                    <p className='mb-3 flex items-center'><span className='text-[#14279b] text-xl mr-2'><RiCheckDoubleLine /></span>Our day-to-day work is to solve your problems utilising the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <p className='text-gray-600'>We&apos;re professional, but we&apos;re also friendly, and we&apos;ll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you&apos;re interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.</p>
                    <button className='text-[#14279b] hover:text-white hover:bg-[#14279b] px-8 py-2 border-2 border-[#14279b] rounded-full mt-8'>Learn more</button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-10 mt-16 items-center'>
                <div className='md:col-span-4' data-aos="fade-right" data-aos-delay="150">
                    <Image src={About} alt='this is image' />
                </div>
                <div className='md:col-span-3 md:ml-6' data-aos="fade-left" data-aos-delay="300">
                    <div className='flex my-8'>
                        <BsEmojiSmile className='text-4xl text-[#14279b] mr-4' />
                        <div>
                            <NumberTicker value={3835039} className='font-bold text-3xl mb-2' />
                            <p className='text-gray-600 font-semibold'>Organic Reach <span className='font-light'>(Global)</span></p>
                        </div>
                    </div>
                    <div className='flex my-8'>
                        <AiOutlineClockCircle className='text-4xl text-[#14279b] mr-4' />
                        <div>
                            <NumberTicker value={14081} className='font-bold text-3xl mb-2' />
                            <p className='text-gray-600 font-semibold'>Watch Hours <span className='font-light'>(Asia)</span></p>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-3 md:ml-6' data-aos="fade-left" data-aos-delay="300">
                    <div className='flex my-8'>
                        <BsJournalRichtext className='text-4xl text-[#14279b] mr-4' />
                        <div>
                            <NumberTicker value={85} className='font-bold text-3xl mb-2' />
                            <p className='text-gray-600 font-semibold'>Campaigns</p>
                        </div>
                    </div>
                    <div className='flex my-8'>
                        <BsGlobe className='text-4xl text-[#14279b] mr-4' />
                        <div>
                            <NumberTicker value={17} className='font-bold text-3xl mb-2' />
                            <p className='text-gray-600 font-semibold'>Excellent CTR <span className='font-light'>% (Asia)</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

