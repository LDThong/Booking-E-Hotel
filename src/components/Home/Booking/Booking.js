import React, { useEffect, useState } from 'react';
import {FaCheck} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeaderBooking from './HeaderBooking';
import FooterBooking from './FooterBooking';
import axios from 'axios';

function Booking() {
    const [roomData, setRoomData] = useState([]);
    const [bookingData, setBookingData] = useState([]);
    const [quantityRoom, setQuantityRoom] = useState(0);
    // const [priceRoom, setPriceRoom] = useState(null)

    const getData = async () => {
        const response = await axios.get(
            "https://h8jv55-3004.csb.app/roomHasBooking"
        );
        const response1 = await axios.get(
            "https://h8jv55-3004.csb.app/roomTypes"
        )

        if (response.status === 200) {
            setBookingData(response.data);
            
        };
        if (response1.status === 200) {
            setRoomData(response1.data);
        }
    };


    useEffect(() => {
        getData();
    }, []);


return (
    <div>
        <HeaderBooking />
        <div className='lg:w-[1240px] lg:mx-auto'>
            <div>
                <div className='flex bg-[#f7f7f7] p-[10px] mb-[70px] w-full'>
                    <div className='w-[87%]'>
                        <div className='flex items-center bg-[#7F7159] text-[#fff] font-bold h-[40px] w-full mb-[1px]'>
                            <div className='flex items-center justify-center w-[25%] h-full'>
                                Room Type
                            </div>
                            <div className='flex items-center justify-center w-[40%] border-r border-[#fff] h-full'>
                                Options
                            </div>
                            <div className='flex items-center justify-center w-[18%] border-r border-[#fff] h-full'>
                                Price
                            </div>
                            <div className='flex items-center justify-center w-[17%] h-full'>
                                Select Rooms
                            </div>
                        </div>
                        <div className='flex w-full border border-b-[#000] mb-[25px]'>
                            <div className='flex flex-col p-[10px] w-[25%] border-yellow-700 border'>
                                <div>
                                    <img src='/images/Deluxe-Sea-View_Marcom-1.png'></img>
                                </div>
                                <div className='my-[20px]'>
                                    <h1 className='text-[18px] font-bold'>DELUXE</h1>
                                    <p className='font-bold text-[14px]'>Max people:</p>
                                    <p className='font-bold text-[14px]'>Bed:</p>
                                    <p className='font-bold text-[14px]'>View:</p>
                                    <p className='font-bold text-[14px]'>Room Size:</p>
                                    <Link>
                                        <div className='flex items-center italic'>
                                            <img className='w-[25px]' src='/images/Information_icon.png'></img>
                                            <p className='text-[#4F82BB] text-[14px]'>View room details</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex w-[75%] h-fit'>
                                <div className='p-[10px] border border-gray-300 w-[53.5%] leading-[22px]'>
                                    <h1 className='font-bold text-[14px]'>Grand opening</h1>
                                    <div className='flex items-center gap-[5px] pl-[15px]'>
                                        <FaCheck className='text-yellow-600 text-[12px]'/>
                                        <p className='font-bold text-[13.5px]'>Breakfast</p>
                                    </div>
                                    <div className='flex gap-[3px] items-start'>
                                        <span>♦</span>
                                        <p className='text-[12.5px]'>Guests can cancel free of charge up to 3 days prior to arrival. 
                                            <br />Guests will be charged the first night if they cancel within 3 days prior to arrival.</p>
                                    </div>
                                </div>
                                <div className='flex items-start justify-center w-[24.5%] border border-gray-300 text-[#0AB21B] pt-[15px]'>
                                    <div className='flex items-baseline gap-[5px]'>
                                        <p 
                                            // onChange={(e) => setPriceRoom(e.target.value)}
                                            className='font-bold text-[20px]'>
                                            250
                                        </p>
                                        <span className='text-[12px] font-semibold'>USD</span>
                                    </div>
                                </div>
                                <div className='w-[22%] border border-gray-300 p-[15px_35px_15px_35px]'>
                                    <select 
                                        onChange={(e) => setQuantityRoom(e.target.value)}
                                        className='w-full border-[#000] border'>
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='flex w-full border border-b-[#000] mb-[25px]'>
                            <div className='flex flex-col p-[10px] w-[25%] border-yellow-700 border'>
                                <div>
                                    <img src='/images/Deluxe-Sea-View_Marcom-1.png'></img>
                                </div>
                                <div className='my-[20px]'>
                                    <h1 className='text-[18px] font-bold'>DELUXE</h1>
                                    <p className='font-bold text-[14px]'>Max people:</p>
                                    <p className='font-bold text-[14px]'>Bed:</p>
                                    <p className='font-bold text-[14px]'>View:</p>
                                    <p className='font-bold text-[14px]'>Room Size:</p>
                                    <Link>
                                        <div className='flex items-center italic'>
                                            <img className='w-[25px]' src='/images/Information_icon.png'></img>
                                            <p className='text-[#4F82BB] text-[14px]'>View room details</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex w-[75%] h-fit'>
                                <div className='p-[10px] border border-gray-300 w-[53.5%] leading-[22px]'>
                                    <h1 className='font-bold text-[14px]'>Grand opening</h1>
                                    <div className='flex items-center gap-[5px] pl-[15px]'>
                                        <FaCheck className='text-yellow-600 text-[12px]'/>
                                        <p className='font-bold text-[13.5px]'>Breakfast</p>
                                    </div>
                                    <div className='flex gap-[3px] items-start'>
                                        <span>♦</span>
                                        <p className='text-[12.5px]'>Guests can cancel free of charge up to 3 days prior to arrival. 
                                            <br />Guests will be charged the first night if they cancel within 3 days prior to arrival.</p>
                                    </div>
                                </div>
                                <div className='flex items-start justify-center w-[24.5%] border border-gray-300 text-[#0AB21B] pt-[15px]'>
                                    <div className='flex items-baseline gap-[5px]'>
                                        <p className='font-bold text-[20px]'>250</p>
                                        <span className='text-[12px] font-semibold'>USD</span>
                                    </div>
                                </div>
                                <div className='w-[22%] border border-gray-300 p-[15px_35px_15px_35px]'>
                                    <select className='w-full border-[#000] border'>
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='flex w-full border border-b-[#000] mb-[25px]'>
                            <div className='flex flex-col p-[10px] w-[25%] border-yellow-700 border'>
                                <div>
                                    <img src='/images/Deluxe-Sea-View_Marcom-1.png'></img>
                                </div>
                                <div className='my-[20px]'>
                                    <h1 className='text-[18px] font-bold'>DELUXE</h1>
                                    <p className='font-bold text-[14px]'>Max people:</p>
                                    <p className='font-bold text-[14px]'>Bed:</p>
                                    <p className='font-bold text-[14px]'>View:</p>
                                    <p className='font-bold text-[14px]'>Room Size:</p>
                                    <Link>
                                        <div className='flex items-center italic'>
                                            <img className='w-[25px]' src='/images/Information_icon.png'></img>
                                            <p className='text-[#4F82BB] text-[14px]'>View room details</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex w-[75%] h-fit'>
                                <div className='p-[10px] border border-gray-300 w-[53.5%] leading-[22px]'>
                                    <h1 className='font-bold text-[14px]'>Grand opening</h1>
                                    <div className='flex items-center gap-[5px] pl-[15px]'>
                                        <FaCheck className='text-yellow-600 text-[12px]'/>
                                        <p className='font-bold text-[13.5px]'>Breakfast</p>
                                    </div>
                                    <div className='flex gap-[3px] items-start'>
                                        <span>♦</span>
                                        <p className='text-[12.5px]'>Guests can cancel free of charge up to 3 days prior to arrival. 
                                            <br />Guests will be charged the first night if they cancel within 3 days prior to arrival.</p>
                                    </div>
                                </div>
                                <div className='flex items-start justify-center w-[24.5%] border border-gray-300 text-[#0AB21B] pt-[15px]'>
                                    <div className='flex items-baseline gap-[5px]'>
                                        <p className='font-bold text-[20px]'>250</p>
                                        <span className='text-[12px] font-semibold'>USD</span>
                                    </div>
                                </div>
                                <div className='w-[22%] border border-gray-300 p-[15px_35px_15px_35px]'>
                                    <select className='w-full border-[#000] border'>
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='flex w-full border border-b-[#000] mb-[25px]'>
                            <div className='flex flex-col p-[10px] w-[25%] border-yellow-700 border'>
                                <div>
                                    <img src='/images/Deluxe-Sea-View_Marcom-1.png'></img>
                                </div>
                                <div className='my-[20px]'>
                                    <h1 className='text-[18px] font-bold'>DELUXE</h1>
                                    <p className='font-bold text-[14px]'>Max people:</p>
                                    <p className='font-bold text-[14px]'>Bed:</p>
                                    <p className='font-bold text-[14px]'>View:</p>
                                    <p className='font-bold text-[14px]'>Room Size:</p>
                                    <Link>
                                        <div className='flex items-center italic'>
                                            <img className='w-[25px]' src='/images/Information_icon.png'></img>
                                            <p className='text-[#4F82BB] text-[14px]'>View room details</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex w-[75%] h-fit'>
                                <div className='p-[10px] border border-gray-300 w-[53.5%] leading-[22px]'>
                                    <h1 className='font-bold text-[14px]'>Grand opening</h1>
                                    <div className='flex items-center gap-[5px] pl-[15px]'>
                                        <FaCheck className='text-yellow-600 text-[12px]'/>
                                        <p className='font-bold text-[13.5px]'>Breakfast</p>
                                    </div>
                                    <div className='flex gap-[3px] items-start'>
                                        <span>♦</span>
                                        <p className='text-[12.5px]'>Guests can cancel free of charge up to 3 days prior to arrival. 
                                            <br />Guests will be charged the first night if they cancel within 3 days prior to arrival.</p>
                                    </div>
                                </div>
                                <div className='flex items-start justify-center w-[24.5%] border border-gray-300 text-[#0AB21B] pt-[15px]'>
                                    <div className='flex items-baseline gap-[5px]'>
                                        <p className='font-bold text-[20px]'>250</p>
                                        <span className='text-[12px] font-semibold'>USD</span>
                                    </div>
                                </div>
                                <div className='w-[22%] border border-gray-300 p-[15px_35px_15px_35px]'>
                                    <select className='w-full border-[#000] border'>
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='fixed right-[8.5%] w-[13%] text-center'>
                        <button className='mt-[10px] p-[5px_22px_5px_22px] bg-gradient-to-b from-[#ad9d83] to-[#7F7159] rounded-[2px] text-[#fff] font-medium'>
                            RESERVE
                        </button>
                        {/* Khi chưa chọn phòng */}
                        <div className='mt-[5px]'>
                            <p className='font-medium text-red-500 text-[14px]'>Room not selected</p>
                        </div>
                        {/* Sau khi đã chọn phòng */}
                        {/* <div className='flex flex-col items-center mt-[5px]'>
                            <p>1 rooms</p>
                            <div className='flex items-baseline gap-[5px] text-[#0AB21B]'>
                                <p className='font-bold text-[20px]'>250</p>
                                <span className='text-[12px] font-semibold'>USD</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        <FooterBooking />
    </div>
  )
}

export default Booking