import React, { useEffect, useState } from 'react';
import {TfiFacebook, TfiEmail} from 'react-icons/tfi';
import {IoLogoGoogleplus} from 'react-icons/io';
import {FaLinkedinIn, FaRegUser} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import {PiLockBold} from 'react-icons/pi';
import {GiStabbedNote} from 'react-icons/gi';
import axios from 'axios';

function Login() {
    const [emailUS, setEmailUS] = useState('')
    const [passwordUS, setPasswordUS] = useState('');
    const [dataUS, setDataUS] = useState([]);
    const date = Date();
    const [error, setError] = useState("hidden");
    const [content, setContent] = useState('');

    const getDataUS = async () => {
        const res = await axios.get(
            'http://localhost:3004/users'
        );

        if (res.status === 200) {
            setDataUS((res.data).map((item) => item.email));
        };
    };

    const handleLogin = async () => {
        setError("block");
        setContent("Login Failed")
    };

    useEffect(() => {
        getDataUS()
    }, []);

    const Error = ` ${error}`;

  return (
    <div className='lg:flex lg:h-screen lg:p-[20px]
        sm:max-lg:flex sm:max-lg:h-[800px] sm:max-lg:p-[25px]'>
        <div className='lg:w-[65%] lg:h-full lg:bg-[#fff] lg:rounded-tl-[15px] lg:rounded-bl-[15px]
            max-sm:px-[15px]
            sm:max-lg:w-[70%] sm:max-lg:h-full sm:max-lg:rounded-tl-[25px] sm:max-lg:rounded-bl-[25px] sm:max-lg:bg-[#fff]'>
            <div className='lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-[30px] lg:h-full
                max-sm:bg-[#fff] max-sm:rounded-[15px] max-sm:mt-[100px]
                sm:max-lg:flex sm:max-lg:flex-col sm:max-lg:items-center sm:max-lg:justify-evenly sm:max-lg:h-full
                '>
                <div className='flex flex-col lg:gap-[25px]
                    max-sm:items-center max-sm:mt-[30px] max-sm:relative max-sm:pt-[50px] max-sm:gap-[10px]
                    sm:max-lg:gap-[15px] sm:max-lg:items-center'>
                    <GiStabbedNote className='lg:hidden max-sm:block sm:max-lg:hidden max-sm:text-purple-600 max-sm:text-[100px] 
                        max-sm:absolute max-sm:top-[-65px]'/>
                    <h1 className='lg:text-[#A3258E] lg:text-[50px] font-bold
                        max-sm:text-[#656565] max-sm:text-[30px] max-sm:px-[50px] max-sm:text-center
                        sm:max-lg:text-[#8B8C94] sm:max-lg:text-[35px] sm:max-lg:px-[5px]'>
                        Sign in to Novotel-Hotel</h1>
                    <div className='flex lg:justify-center items-center gap-[10px] sm:max-lg:justify-center'>
                        <Link className='border-[2px] lg:border-[#ECEFEE] rounded-[50%] lg:p-[15px]
                            max-sm:p-[10px] text-[#5169A6] sm:max-lg:p-[10px]'>
                            <TfiFacebook />
                        </Link>
                        <Link className='border-[2px] lg:border-[#ECEFEE] rounded-[50%] lg:p-[10px]
                            max-sm:p-[5px] text-[#E45448] sm:max-lg:p-[5px]'>
                            <IoLogoGoogleplus className='text-[25px]'/>
                        </Link>
                        <Link className='border-[2px] lg:border-[#ECEFEE] rounded-[50%] lg:p-[15px]
                            max-sm:p-[10px] text-[#0A66C2] sm:max-lg:p-[10px]'>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <div className='lg:text-center'>
                        <p className='text-[#979A99] lg:font-semibold sm:max-lg:font-medium'>
                            or use your email account:
                        </p>
                    </div>

                </div>
                <div className='lg:w-full flex flex-col lg:items-center lg:gap-[10px] 
                    max-sm:px-[15px] max-sm:gap-[15px] max-sm:mt-[20px]
                    sm:max-lg:gap-[15px] sm:max-lg:w-[70%]'>
                    <div className='lg:w-[50%] bg-[#F4F8F7] lg:p-[15px_20px_15px_20px] max-sm:p-[10px_15px_10px_15px] max-sm:rounded-[25px]
                        sm:max-lg:p-[12px_17px_12px_17px] sm:max-lg:rounded-[15px]'>
                        <div className='flex items-center gap-[5px] lg:font-medium'>
                            <TfiEmail className='text-[#9CA3AF]'/>
                            <input 
                                type='email'
                                onChange={(e) => setEmailUS(e.target.value)}
                                className='outline-none bg-[#F4F8F7] w-full' placeholder='EMAIL'></input>
                        </div>
                    </div>
                    <div className='lg:w-[50%] bg-[#F4F8F7] lg:p-[15px_20px_15px_20px] max-sm:p-[10px_15px_10px_15px] max-sm:rounded-[25px]
                        sm:max-lg:p-[12px_17px_12px_17px] sm:max-lg:rounded-[15px]'>
                        <div className='flex items-center gap-[5px] lg:font-medium'>
                            <PiLockBold className='text-[#9CA3AF]'/>
                            <input 
                                type='password'
                                onChange={(e) => setPasswordUS(e.target.value)}
                                className='outline-none bg-[#F4F8F7] w-full' placeholder='PASSWORD'></input>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#979A99] font-medium text-center 
                            lg:border-b-[2px] lg:pb-[5px]
                            '>
                            Forgot your password?
                        </p>
                    </div>
                    <div className={Error}>
                        <p className='text-red-500 font-bold text-center'>{content}</p>
                    </div>
                </div>
                <div className='max-sm:p-[15px] max-sm:text-center sm:max-lg:text-right sm:max-lg:w-[70%]'>
                    <button
                        type='button'
                        onClick={handleLogin}
                        className='bg-[#A3258E] rounded-[25px] font-bold lg:p-[10px_90px_10px_90px] text-[#fff]
                        max-sm:w-full max-sm:py-[5px] max-sm:mb-[15px]
                        sm:max-lg:py-[5px] sm:max-lg:w-[60%]'>
                        SIGN UP
                    </button>
                    <span className='lg:hidden max-sm:block sm:max-lg:hidden font-medium text-[#BDBBBC]'>
                        Create new account? <Link to={'/register'} className='text-[#6553FC]'>Sign Up</Link>
                    </span>
                </div>
            </div>
        </div>
        <div className='lg:block lg:w-[35%] lg:bg-[#A3258E] lg:rounded-br-[25px] lg:rounded-tr-[25px]
            max-sm:hidden
            sm:max-lg:block sm:max-lg:bg-[#A3258E] sm:max-lg:w-[30%] sm:max-lg:text-[#fff] sm:max-lg:rounded-b-[15px] sm:max-lg:rounded-tr-[15px]'>
            <div className='flex flex-col items-center lg:justify-center gap-[20px] h-full sm:max-lg:justify-evenly'>
                <div className='text-center sm:max-lg:px-[10px]'>
                    <h1 className='lg:text-[#fff] lg:text-[45px] font-bold 
                        sm:max-lg:text-[25px] sm:max-lg:pb-[20px]'>Hello, Friend!</h1>
                    <p className='lg:text-[#fff] lg:text-[20px] xl:px-[100px]
                        sm:max-lg:text-[14px]'>
                        Enter your personal details and start journey with us</p>
                </div>
                <div className='lg:pt-[20px]'>
                    <Link to={'/register'}>
                        <button
                            className='border-[1px] rounded-[25px] lg:p-[10px_90px_10px_90px] text-[#fff]
                            sm:max-lg:p-[5px_50px_5px_50px]'    
                        >SIGN UP</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login