import React, { useEffect, useState } from 'react';
import NavBarAdmin from '../NavBarAdmin';
import HeaderAdmin from '../HeaderAdmin';
import axios from 'axios';
import { GoTriangleDown } from 'react-icons/go';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineRollback } from 'react-icons/ai';
import { MdMiscellaneousServices } from 'react-icons/md';
import { GiSave } from 'react-icons/gi';
import {FaRegCircleXmark} from 'react-icons/fa6';

function Services() {
    const [service, setService] = useState(null);
    const [viewEditService, setViewEditService] = useState("hidden");
    const [editService, setEditService] = useState([]);
    const [serviceTypeChange, setServiceTypeChange] = useState('');
    const [priceChange, setPriceChange] = useState('');
    const [statusChange, setStatusChange] = useState('');
    const [openingHoursChange, setOpeningHoursChange] = useState('');
    const [descriptionChange, setDescriptionChange] = useState('');
    const [error, setError] = useState("hidden");
    const [viewAddService, setViewAddService] = useState("hidden");
    const [newServiceType, setNewServiceType] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newOpeningHours, setNewOpeningHours] = useState("");
    const [status, setStatus] = useState("Stop working");
    const [newDescription, setNewDescription] = useState("");
    const [content, setContent] = useState('');
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("admin")));
    const [notification, setNotification] = useState("hidden");
    const [textNotification, setTextNotification] = useState('');

    const getDataService = async () => {
        const res = await axios.get(
            "https://h8jv55-3004.csb.app/services"
        );

        if (res.status === 200) {
            setService(res.data);
        };
    };

    const onViewEditService = async (id) => {
        const res = await axios.get(
            "https://h8jv55-3004.csb.app/services/" + id
        );

        if (res.status === 200) {
            setEditService(res.data);
            setViewEditService("block");
            setServiceTypeChange(res.data.serviceType);
            setPriceChange(res.data.price);
            setOpeningHoursChange(res.data.openingHours);
            setStatusChange(res.data.status);
            setDescriptionChange(res.data.description);
        };
        
    }

    const saveDataService = async (id) => {
        const res = await axios.patch(
            "https://h8jv55-3004.csb.app/services/" + id, {
                serviceType: serviceTypeChange,
                price: +priceChange,
                openingHours: openingHoursChange,
                status: statusChange,
                description: descriptionChange
            }
        );

        if (res.status === 200) {
            setViewEditService("hidden");
            getDataService();
        }
    };

    const offViewEditService = () => {
        setViewEditService("hidden");
    };

    const onViewAddService = () => {
        setViewAddService("block");
    };

    const postNewDataService = async () => {
        let check = true;

        if (newServiceType === "" || newPrice === '' || newOpeningHours === '' || newDescription === '') {
            setError("block");
            setContent("Please enter complete information!");
        } else {
            for (let i = 0; i < service.length; i++) {
                if (newServiceType === service[i].serviceType) {
                    setError("block");
                    setContent("Service type already exists!");
                    check = false;
                    break;
                };
            };

            if (check) {
                const res = await axios.post(
                    "https://h8jv55-3004.csb.app/services/", {
                        serviceType: newServiceType,
                        price: +newPrice,
                        openingHours: newOpeningHours,
                        status: status,
                        description: newDescription
                    }
                );

                if (res.status === 201) {
                    setViewAddService("hidden");
                    setNewServiceType("");
                    setNewPrice("");
                    setNewOpeningHours("");
                    setStatus("Stop working");
                    setNewDescription("");
                    setError("hidden");
                    setContent("");
                    getDataService();
                }
            }
        }
    }

    const offViewAddService = () => {
        setViewAddService("hidden");
        setNewServiceType("");
        setNewPrice("");
        setNewOpeningHours("");
        setStatus("Stop working");
        setNewDescription("");
        setError("hidden");
        setContent("");
    };

    const cancelService = async (id) => {
        if (user.role === "admin") {
            let text = ("Are you sure to cancel this service?");
    
            if (window.confirm(text) === true) {
                const res = await axios.delete(
                    "https://h8jv55-3004.csb.app/services/" + id
                );
        
                if (res.status === 200) {
                    getDataService();
                }
            }
        } else {
            setNotification("block");
            setTextNotification("You do not have the right to cancel this service!!");
        }
    }

    const offNotification = () => {
        setNotification("hidden");
        setTextNotification("");
    };

    useEffect(() => {
        getDataService();
    }, []);

    useEffect(() => {

    }, [])

    const ViewEditService = ` ${viewEditService} fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-[#0000001d] p-[50px] z-[15]`
    const ViewAddSerice = ` ${viewAddService} fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-[#0000004d] p-[50px] z-[15]`
    const Notification = ` ${notification} fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-[#0000004d] z-[15]`;

    return (
        <div className=''>
            <NavBarAdmin />
            <div className='w-[80%] float-right h-screen'>
                <HeaderAdmin />
                <div className='p-[15px]'>
                    <div className='bg-[#F5F6F9] border border-[#D8D8D8] p-[15px]'>
                        <div className='flex itemscenter justify-between p-[10px] border-b relative'>
                            <div className='flex items-center gap-[50px]'>
                                <div>
                                    <h3 className='text-[18px] font-semibold text-[#5F6E8A]'>Services</h3>
                                    <div className='absolute bottom-0 left-0 w-[120px] content-[""] h-[3px] bg-[#5F6E8A]'></div>
                                </div>
                            </div>
                            <button
                                onClick={onViewAddService}
                                className='rounded-[2px] bg-[#25AEE4] p-[5px_15px_5px_15px] font-medium text-[#fff]'>
                                Create Service
                            </button>
                        </div>
                        <div className='border mt-[30px] bg-[#fff]'>
                            <div className='flex p-[15px] border-b text-[#BEC9D8] font-semibold'>
                                <div className='flex items-end w-[5%]'>
                                    <p>ID</p>
                                    <GoTriangleDown className='text-[19px]' />
                                </div>
                                <div className='flex items-end w-[15%]'>
                                    <p>Service Type</p>
                                    <GoTriangleDown className='text-[19px]' />
                                </div>
                                <div className='flex items-end w-[10%]'>
                                    <p>Price</p>
                                    <GoTriangleDown className='text-[19px]' />
                                </div>
                                <div className='flex items-end w-[20%]'>
                                    <p>Opening Hours</p>
                                    <GoTriangleDown className='text-[19px]' />
                                </div>
                                <div className='w-[10%]'>
                                    <p>Status</p>
                                </div>
                                <div className='w-[30%]'>
                                    <p>Description</p>
                                </div>
                                <div className='w-[10%]'>

                                </div>
                            </div>
                            <div>
                                {service?.map((item) => (
                                    <div key={item.id}>
                                        <div className='flex items-center p-[15px_10px_15px_10px] border-b text-[#5F5F5F] font-medium'>
                                            <div className='w-[5%] pl-[10px]'>
                                                <p>{item.id}</p>
                                            </div>
                                            <div className='w-[15%]'>
                                                <p>{item.serviceType}</p>
                                            </div>
                                            <div className='w-[10%] '>
                                                <p>{item.price} $</p>
                                            </div>
                                            <div className='w-[20%]'>
                                                <p>{item.openingHours}</p>
                                            </div>
                                            <div className='w-[10%] font-bold'>
                                                {item.status === "Is active" ? (
                                                    <p className='text-green-500'>{item.status}</p>
                                                ) : (
                                                    <p className='text-[#F44336]'>{item.status}</p>
                                                )}

                                            </div>
                                            <div className='w-[30%]'>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className='w-[10%] flex flex-col items-center justify-center gap-[10px]'>
                                                <button onClick={() => onViewEditService(item.id)}
                                                    className='flex items-center justify-center rounded-[5px] gap-[5px] w-[60%] bg-green-500 p-[2px_0px_2px_0px] text-[#fff]'>
                                                    <FiEdit />
                                                    Edit
                                                </button>
                                                <button onClick={() => cancelService(item.id)}
                                                    className='flex items-center justify-center rounded-[5px] gap-[5px] w-[60%] bg-[#F44336] p-[2px_0px_2px_0px] text-[#fff]'>
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* -------------------------------------------- */}
                    <div className={ViewEditService}>
                        <div className='flex flex-col items-center bg-[#fff] rounded-[5px] w-[50%] h-fit'>
                            <div className='text-center mt-[20px]'>
                                <h1 className='text-[40px] font-semibold text-[#5A6A6E]'>Edit Service</h1>
                            </div>
                            <div className='p-[25px] w-[80%]'>
                                <div className='flex flex-col gap-[20px]'>
                                    <div className='flex items-center gap-[10px]'>
                                        <p className='w-[30%]'>Service Type:</p>
                                        <input type='text'
                                            value={serviceTypeChange}
                                            onChange={(e) => setServiceTypeChange(e.target.value)}
                                            className='border w-[70%] rounded-[10px] p-[5px_0px_5px_15px]'>
                                        </input>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <p className='w-[30%]'>Price:</p>
                                        <input type='number'
                                            value={priceChange}
                                            onChange={(e) => setPriceChange(e.target.value)}
                                            className='border w-[70%] rounded-[10px] p-[5px_0px_5px_15px]'>
                                        </input>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <p className='w-[30%]'>Opening Hours:</p>
                                        <input type='text'
                                            value={openingHoursChange}
                                            onChange={(e) => setOpeningHoursChange(e.target.value)}
                                            className='border w-[70%] rounded-[10px] p-[5px_0px_5px_15px]'>
                                        </input>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <p className='w-[30%]'>Status:</p>
                                        <select
                                            value={statusChange}
                                            onChange={(e) => setStatusChange(e.target.value)}
                                            className='border w-[70%] rounded-[10px] p-[5px_0px_5px_15px]'>
                                            <option value="Is active">Is active</option>
                                            <option value="Stop working">Stop working</option>
                                        </select>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <p className='w-[30%]'>Description:</p>
                                        <textarea type='text'
                                            value={descriptionChange}
                                            onChange={(e) => setDescriptionChange(e.target.value)}
                                            className='border w-[70%] h-[200px] rounded-[10px] p-[5px_0px_5px_15px]'>
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end gap-[15px] p-[25px_100px_25px_50px] w-full'>
                                <button
                                    onClick={() => saveDataService(editService.id)}
                                    className='flex items-center gap-[5px] p-[5px_15px_5px_15px] bg-[#1750A8] rounded-[10px] text-[#fff]'>
                                    <GiSave />
                                    Save
                                </button>
                                <button
                                    onClick={offViewEditService}
                                    className='flex items-center gap-[5px] p-[5px_15px_5px_15px] bg-[#EB1212] rounded-[10px] text-[#fff]'>
                                    <AiOutlineRollback />
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={ViewAddSerice}>
                        <div className='flex flex-col items-center bg-[#fff] rounded-[5px] w-[50%] h-fit'>
                            <div className='text-center mt-[20px]'>
                                <h1 className='text-[40px] font-semibold text-[#5A6A6E]'>Add New Service</h1>
                            </div>
                            <div className='flex flex-col gap-[20px] p-[25px] w-[80%]'>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='w-[30%]'>Service Type:</p>
                                    <input value={newServiceType}
                                        onChange={(e) => setNewServiceType(e.target.value)}
                                        type='text' className='border w-[70%] rounded-[10px] p-[5px_15px_5px_15px]'></input>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='w-[30%]'>Price:</p>
                                    <input value={newPrice}
                                        onChange={(e) => setNewPrice(e.target.value)}
                                        type='number' className='border w-[70%] rounded-[10px] p-[5px_15px_5px_15px]'></input>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='w-[30%]'>Opening Hours:</p>
                                    <input value={newOpeningHours}
                                        onChange={(e) => setNewOpeningHours(e.target.value)}
                                        type='text' className='border w-[70%] rounded-[10px] p-[5px_15px_5px_15px]'></input>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='w-[30%]'>Status:</p>
                                    <select value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        className='border w-[70%] rounded-[10px] p-[5px_15px_5px_15px]'>
                                        <option value="Is active">Is active</option>
                                        <option value="Stop working">Stop working</option>
                                    </select>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='w-[30%]'>Description:</p>
                                    <textarea type='text'
                                        value={newDescription}
                                        onChange={(e) => setNewDescription(e.target.value)}
                                        className='border w-[70%] h-[200px] rounded-[10px] p-[5px_15px_5px_15px]'>
                                    </textarea>
                                </div>
                            </div>
                            <div className='flex justify-end gap-[15px] p-[25px_100px_25px_50px] w-full'>
                                <div className={error}>
                                    <p className='text-red-500 font-semibold text-center shadow-[#D44040] drop-shadow-[0_0_5px]'>{content}</p>
                                </div>
                                <button
                                    onClick={postNewDataService}
                                    className='flex items-center gap-[5px] p-[5px_15px_5px_15px] bg-[#1750A8] rounded-[10px] text-[#fff]'>
                                    <MdMiscellaneousServices />
                                    Add New
                                </button>
                                <button
                                    onClick={offViewAddService}
                                    className='flex items-center gap-[5px] p-[5px_15px_5px_15px] bg-[#EB1212] rounded-[10px] text-[#fff]'>
                                    <AiOutlineRollback />
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>

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
                </div>

            </div>
        </div>
    )
}

export default Services