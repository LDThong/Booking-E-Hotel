import React from 'react';
import { Link } from 'react-router-dom';
import {FaCheck} from 'react-icons/fa';

function HeaderBooking() {
  return (
    <div className='lg:w-[1240px] lg:mx-auto'>
        <div className='flex flex-col justify-center items-center gap-[30px] my-[30px]'>
            <Link to={'/'}>
                <img src='/images/logo-e-hotel.png'></img>
            </Link>
            <div className='flex gap-[20px]'>
                <div className='flex items-center gap-[5px]'>
                    <FaCheck className='text-yellow-600 text-[14px]'/>
                    <p className='text-[14px]'>Best Price Guarantee</p>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <FaCheck className='text-yellow-600 text-[14px]'/>
                    <p className='text-[14px]'>Best value</p>
                </div>    
                <div className='flex items-center gap-[5px]'>
                    <FaCheck className='text-yellow-600 text-[14px]'/>
                    <p className='text-[14px]'>Support 24/7</p>
                </div>    
                <div className='flex items-center gap-[5px]'>
                    <FaCheck className='text-yellow-600 text-[14px]'/>
                    <p className='text-[14px]'>Friendly staffs</p>
                </div>    
                <div className='flex items-center gap-[5px]'>
                    <FaCheck className='text-yellow-600 text-[14px]'/>
                    <p className='text-[14px]'>Early Check-in & Late Check-out (terms and conditions apply)</p>
                </div>    
            </div>
        </div>
        <h1 className='lg:text-[23px] lg:font-bold'>NOVOTEL BOOKING ENGINE</h1>
            <div className='flex gap-[5px] italic'>
                <p className='font-medium'>Phone:</p>
                <div className='flex flex-col text-yellow-600 font-medium underline'>
                    <a href='tel:0902461457'>
                        <span>+84(0)902 461 457</span>
                    </a>
                    <a href='tel:0706240008'>
                        <span>+84(0)706 240 008</span>
                    </a>
                </div>
                <div className='font-semibold'>|</div>
                <p className='font-medium'>Email:</p>
                <div className='flex flex-col text-yellow-600 font-medium underline'>
                    <a href='mailto:leducthong2603@gmail.com'>
                        <span>leducthong2603@gmail.com</span>
                    </a>
                </div>
            </div>
    </div>
  )
}

export default HeaderBooking