import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBarAdmin from '../NavBarAdmin';
import HeaderAdmin from '../HeaderAdmin';
import {FaBan, FaCircleNotch, FaRegCircleXmark} from 'react-icons/fa6';
import {FiEdit} from 'react-icons/fi';
import {RiDeleteBinFill, RiSearchLine} from 'react-icons/ri';
import {IoPersonAdd} from 'react-icons/io5';
import {AiOutlineRollback} from 'react-icons/ai';
import {BsPersonFillAdd} from 'react-icons/bs';

function ManagementCustomer() {
    const [dataUser, setDataUser] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [notification, setNotification] = useState("hidden");
    const [usernameUS, setUsernameUS] = useState('');
    const [emailUS, setEmailUS] = useState('')
    const [passwordUS, setPasswordUS] = useState('');
    const [roleUS, setRoleUS] = useState('receptionist');
    const date = new Date().toLocaleString();
    const [viewAddUser, setViewAddUser] = useState("hidden");
    const [error, setError] = useState("hidden");
    const [content, setContent] = useState('');
    const [textNotification, setTextNotification] = useState('');
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("admin")));
    const [status, setStatus] = useState("All");

    const getDataUser = async () => {
        const res = await axios.get(
            "https://h8jv55-3004.csb.app/users"
        );

        if (res.status === 200) {
            setDataUser(res.data);
        };
    };

    useEffect(() => {
        getDataUser();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const filteredResults = dataUser.filter((user) => {
                const { email, username, role } = user;

                const emailUS = email.toLowerCase().includes(searchText.toLowerCase());
                const fullNameUS = username.toLowerCase().includes(searchText.toLowerCase());
                const roleUS = role.toLowerCase().includes(searchText.toLowerCase());

                return emailUS || fullNameUS || roleUS;
            });


            if (status === "All") {
                setFilteredData(filteredResults);
            } else if (status === "Verified") {
                const result = filteredResults.filter((item) => item.status === status);
                setFilteredData(result);
            } else if (status === "Banned") {
                const result = filteredResults.filter((item) => item.status === status);
                setFilteredData(result);
            } else if (status === "Unverified") {
                const result = filteredResults.filter((item) => item.status === status);
                setFilteredData(result);
            }

        }, 2000);
    }, [searchText, status, dataUser]);

    const handleBan = async (id, status, role) => {
        if (role === "user") {
            if (status === "Verified") {
                const res = await axios.patch(
                    "https://h8jv55-3004.csb.app/users/" + id,
                    {
                        status: "Banned",
                    }
                )
            } else if (status === "Banned") {
                const res = await axios.patch(
                    "https://h8jv55-3004.csb.app/users/" + id,
                    {
                        status: "Verified",
                    }
                )
            } else {
                const res = await axios.patch(
                    "https://h8jv55-3004.csb.app/users/" + id,
                    {
                        status: "Banned",
                    }
                )
            }
            getDataUser();
        } else {
            setNotification("block");
            setTextNotification("You do not have permission to ban the users!!");
        }
    };

    const handleDelete = async (id) => {
        if (user.role === "admin") {
            let text = ("Are you sure to delete this id?");
    
            if (window.confirm(text) === true) {
                const response = await axios.get(
                    "https://h8jv55-3004.csb.app/bookings"
                );
                if (response.status === 200) {
                    const filter = response.data.filter((item) => item.userId === id);
    
                    if (filter.length > 0) {
                        setNotification("block");
                        setTextNotification("This user cannot be deleted because the user already has a booking!!");
                    } else {
                        await axios.delete("https://h8jv55-3004.csb.app/users/" + id);
                        console.log("Xoa thanh cong");
                        getDataUser();
                    }
                }
            }
        } else {
            setNotification("block");
            setTextNotification("You do not have permission to delete users!!");
        }
    }

    const postData = async () => {
        let check = true;

        if (usernameUS === '' || emailUS === '' || passwordUS === '') {
            setError("block");
            setContent("Please enter complete information!");
        } else {
            for (let i = 0; i < dataUser.length; i++) {
                if (emailUS === dataUser[i].email) {
                    setError("block");
                    setContent("Email already exists!");
                    check = false;
                    break;
                }
            }

            if (check) {
                const response = await axios.post(
                    'https://h8jv55-3004.csb.app/users',
                    {
                        username: usernameUS,
                        email: emailUS,
                        password: passwordUS,
                        role: roleUS,
                        status: "Verified",
                        createAt: date,
                    }
                );

                if (response.status === 201) {
                    setViewAddUser("hidden");
                    setEmailUS('');
                    setUsernameUS('');
                    setPasswordUS('');
                    setRoleUS("receptionist");
                    setError("hidden");
                    setContent("");
                    getDataUser();
                }
            }
        }
    };

    const offNotification = () => {
        setNotification("hidden");
        setTextNotification("");
    };

    const onViewAddUser = () => {
        if (user.role === "admin") {
            setViewAddUser("block");
        } else {
            setNotification("block");
            setTextNotification("You do not have permission to add users!!");
        }
    };

    const offViewAddUser = () => {
        setViewAddUser("hidden");
        setEmailUS('');
        setUsernameUS('');
        setPasswordUS('');
        setRoleUS("receptionist");
        setError("hidden");
        setContent("");
    }

    const Notification = ` ${notification} fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-[#0000004d] z-[15]`;
    const ViewAddUser = ` ${viewAddUser} fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-[#0000004d] p-[50px] z-[15]`

    return (
        <div className=''>
            <NavBarAdmin />
            <div className='w-[80%] float-right h-screen'>
                <HeaderAdmin />
                <div className='p-[15px]'>
                    <div className='bg-[#fff] border border-[#D8D8D8] p-[15px]'>
                        <div className='flex items-center justify-between mb-[15px]'>
                            <div className='flex flex-1 items-center gap-[15px] relative'>
                                <input value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    type='search'
                                    placeholder='User'
                                    className='border border-gray-500 p-[10px_30px_10px_30px] rounded-[5px] w-[35%] focus:outline-none focus:shadow focus:shadow-gray-600'>
                                </input>
                                <RiSearchLine className='absolute left-[5px] text-[20px] text-[#8996A9]'/>
                                <select value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className='p-[10px] rounded-[5px] border border-gray-500 focus:outline-none focus:shadow focus:shadow-gray-600'>
                                    <option value="All">All</option>
                                    <option value="Verified">Verified</option>
                                    <option value="Unverified">Unverified</option>
                                    <option value="Banned">Banned</option>
                                </select>
                            </div>
                            <button 
                                onClick={onViewAddUser}
                                className='flex items-center gap-[10px] bg-[#00A0D2] text-[#fff] font-semibold p-[10px_20px_10px_20px] rounded-[10px]'>
                                <IoPersonAdd className='text-[20px]'/>
                                Create User
                            </button>
                        </div>
                        <div className='flex items-center justify-between p-[10px] text-[#A1A0B7] font-medium rounded-[5px] bg-[#EFF5FB]'>
                            <div className='w-[2%] text-center'>
                                <p>ID</p>
                            </div>
                            <div className='w-[25%] text-center'>
                                <p>Email</p>
                            </div>
                            <div className='w-[12%]'>
                                <p>Password</p>
                            </div>
                            <div className='w-[18%]'>
                                <p>Full Name</p>
                            </div>
                            <div className='w-[8%]'>
                                <p>Status</p>
                            </div>
                            <div className='w-[13.5%]'>
                                <p>Registration Date</p>
                            </div>
                            <div className='w-[8%] text-center'>
                                <p>Role</p>
                            </div>
                            <div className='w-[11%] text-center'>
                                <p>Action</p>
                            </div>
                        </div>
                        <div className='p-[0_10px_10px_10px]'>
                            {filteredData?.map((item) => (
                                <div key={item.id} className='flex justify-between items-center border-b py-[5px]'>
                                    {item?.status === "Banned" ? (
                                        <div className='flex items-center text-gray-300 w-[90%] relative'>
                                            {/* <div className='w-[99.5%] absolute h-[2px] bg-gray-300 top-[50%]'></div> */}
                                            <div className='w-[2%] text-center'>
                                                <p>{item.id}</p>
                                            </div>
                                            <div className='w-[28.5%] text-center'>
                                                <p>{item.email}</p>
                                            </div>
                                            <div className='w-[13.5%]'>
                                                {user?.role === "admin" ? (
                                                    <p>{item.password}</p>
                                                ) : (
                                                    <input type='password' value={item.password}></input>
                                                )}
                                            </div>
                                            <div className='w-[20.5%]'>
                                                <p>{item.username}</p>
                                            </div>
                                            <div className='w-[9.5%]'>
                                                <p>{item.status}</p>
                                            </div>
                                            <div className='w-[14.8%]'>
                                                <p>{item.createAt}</p>
                                            </div>
                                            <div className='w-[11%] text-center'>
                                                <p className='font-semibold uppercase'>{item.role}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='flex items-center w-[90%]'>
                                            <div className='w-[2%] text-center'>
                                                <p>{item.id}</p>
                                            </div>
                                            <div className='w-[28.5%] text-center'>
                                                <p>{item.email}</p>
                                            </div>
                                            <div className='w-[13.5%]'>
                                                {user?.role === "admin" ? (
                                                    <p>{item.password}</p>
                                                ) : (
                                                    <input type='password' value={item.password}></input>
                                                )}
                                            </div>
                                            <div className='w-[20.5%]'>
                                                <p>{item.username}</p>
                                            </div>
                                            <div className='w-[9.5%]'>
                                                <p>{item.status}</p>
                                            </div>
                                            <div className='w-[14.8%]'>
                                                <p>{item.createAt}</p>
                                            </div>
                                            <div className='w-[11%] text-center'>
                                                <p className='font-semibold uppercase'>{item.role}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className='flex flex-col gap-[5px] w-[10%]'>
                                        {item?.status === "Verified" ? (
                                            <button className='flex items-center gap-[2px] bg-[#FF2A2A] rounded-[3px] p-[2px_5px_2px_5px]'
                                                onClick={() => handleBan(item.id, item.status, item.role)}>
                                                <FaBan />
                                                Ban
                                            </button>
                                        ) : item?.status === "Banned" ?
                                            (
                                                <button
                                                    onClick={() => handleBan(item.id, item.status, item.role)}
                                                    className='flex items-center rounded-[5px] gap-[5px] bg-red-600 p-[2px_5px_2px_5px] text-[#fff]'>
                                                    <FaCircleNotch />
                                                    UnBan
                                                </button>
                                            ) : (
                                                <button className='flex items-center gap-[2px] bg-[#FF2A2A] rounded-[3px] p-[2px_5px_2px_5px]'
                                                    onClick={() => handleBan(item.id, item.status, item.role)}>
                                                    <FaBan />
                                                    Ban
                                                </button>
                                            )}
                                        <button className='flex items-center rounded-[5px] gap-[5px] bg-green-500 p-[2px_5px_2px_5px] text-[#fff]'>
                                            <FiEdit />
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(item.id)}
                                            className='flex items-center rounded-[5px] gap-[5px] bg-[#F44336] p-[2px_5px_2px_5px] text-[#fff]'>
                                            <RiDeleteBinFill />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* ---------------------------------------------- */}
                <div className={Notification}>
                    <div className='flex flex-col items-center justify-center gap-[15px] bg-[#fff] p-[40px_100px_40px_100px] rounded-[5px]'>
                        <div className='text-[100px] text-[#F21707]'>
                            <FaRegCircleXmark />
                        </div>
                        <div>
                            <p className='text-[25px] font-semibold'>{textNotification}</p>
                        </div>
                        <div>
                            <button onClick={offNotification}
                                className='p-[5px_20px_5px_20px] bg-green-500 font-bold text-[#fff] rounded-[3px]'>
                                OK
                            </button>
                        </div>
                    </div>
                </div>

                <div className={ViewAddUser}>
                    <div className='flex flex-col items-center bg-[#fff] rounded-[5px] w-[50%] h-fit'>
                        <div className='text-center mt-[20px]'>
                            <h1 className='text-[40px] font-semibold text-[#5A6A6E]'>Add New User</h1>
                        </div>
                        <div className='flex flex-col gap-[20px] p-[25px] w-[80%]'>
                            <div className='flex items-center gap-[10px]'>
                                <p className='w-[30%]'>Email:</p>
                                <input value={emailUS}
                                    onChange={(e) => setEmailUS(e.target.value)}
                                    type='email' className='border w-[70%] rounded-[10px] p-[5px_15px_5px_15px]'></input>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <p className='w-[30%]'>Full Name:</p>
                                <input value={usernameUS}
                                    onChange={(e) => setUsernameUS(e.target.value)}
                                    type='text' className='border w-[70%] rounded-[10px] p-[5px_15px_5px_15px]'></input>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <p className='w-[30%]'>Password:</p>
                                <input value={passwordUS}
                                    onChange={(e) => setPasswordUS(e.target.value)}
                                    type='password' className='border w-[70%] rounded-[10px] p-[5px_15px_5px_15px]'></input>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <p className='w-[30%]'>Role:</p>
                                <select value={roleUS}
                                    onChange={(e) => setRoleUS(e.target.value)}
                                    className='border w-[70%] rounded-[10px] p-[5px_15px_5px_15px]'>
                                    <option value="receptionist">Receptionist</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-end gap-[15px] p-[25px_100px_25px_50px] w-full'>
                            <div className={error}>
                                <p className='text-red-500 font-semibold text-center shadow-[#D44040] drop-shadow-[0_0_5px]'>{content}</p>
                            </div>
                            <button
                                onClick={postData}
                                className='flex items-center gap-[5px] p-[5px_15px_5px_15px] bg-[#1750A8] rounded-[10px] text-[#fff]'>
                                <BsPersonFillAdd />
                                Add New
                            </button>
                            <button
                                onClick={offViewAddUser}
                                className='flex items-center gap-[5px] p-[5px_15px_5px_15px] bg-[#EB1212] rounded-[10px] text-[#fff]'>
                                <AiOutlineRollback />
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ManagementCustomer