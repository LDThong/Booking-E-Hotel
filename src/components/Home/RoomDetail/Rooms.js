import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderBooking from "../Booking/HeaderBooking";
import FooterBooking from "../Booking/FooterBooking";
import axios from "axios";

export default function Rooms() {
    const [roomData, setRoomData] = useState([]);

    const getData = async () => {
        const response = await axios.get("https://h8jv55-3004.csb.app/roomTypes")
        if (response.status === 200) {
            setRoomData(response.data)
        }
      };

    useEffect(() => {
    getData();
    }, []);
  return (
    <div>
        <HeaderBooking />
        <div className="lg:w-[1240px] lg:mx-auto">
            <div>
                
            <div className="flex bg-[#f7f7f7] p-[10px] mb-[70px] w-full">
                <div className="w-[87%]">
                <div className="flex items-center bg-[#7F7159] text-[#fff] font-bold h-[40px] w-full mb-[1px]">
                    <div className="flex items-center justify-center w-[25%] h-full">
                    Room Type
                    </div>
                    <div className="flex items-center justify-center w-[57%] border-r border-[#fff] h-full">
                    Description
                    </div>
                    <div className="flex items-center justify-center w-[18%] border-r border-[#fff] h-full">
                    Price
                    </div>
                </div>
                {
                    roomData?.map((item, index) => (
                    <div
                        key={index}
                        className="flex w-full border border-b-[#000] mb-[25px]"
                    >
                        <div className="flex flex-col p-[10px] w-[25%] border-yellow-700 border">
                        <div>
                            <img src={item?.images}></img>
                        </div>
                        <div className="my-[20px]">
                            <h1 className="text-[18px] font-bold">
                            {item?.room_type}
                            </h1>
                            <p className="font-bold text-[14px]">
                            Max people: {item?.capacity}
                            </p>
                            <p className="font-bold text-[14px]">
                            Bed: {item?.bed_type}
                            </p>
                            <p className="font-bold text-[14px]">
                            Room Size: {item?.room_type}
                            </p>
                            <Link to={"/room-detail/" + item.id}>
                            <div className="flex items-center italic">
                                <img
                                className="w-[25px]"
                                src="/images/Information_icon.png"
                                ></img>
                                <p className="text-[#4F82BB] text-[14px]">
                                View room details
                                </p>
                            </div>
                            </Link>
                        </div>
                        </div>
                        <div className="flex w-[75%] h-fit">
                        <div className="p-[10px] border border-gray-300 w-[75.5%] leading-[22px]">
                            <h1 className="font-bold text-[14px]">Grand opening</h1>
                            <div className="flex items-center gap-[5px] pl-[15px]">
                            <FaCheck className="text-yellow-600 text-[12px]" />
                            <p className="font-bold text-[13.5px]">Breakfast</p>
                            </div>
                            <div className="flex gap-[3px] items-start">
                            <span>♦</span>
                            <p className="text-[12.5px]">
                            {item?.description}
                            </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center w-[24.5%] border border-gray-300 text-[#0AB21B] pt-[15px]">
                            <div className="flex items-baseline gap-[5px]">
                            <p
                                // onChange={(e) => setPriceRoom(e.target.value)}
                                className="font-bold text-[20px]"
                            >
                                {item?.price}
                            </p>
                            <span className="text-[12px] font-semibold">USD</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
        <FooterBooking />
    </div>
    
  )
}
