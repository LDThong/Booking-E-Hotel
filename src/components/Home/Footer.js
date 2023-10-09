import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='lg:w-[1300px] lg:mx-auto lg:mt-[60px] sm:max-lg:mt-[40px]'>
        <div className='grid lg:grid-cols-4'>
            <div className='flex justify-center lg:items-start lg:w-full max-sm:p-[60px_0_80px_0] sm:max-lg:pb-[60px]'>
                <img className='lg:w-[55%] max-sm:w-[65%] sm:max-lg:w-[30%]' src='/images/logo-e-hotel.png'></img>
            </div>
            <div className='flex flex-col lg:px-[15px] w-full lg:leading-7 max-sm:px-[15px] sm:max-lg:px-[25px] sm:max-lg:pb-[20px]'>
                <h3 className='font-medium text-[#646461] text-[18px] pb-[20px]'>Novotel Hotel</h3>
                <Link className='text-[#7B6464] hover:text-[#0056b3] hover:underline transition ease-in-out' href='tel:0902461457'>
                    <span className='font-medium '>Tel: </span>
                    0902 461 457
                </Link>
                <Link className='text-[#7B6464] hover:text-[#0056b3] hover:underline transition ease-in-out' href='tel:0706240008'>
                    <span className='font-medium '>Tel: </span>
                    0706 240 008
                </Link>
                <Link className='text-[#7B6464] hover:text-[#0056b3] hover:underline transition ease-in-out' href='mailto:leducthong2603@gmail.com'>
                    <span className='font-medium '>Email: </span>
                    leducthong2603@gmail.com
                </Link>
            </div>
            <div className='flex flex-col w-full lg:leading-7 max-sm:px-[15px] max-sm:pt-[20px] sm:max-lg:px-[25px] sm:max-lg:pb-[20px]'>
                <h3 className='font-medium text-[#646461] text-[18px] pb-[20px]'>Things to know</h3>
                <Link className='text-[#7B6464] hover:text-[#0056b3] hover:underline transition ease-in-out'>
                    <p>Terms & Conditions</p>
                </Link>
                <Link className='text-[#7B6464] hover:text-[#0056b3] hover:underline transition ease-in-out'>
                    <p>Payment methods</p>
                </Link>
                <Link className='text-[#7B6464] hover:text-[#0056b3] hover:underline transition ease-in-out'>
                    <p>FAQ</p>
                </Link>
            </div>
            <div className='flex flex-col w-full max-sm:px-[15px] max-sm:pt-[20px] sm:max-lg:px-[25px]'>
                <h3 className='font-medium text-[#646461] text-[18px] pb-[20px]'>Booking info</h3>
                <Link className='text-[#7B6464] hover:text-[#0056b3] hover:underline transition ease-in-out'>
                    <p>Warning</p>
                </Link>
                <Link className='text-[#7B6464] hover:text-[#0056b3] hover:underline transition ease-in-out'>
                    <p>Contact</p>
                </Link>
            </div>
        </div>
        <div className='lg:w-[1300px] lg:mx-auto lg:py-[50px] lg:text-right max-sm:pt-[40px] max-sm:text-center 
            sm:max-lg:py-[40px] sm:max-lg:pr-[25px] sm:max-lg:text-right'>
            <p className='text-[#7B6464] lg:text-[15px] max-sm:text-[13px] max-sm:font-medium sm:max-lg:text-[14px]'>Copyright@2019 All rights Reserved Novotel Hotel</p>
        </div>
    </div>
  )
}

export default Footer