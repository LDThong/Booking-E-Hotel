import React, { useState } from 'react';
import NavBarAdmin from '../NavBarAdmin';
import HeaderAdmin from '../HeaderAdmin';
import axios from 'axios';
import { AiOutlineRollback } from 'react-icons/ai';
import {BiSolidDiscount} from 'react-icons/bi';
import {FaRegCircleXmark} from 'react-icons/fa6';


function Promotions() {
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")));
    const [dataPromotion, setDataPromotion] = useState(null);
    const [viewAddPromotion, setViewAddPromotion] = useState("hidden");
    const [newPromotionName, setNewPromotionName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newDiscountPercentage, setNewDiscountPercentage]= useState("");
    const [error, setError] = useState("hidden");
    const [content, setContent] = useState('');
    const date = new Date().toLocaleString();
    const [notification, setNotification] = useState("hidden");
    const [textNotification, setTextNotification] = useState('');

    const getDataPromotion = async () => {
        const res = await axios.get(
            "https://h8jv55-3004.csb.app/promotions"
        );

        if (res.status === 200) {
            setDataPromotion(res.data);
        };
    };

    const handleCancelPromotion = async (id) => {
        if (user.role === "admin") {
            const res = await axios.delete(
                "https://h8jv55-3004.csb.app/promotions/" + id
            );

            if (res.status === 200) {
                getDataPromotion();
            }
        } else {
            setNotification("block");
            setTextNotification("You do not have the right to delete this promotion!!")
        }
    }

    const onViewAddPromotion = () => {
        if (user.role === "admin") {
            setViewAddPromotion("block");
        } else {
            setNotification("block");
            setTextNotification("You do not have the right to add new promotion!!")
        }
    };

    const postNewDataPromotion = async () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomCode = '';
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomCode += characters.charAt(randomIndex);
        }

        if (newPromotionName === "" || newDescription === "" || newDiscountPercentage === "") {
            setError("block");
            setContent("Please enter complete information!");
        } else {
            const res = await axios.post(
                "https://h8jv55-3004.csb.app/promotions/", {
                    promotionName: newPromotionName,
                    description: newDescription,
                    discountPercentage: +newDiscountPercentage,
                    code: randomCode,
                    createAt: date
                }
            );
    
            if (res.status === 201) {
                setViewAddPromotion("hidden");
                setNewPromotionName("");
                setNewDescription("");
                setNewDiscountPercentage("");
                setError("hidden");
                setContent("");
                getDataPromotion();
            }
        }
    }

    const offViewAddPromotion = () => {
        setViewAddPromotion("hidden");
        setNewPromotionName("");
        setNewDescription("");
        setError("hidden");
        setContent("");
        setNewDiscountPercentage("");
    };

    const offNotification = () => {
        setNotification("hidden");
        setTextNotification("");
    };

    useState(() => {
        getDataPromotion();
    }, []);

    const ViewAddPromotion = ` ${viewAddPromotion} fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-[#0000004d] p-[50px] z-[15]`
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
                                    <h3 className='text-[18px] font-semibold text-[#5F6E8A]'>Promotions</h3>
                                    <div className='absolute bottom-0 left-0 w-[120px] content-[""] h-[3px] bg-[#5F6E8A]'></div>
                                </div>
                            </div>
                            <button
                                onClick={onViewAddPromotion}
                                className='rounded-[2px] bg-[#25AEE4] p-[5px_15px_5px_15px] font-medium text-[#fff]'>
                                Create Promotion
                            </button>
                        </div>
                        <div className='border mt-[30px] bg-[#fff]'>
                            <div className='flex items-center p-[15px] border-b text-[#BEC9D8] font-semibold'>
                                <div className='w-[5%]'>
                                    <p>ID</p>
                                </div>
                                <div className='w-[15%]'>
                                    <p>Promotion Name</p>
                                </div>
                                <div className='w-[30%]'>
                                    <p>Description</p>
                                </div>
                                <div className='w-[15%]'>
                                    <p>Discount Percentage</p>
                                </div>
                                <div className='w-[10%]'>
                                    <p>Code</p>
                                </div>
                                <div className='w-[15%]'>
                                    <p>Create At</p>
                                </div>
                                <div className='w-[10%]'>

                                </div>
                            </div>
                            <div>
                                {dataPromotion?.map((item) => (
                                    <div key={item.id}>
                                        <div className='flex items-center p-[15px_10px_15px_10px] border-b text-[#5F5F5F] font-medium'>
                                            <div className='w-[5%] pl-[10px]'>
                                                <p>{item?.id}</p>
                                            </div>
                                            <div className='w-[15%]'>
                                                <p>{item?.promotionName}</p>
                                            </div>
                                            <div className='w-[30%]'>
                                                <p>{item?.description}</p>
                                            </div>
                                            <div className='w-[15%] text-center'>
                                                <p>{item?.discountPercentage} %</p>
                                            </div>
                                            <div className='w-[10%]'>
                                                <p className='font-bold text-[#08219F]'>{item?.code}</p>
                                            </div>
                                            <div className='w-[15%]'>
                                                <p>{item?.createAt}</p>
                                            </div>
                                            <div className='w-[10%]'>
                                                <button onClick={() => handleCancelPromotion(item.id)}
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
                </div>
                {/* --------------------------------------------------- */}
                <div className={ViewAddPromotion}>
                    <div className='flex flex-col items-center bg-[#fff] rounded-[5px] w-[50%] h-fit'>
                        <div className='text-center mt-[20px]'>
                            <h1 className='text-[40px] font-semibold text-[#5A6A6E]'>Add New Service</h1>
                        </div>
                        <div className='flex flex-col gap-[20px] p-[25px] w-[80%]'>
                            <div className='flex items-center gap-[10px]'>
                                <p className='w-[30%]'>Promotion Name:</p>
                                <input value={newPromotionName}
                                    onChange={(e) => setNewPromotionName(e.target.value)}
                                    type='text' className='border w-[70%] rounded-[10px] p-[5px_15px_5px_15px]'></input>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <p className='w-[30%]'>Description:</p>
                                <textarea type='text'
                                    value={newDescription}
                                    onChange={(e) => setNewDescription(e.target.value)}
                                    className='border w-[70%] h-[85px] rounded-[10px] p-[5px_15px_5px_15px]'>
                                </textarea>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <p className='w-[30%]'>Discount Percentage:</p>
                                <input value={newDiscountPercentage}
                                    onChange={(e) => setNewDiscountPercentage(e.target.value)}
                                    type='number' className='border w-[70%] rounded-[10px] p-[5px_15px_5px_15px]'></input>
                            </div>
                        </div>
                        <div className='flex justify-end gap-[15px] p-[25px_100px_25px_50px] w-full'>
                            <div className={error}>
                                <p className='text-red-500 font-semibold text-center shadow-[#D44040] drop-shadow-[0_0_5px]'>{content}</p>
                            </div>
                            <button
                                onClick={postNewDataPromotion}
                                className='flex items-center gap-[5px] p-[5px_15px_5px_15px] bg-[#1750A8] rounded-[10px] text-[#fff]'>
                                <BiSolidDiscount />
                                Add New
                            </button>
                            <button
                                onClick={offViewAddPromotion}
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
    )
}

export default Promotions