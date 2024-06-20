'use client'
import { useEffect, useState } from 'react';
import Logo from '../../../public/assest/logo.png'
import { navOption } from '@/utils';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function Navbar() {
    const router = useRouter();
    const [navClick, setNavClick] = useState<boolean>(false);

    const onMenuClick = () => {
        setNavClick(!navClick);
    }

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`text-[#14279b] bg-white w-full fixed transition-all duration-500 py-5 ${isScrolled ? 'header-scrolled ' : ''} ${navClick ? ' !bg-[#090909e6] md:!bg-white' : ''} z-10`}>
            <nav className={`max-w-screen-xl mx-auto pt-2 px-3 xl:px-0`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                    <a href="/" className="flex items-center">
                        <Image src={Logo} alt='Logo' height={60} />
                        <h1 className='text-3xl font-bold uppercase'>Akeshya</h1>
                    </a>

                    <button data-collapse-toggle="navbar-user" type="button"
                        onClick={(e) => { e.preventDefault(); onMenuClick() }}
                        className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-900 rounded-lg md:hidden`}
                        aria-controls="navbar-user" aria-expanded="false">
                        {!navClick &&
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        }
                        {navClick &&
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                    </button>

                    <div className={`items-center justify-between w-full md:flex md:w-auto mb-3 md:mb-0 ${navClick ? 'h-[90vh] md:h-auto rounded-md bg-white' : 'hidden'}`} id="navbar-user">
                        <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-2  md:mt-0 md:border-0 `}>
                            {navOption.map(item => (
                                <li key={item.id}>
                                    <Link href={item.path}
                                        key={item.id}
                                        onClick={() => { onMenuClick() }}
                                        className="block text-sm py-2 pl-3 pr-3 font-light rounded text-gray-600 hover:text-blue-900"
                                    >
                                        {item.lable}
                                    </Link>
                                </li>
                            ))}
                            <button
                                className='bg-[#14279b] hover:bg-[#57aae1] px-5 py-2 mt-5 md:mt-0 text-white rounded-full'
                                onClick={() => { router.push('/contactus'); onMenuClick() }}
                            >
                                Contact us
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

