import React from 'react';
import {FiHome} from 'react-icons/fi';
import {ImArrowLeft2} from 'react-icons/im';
import {FaUserAlt} from 'react-icons/fa';
import {MdOutlineLocalHotel} from 'react-icons/md';
import {TbBrandBooking, TbReport} from 'react-icons/tb';
import {BiSolidDiscount} from 'react-icons/bi';
import {MdMiscellaneousServices} from 'react-icons/md';
import {SlLogout} from 'react-icons/sl';
import { Link, useNavigate } from 'react-router-dom';

function NavBarAdmin() {
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem("admin");
        navigate("/admin")
    }

    return (
    <div className='lg:w-[20%] bg-[#fff] h-screen fixed shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-[10]'>
        <div className='flex justify-between items-center lg:mb-[20px] p-[15px]'>
            <div className='flex items-center gap-[20px]'>
                <FiHome className='text-[25px] text-[#C7C0B5]'/>
                <h2 className='text-[#B1B3BB] font-semibold text-[20px]'>Dashboard</h2>
            </div>
            <Link to={'/admin/home/'}
                className='p-[8px] border border-[#D8D8D8] rounded-[50%]'>
                <ImArrowLeft2 className='text-[#8A8898]'/>
            </Link>
        </div>
        <div className='flex flex-col gap-[10px]'>
            <p className='text-[20px] font-medium text-[#807D9D] px-[15px]'>Management</p>
            <Link 
                to={'/admin/managementcustomers/'}
                className='hover:text-[#000] text-[#B1B3BB] w-full px-[15px] border-l border-l-[5px] border-[#fff] hover:border-[#000]'>
                <div className='flex items-center gap-[28px]'>
                    <FaUserAlt className=''/>
                    <p className=' font-medium'>Customer</p>
                </div>
            </Link>
            <Link 
                to={'/admin/roomtypes/'}
                className='hover:text-[#000] text-[#B1B3BB] w-full px-[15px] border-l border-l-[5px] border-[#fff] hover:border-[#000]'>
                <div className='flex items-center gap-[25px]'>
                    <MdOutlineLocalHotel className='text-[20px]'/>
                    <p className='font-medium'>Rooms</p>
                </div>
            </Link>
            <Link 
                to={'/admin/services/'}
                className='hover:text-[#000] text-[#B1B3BB] w-full px-[15px] border-l border-l-[5px] border-[#fff] hover:border-[#000]'>
                <div className='flex items-center gap-[25px]'>
                    <MdMiscellaneousServices className='text-[20px]'/>
                    <p className='font-medium'>Services</p>
                </div>
            </Link>
            <Link 
                to={'/admin/listbookings/'}
                className='hover:text-[#000] text-[#B1B3BB] w-full px-[15px] border-l border-l-[5px] border-[#fff] hover:border-[#000]'>
                <div className='flex items-center gap-[25px]'>
                    <TbBrandBooking className='text-[20px]'/>
                    <p className='font-medium'>Bookings</p>
                </div>
            </Link>
            <Link 
                to={'/admin/promotions/'}
                className='hover:text-[#000] text-[#B1B3BB] w-full px-[15px] border-l border-l-[5px] border-[#fff] hover:border-[#000]'>
                <div className='flex items-center gap-[25px]'>
                    <BiSolidDiscount className='text-[20px]'/>
                    <p className='font-medium'>Promotion</p>
                </div>
            </Link>
            <Link 
                to={'/admin/reports/'}
                className='hover:text-[#000] text-[#B1B3BB] w-full px-[15px] border-l border-l-[5px] border-[#fff] hover:border-[#000]'>
                <div className='flex items-center gap-[25px]'>
                    <TbReport className='text-[20px]'/>
                    <p className='font-medium'>Report</p>
                </div>
            </Link>
        </div>
        <div className='absolute bottom-0 p-[0_0_30px_15px]'>
            <button 
                onClick={handleLogout}
                className='flex items-center gap-[15px] text-[#A0B4C0] hover:text-[#321]'>
                <SlLogout className='text-[25px]'/>
                <p className='font-medium'>Log Out</p>
            </button>
        </div>
    </div>
  )
}

export default NavBarAdmin