import React, { useState } from 'react';
import {BiSolidSquareRounded} from 'react-icons/bi';
import {FaBell} from 'react-icons/fa';
import {FcManager} from 'react-icons/fc';

function HeaderAdmin() {
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")));

    return (
    <div className='w-full bg-[#fff]'>
        <div className='flex justify-between p-[15px_20px_15px_30px]'>
            <div className='flex items-center gap-[10px] pl-[5px]'>
                <BiSolidSquareRounded className='text-[#E3E8FC] text-[40px]'/>
                <p className='text-[20px] font-medium text-[#5E5E61]'>E-Hotel</p>
            </div>
            <div className='flex gap-[15px]'>
                {user?.username ? (
                    <div className='flex items-center gap-[10px]'>
                        <div className='flex gap-[5px]'>
                            <p>Name:</p>
                            <p className='font-bold text-[#F89806]'>{user?.username}</p>
                        </div>
                        <div className='flex  gap-[5px]'>
                            <p>Role:</p>
                            <p className='font-bold text-[#00CCCD]'>{user?.role}</p>
                        </div>
                    </div>
                ) : (
                    <div>2</div>
                )}
                <div className='border border-[2px] shadow-[0_15px_60px_-15px_rgba(0,0,0,0.7)] p-[15px] rounded-[50%]'>
                    <FaBell className='text-[#33354E]'/>
                </div>
                <FcManager className='text-[49px] border border-[2px] rounded-[50%] shadow-[0_15px_60px_-15px_rgba(0,0,0,0.7)] bg-[#B4B7BC]'/>
            </div>
        </div>
    </div>
  )
}

export default HeaderAdmin