import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {FaBars, FaXmark} from 'react-icons/fa6';
import {FiChevronDown} from 'react-icons/fi';
import axios from 'axios';

function Header({user, handleLogout}) {
    const [translateX, setTranslateX] = useState("translate-x-[-110%]");
    const [bars, setBars] = useState("block");
    const [xB, setXB] = useState("hidden");
    const navigater = useNavigate();
    const [dataUser, setDataUser] = useState(null)
    

    const getDataUser = async () =>{
        const response = await axios.get('https://h8jv55-3004.csb.app/users');
        if (response.status === 200) {
            setDataUser(response.data.find(item=>item.email === user))
        }
    }
    const onNav = () => {
        setXB("block");
        setBars("hidden");
        setTranslateX("translate-x-[0%]");
    }

    const offNav = () => {
        setXB("hidden");
        setBars("block");
        setTranslateX("translate-x-[-110%]");
    }
    const handleBooking = () => {
        navigater('/home/mybooking/')
    }
    const faBars = ` ${bars} text-[28px] font-bold text-[#646464]`;
    const xBars = ` ${xB} text-[28px] font-bold text-[#646464]`
    const navBars = ` ${translateX} absolute origin-[0%_50%] transition-transform duration-[300ms] delay-[150ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] top-0 z-[-100] bg-[#f1eee6f2] left-0 right-0`
    
    useEffect(()=>{
        getDataUser();
    },[user])
  return (
    <div className=''>
        <div className='w-full fixed z-1000 top-0'>
            {
                user ? (
                    <div className='bg-[#f1eee6cc] lg:block max-sm:hidden sm:max-lg:hidden lg:flex lg:justify-end lg:items-center lg:gap-[25px] lg:border-b lg:p-[10px_25px_10px_0] font-semibold'>
                        {
                            dataUser?.status === 'Unverified' ? (
                                <div>
                                    <Link to={'/verify/' + dataUser.id} className='text-red-400'>
                                        Unverified
                                    </Link>
                                </div>
                            ) : (
                                <div className='text-green-400'>
                                    Verified
                                </div>
                            )
                        }
                        <p>{user}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className='bg-[#f1eee6cc] lg:block max-sm:hidden sm:max-lg:hidden lg:flex lg:justify-end lg:items-center lg:gap-[25px] lg:border-b lg:p-[10px_25px_10px_0] font-semibold'>
                        <Link to={'/login'}>
                            <p>Login</p>
                        </Link>
                        <Link to={'/register'}>
                            <p>Register</p>
                        </Link>
                    </div>
                )
            }
            <div className='bg-[#f1eee6cc] w-full'>
                <div className='lg:block max-sm:hidden sm:max-lg:hidden lg:flex lg:gap-[15px] lg:items-center lg:w-[1300px] lg:mx-auto '>
                    <div className='lg:flex lg:gap-[25px] lg:justify-between lg:items-center lg:w-full py-[10px]'>
                        <Link>
                            <p>Home</p>
                        </Link>
                        <Link>
                            <p>Rooms</p>
                        </Link>
                        <Link>
                            <p>About</p>
                        </Link>
                        <Link>
                            <img  src='/images/logo-e-hotel.png'></img>
                        </Link>
                        <Link>
                            <p>Contact Us</p>
                        </Link>
                        <Link>
                            <p>FAQs</p>
                        </Link>
                        <button
                            onClick={handleBooking}
                            className='bg-[#A3258E] text-[#fff] p-[10px_35px_10px_35px] rounded-[5px]'>
                            Book
                        </button>
                    </div>
                </div>
                <div className='lg:hidden
                    sm:max-lg:block 
                    max-sm:block '>
                        <div className='flex items-center justify-between max-sm:p-[18px_15px_18px_15px] sm:max-lg:p-[25px]'>
                            <div
                                onClick={onNav}
                                className={faBars}>
                                <FaBars />
                            </div>
                            <div
                                onClick={offNav}
                                className={xBars}
                            >
                                <FaXmark />
                            </div>
                            <Link className='max-sm:w-[150px] sm:max-lg:w-[280px]'>
                                <img className='w-[100%]' src='/images/logo-e-hotel.png'></img>
                            </Link>
                            <div className='flex items-center pr-[15px] text-[#646464] transition-all ease-in-out duration-[300ms]
                                hover:text-[#0056b3]'>
                                <span className='font-medium'>EN</span>
                                <FiChevronDown className='text-[21px]' />
                            </div>
                            <nav className={navBars}>
                                <div className='flex flex-col items-center gap-[50px] w-[100%] mt-[70px] pt-[30px] h-screen'>
                                    <Link>
                                        <span className='text-[#a3258e] text-[20px] font-medium'>HOME</span>
                                    </Link>
                                    <Link>
                                        <span className='text-[#a3258e] text-[20px] font-medium'>ROOMS</span>
                                    </Link>
                                    <Link>
                                        <span className='text-[#a3258e] text-[20px] font-medium'>About</span>
                                    </Link>
                                    <Link>
                                        <span className='text-[#a3258e] text-[20px] font-medium'>Contact Us</span>
                                    </Link>
                                    <Link>
                                        <span className='text-[#a3258e] text-[20px] font-medium'>FAQs</span>
                                    </Link>
                                    <Link to={'/login'}>
                                        <span className='text-[#a3258e] text-[20px] font-medium'>Login</span>
                                    </Link>
                                    <Link to={'/register'}>
                                        <span className='text-[#a3258e] text-[20px] font-medium'>Register</span>
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header