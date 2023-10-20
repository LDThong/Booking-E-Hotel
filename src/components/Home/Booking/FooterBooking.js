import React from 'react'
import { Link } from 'react-router-dom'

function FooterBooking() {
  return (
    <div className='bg-[#DCDCDC]'>
        <div className='flex items-center justify-between w-[1240px] mx-auto py-[30px]'>
            <p className='text-[14.5px] font-medium'>Novotel Booking Engine | 147 Mai Dich, Cau Giay, Ha Noi, VietNam.</p>
            <p className='text-[14.5px] font-medium'>Powered by <span className='text-yellow-600 underline'><Link to={'/'}>Novotel</Link></span> © 2014-2023</p>
        </div>
    </div>
  )
}

export default FooterBooking