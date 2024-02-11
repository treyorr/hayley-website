'use client'
 
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const pathname = usePathname()
    return (
        <div className='navbar bg-base-100'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost lg:hidden'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                            <a>About Me</a>
                        </li>
                        <li>
                            <a>Education</a>
                        </li>
                        <li>
                            <a>Work</a>
                        </li>
                        <li>
                            <a>Extracurriculars</a>
                        </li>
                        <li>
                            <a>Awards</a>
                        </li>
                        </ul>
                    </div>
                    <a href="/" className='btn btn-ghost text-xl text-black'>Hayley Ellis</a>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <a href="/about" className={pathname == "/about" ? "bg-primary text-white" : "text-black"}>About Me</a>
                        </li>
                        <li>
                        <a href="/education" className={pathname == "/education" ? "bg-primary text-white" : "text-black"}>Education</a>
                        </li>
                        <li>
                        <a href="/work" className={pathname == "/work" ? "bg-primary text-white" : "text-black"}>Work</a>
                        </li>
                        <li>
                            <a href="/extracurriculars" className={pathname == "/extracurriculars" ? "bg-primary text-white" : "text-black"}>Extracurriculars</a>
                        </li>
                        <li>
                        <a href="/awards" className={pathname == "/awards" ? "bg-primary text-white" : "text-black"}>Awards</a>
                        </li>
                    </ul>
                </div>
                <div className='navbar-end'>
                    <a className='btn btn-primary'>Contact Me!</a>
                </div>
            </div>
    );
}
