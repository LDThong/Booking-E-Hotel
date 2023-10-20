import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import {GiCoffeeCup} from 'react-icons/gi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';

function RoomType() {
    let { id } = useParams();
    const [roomType, setRoomType] = useState({});
    const navigater = useNavigate();

    const getDataRoom = async () => {
        const res = await axios.get(
            "https://h8jv55-3004.csb.app/roomTypes/" + id
        );

        if (res.status === 200) {
            setRoomType(res.data);
        };
    };

    const handleBooking = () => {
        navigater('/')
    }

    useEffect(() => {
        getDataRoom();
    }, []);

  return (
    <div>
        <Header />
        <div className='lg:mt-[120px] 
            max-sm:mt-[62px]
            sm:max-lg:mt-[80px]'>
            <div className='w-full'>
                <div className='w-full'>
                    <img className='w-full' src='/images/Deluxe-Sea-View_Marcom-1.png'></img>
                </div>
                {roomType && (
                    <div className='flex flex-col justify-center items-center pb-[50px]
                        max-sm:px-[15px]
                        sm:max-lg:px-[25px]'>
                        <h1 className='text-[#A3258E] lg:text-[50px] font-["FS_Trajan_Pro"] lg:font-bold lg:p-[20px]
                            max-sm:text-[30px] max-sm:text-center max-sm:font-semibold max-sm:py-[30px]
                            sm:max-lg:text-[40px] sm:max-lg:font-bold sm:max-lg:py-[20px]'>
                            {roomType.room_type}
                        </h1>
                        <div className='border bg-[#f1eee6cc] max-w-[800px] mx-auto p-[50px] shadow-[0_0px_30px_0px_rgba(0,0,0,0.3)] text-center
                            max-sm:p-[10px]'>
                            <p className='lg:text-[18px] leading-[1.8] text-[#646461] font-medium
                                max-sm:text-[13.5px]
                                sm:max-lg:text-[14px]'>
                                {roomType.description}
                            </p>
                        </div>
                    </div>
                )}
                <div className='lg:w-[1300px] lg:mx-auto
                    max-sm:w-full
                    sm:max-lg:px-[25px]'>
                    <h1 className='text-[#A3258E] lg:text-[25px] font-["FS_Trajan_Pro"] font-bold py-[50px]
                        max-sm:text-[24px] max-sm:text-center max-sm:pb-[30px]
                        sm:max-lg:text-[24px]'>
                        ROOM FEATURES
                    </h1>
                    <ul className='flex flex-wrap text-[#646461] font-medium max-sm:px-[11px]'>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <img className='w-[30px]' src='/images/icon-wifi.png'></img>
                            Free wifi
                        </li>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <img className='w-[30px]' src='/images/icon-bon-tam.png'></img>
                            Bathtub or shower
                        </li>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <BsFillTelephoneFill className='text-[#A3258E] text-[25px]'/>
                            Landline
                        </li>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <img className='w-[30px]' src='/images/icon-ket-sat.png'></img>
                            Safe deposit box
                        </li>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <img className='w-[30px]' src='/images/icon-tivi.png'></img>
                            43 inch TV
                        </li>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <img className='w-[30px]' src='/images/icon-food.png'></img>
                            Free breakfast
                        </li>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <img className='w-[30px]' src='/images/icon-dieu-hoa.png'></img>
                            Air conditioning
                        </li>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <img className='w-[30px]' src='/images/icon-sofa.png'></img>
                            Sofa chair
                        </li>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <GiCoffeeCup className='text-[#A3258E] lg:text-[25px] max-sm:text-[60px] sm:max-lg:text-[35px]'/>
                            Free tea and coffee in the room
                        </li>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <img className='w-[30px]' src='/images/icon-may-say-toc.png'></img>
                            Hairdryer
                        </li>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <img className='w-[30px]' src='/images/icon-tu-quan-ao.png'></img>
                            Wardrobe
                        </li>
                        <li className='flex items-center gap-[5px] mb-[15px] px-[15px] lg:w-[25%] lg:text-[16px]
                            max-sm:text-[14px] max-sm:w-[50%]
                            sm:max-lg:w-[33.333%] sm:max-lg:text-[16px]'>
                            <img className='w-[30px]' src='/images/icon-guong-trang-diem.png'></img>
                            Make-up mirror
                        </li>
                    </ul>
                    
                    <h1 className='text-[#A3258E] lg:text-[25px] font-["FS_Trajan_Pro"] font-bold py-[50px] 
                        max-sm:text-center max-sm:text-[23px]
                        sm:max-lg:text-[24px]'>
                        AMENITIES AND SERVICES
                    </h1>
                    <div className='flex font-medium max-sm:px-[15px] max-sm:font-normal'>
                        <ul className='flex flex-wrap'>
                            <li className='relative flex pl-[25px] items-center mb-[10px]
                                before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-[#A3258E] before:absolute before:content-[""] before:left-0
                                w-[50%]
                                max-sm:pr-[5px] '>
                                <p className='text-[#646461] text-[16px] max-sm:text-[14px]'>Free shoe shine service</p>
                            </li>
                            <li className='relative flex pl-[25px] items-center mb-[10px]
                                before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-[#A3258E] before:absolute before:content-[""] before:left-0
                                w-[50%]
                                max-sm:pr-[5px]'>
                                <p className='text-[#646461] text-[16px] max-sm:text-[14px]'>Room service 24 hours a day</p>
                            </li>
                            <li className='relative flex pl-[25px] items-center mb-[10px]
                                before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-[#A3258E] before:absolute before:content-[""] before:left-0
                                w-[50%]
                                max-sm:pr-[5px] '>
                                <p className='text-[#646461] text-[16px] max-sm:text-[14px]'>Evening housekeeping service</p>
                            </li>
                            <li className='relative flex pl-[25px] items-center mb-[10px]
                                before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-[#A3258E] before:absolute before:content-[""] before:left-0
                                w-[50%]
                                max-sm:pr-[5px]'>
                                <p className='text-[#646461] text-[16px] max-sm:text-[14px]'>Transfers by Bentley or Rolls-Royce</p>
                            </li>
                            <li className='relative flex pl-[25px] items-center mb-[10px]
                                before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-[#A3258E] before:absolute before:content-[""] before:left-0
                                w-[50%]
                                max-sm:pr-[5px]'>
                                <p className='text-[#646461] text-[16px] max-sm:text-[14px]'>Child care service</p>
                            </li>
                            <li className='relative flex pl-[25px] items-center mb-[10px]
                                before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-[#A3258E] before:absolute before:content-[""] before:left-0
                                w-[50%]
                                max-sm:pr-[5px]'>
                                <p className='text-[#646461] text-[16px] max-sm:text-[14px]'>Services for people with disabilities</p>
                            </li>
                            <li className='relative flex pl-[25px] items-center mb-[10px]
                                before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-[#A3258E] before:absolute before:content-[""] before:left-0
                                w-[50%]
                                max-sm:pr-[5px]'>
                                <p className='text-[#646461] text-[16px] max-sm:text-[14px]'>Sightseeing tour service</p>
                            </li>
                            <li className='relative flex pl-[25px] items-center mb-[10px]
                                before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-[#A3258E] before:absolute before:content-[""] before:left-0
                                w-[50%]
                                max-sm:pr-[5px]'>
                                <p className='text-[#646461] text-[16px] max-sm:text-[14px]'>Currency exchange service</p>
                            </li>
                            <li className='relative flex pl-[25px] items-center mb-[10px]
                                before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-[#A3258E] before:absolute before:content-[""] before:left-0
                                w-[50%]
                                max-sm:pr-[5px]'>
                                <p className='text-[#646461] text-[16px] max-sm:text-[14px]'>Morning wake up call</p>
                            </li>
                            <li className='relative flex pl-[25px] items-center mb-[10px]
                                before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-[#A3258E] before:absolute before:content-[""] before:left-0
                                w-[50%]
                                max-sm:pr-[5px]'>
                                <p className='text-[#646461] text-[16px] max-sm:text-[14px]'>Laundry service</p>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full text-center lg:my-[100px] 
                        max-sm:m-[40px_0_20px_0]
                        sm:max-lg:my-[80px]'>
                        <button 
                            onClick={handleBooking}
                            className='p-[15px_50px_15px_50px] border border-[#A3258E] text-[#A3258E] font-["FS_Trajan_Pro"] font-semibold text-[18px]
                            hover:text-[#fff] hover:bg-[#A3258E]'>
                            Book now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default RoomType