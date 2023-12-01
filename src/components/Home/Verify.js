import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';



export default function Verify() {
    const idUser = useParams();
    const [dataUser, setDataUser] = useState(null);
    const [verifyCode, setVerifyCode] = useState(null);
    const navigate = useNavigate()

    const getDataUser = async () =>{
        const response = await axios.get('https://h8jv55-3004.csb.app/users')
        if (response.status === 200) {
            setDataUser(response.data?.find(item=>item.id === +idUser.id))
        }
    }
    
    const handleVerify = async () =>{
        if (verifyCode === dataUser?.verifyCode) {
            const res = await axios.patch('https://h8jv55-3004.csb.app/users/' + +idUser.id,{
                status: 'Verified',
            })
            if (res.status === 200) {
                navigate('/login')
            }
        }else{
            window.alert('Wrong verify code.')
        }
    } 

    useEffect(()=>{
        getDataUser();
    },[idUser])
  return (
    <div>
      <div className="lg:w-[1240px] lg:mx-auto">
        <div className='flex flex-col justify-center items-center gap-[30px] my-[30px]'>
            <Link to={'/'}>
                <img src='/images/logo-e-hotel.png'></img>
            </Link>
        </div>
        <div className='flex flex-col items-center gap-6 mx-auto w-6/12 h-fit bg-white p-4'>
            <div className='flex'>
                <label className='mt-2 mr-4'>Your verify code: </label>
                <input className='w-4/12 h-10 border-[2px] border-gray-300 pb-[5px]' onChange={e=>setVerifyCode(e.target.value)}></input>
            </div>
            <button type='button' onClick={handleVerify} className='p-2 bg-green-200 rounded-3xl cursor-pointer'>Verify</button>
        </div>
      </div>
    </div>
  )
}
