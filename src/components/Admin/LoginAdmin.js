import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import {BiLockAlt} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {
    const [data, setData] = useState([]);
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [error, setError] = useState("hidden");
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const getData = async () => {
        const res = await axios.get(
            'https://h8jv55-3004.csb.app/users'
        );

        if (res.status === 200) {
            setData(res.data);
        };
    };

    const handleLogin = () => {
        const result = data.find(user => user.email === emailLogin && user.password === passwordLogin);

        if (emailLogin === '' || passwordLogin === '') {
            setError("block");
            setContent("Login Failed");
        } else {
            if (result === undefined) {
                setError("block");
                setContent("Login Failed");
            } else {
                if (result.role === "admin" || result.role === "receptionist") {
                    setError("hidden");
                    setContent("");
                    window.localStorage.setItem('admin',JSON.stringify(result));
                    window.alert('Login success!!');
                    navigate('/admin/home/');
                }else{
                    setError("block");
                    setContent("Login Failed");
                }
            }
        }
    };

    const Error = ` ${error} absolute top-[120%]`;

    useEffect(() => {
        getData();
    }, []);

    return (
    <div className='flex m-[25px] bg-[#fff] rounded-[20px] h-[93vh]'>
        <div className='flex w-[50%] p-[100px_70px_100px_70px] relative'>
            <img className='w-full list-image-none' src='/images/logo-login-admin.png'></img>
            <div className='absolute right-0 content-[""] h-[70%] w-[2px] bg-[#ECECEC]'></div>
        </div>
        <div className='flex flex-col justify-center items-center w-[50%]'>
            <div className='relative w-[60%] mb-[40px]'>
                <h1 className='font-semibold text-[20px] text-[#434254]'>Login as a hotel manager</h1>
                <div className='absolute top-[-5px] content-[""] h-[3px] w-[9%] bg-[#8F5CF9]'></div>
            </div>
            <div className='flex flex-col gap-[25px] w-[60%]'>
                <div className='relative flex items-center'>
                    <input value={emailLogin}
                        onChange={(e) => setEmailLogin(e.target.value)}
                        className='border-[2px] rounded-[25px] p-[10px_20px_10px_20px] w-full' type='email' placeholder='email@gmail.com'></input>
                    <AiOutlineUser className='absolute right-[5%] text-[30px] text-[#747394]'/>
                </div>
                <div className='relative flex items-center'>
                    <input value={passwordLogin}
                        onChange={(e) => setPasswordLogin(e.target.value)}
                        className='border-[2px] rounded-[25px] p-[10px_20px_10px_20px] w-full' type='password' placeholder='password'></input>
                    <BiLockAlt className='absolute right-[5%] text-[30px] text-[#747394]'/>
                </div>
                <div className='relative flex flex-col items-center'>
                    <button 
                        onClick={handleLogin}
                        className='[20px] border-[2px] rounded-[25px] p-[10px_20px_10px_20px] w-full bg-[#8B57F9] text-[#fff] font-medium'>
                        L O G I N
                    </button>
                    <div className={Error}>
                        <p className='text-red-500 font-bold text-center shadow-[#D44040] drop-shadow-[0_0_5px]'>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginAdmin