import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderBooking from "./HeaderBooking";
import FooterBooking from "./FooterBooking";
import axios from "axios";

function PersonalManageBooking() {
  const [userBooking, setUserBooking] = useState(null);
  const [user, setUser] = useState(null);
  const [dataFetch, setDataFetch] = useState(false);

  const getUserBooking = async () => {
    const emailUser = JSON.parse(window.localStorage.getItem("user"));
    if (window.localStorage.getItem("user")) {
      const response = await axios.get("https://h8jv55-3004.csb.app/users");
      if (response.status === 200) {
        setUser(response.data.find((item) => item.email === emailUser));
      }
      const response2 = await axios.get(
        "https://h8jv55-3004.csb.app/roomHasBooking?_expand=bookings&_expand=roomTypes"
      );
      if (response2.status === 200) {
        setUserBooking(
          response2.data.filter(
            (item) =>
              item?.bookings?.userId ===
              response.data.find((item) => item.email === emailUser)?.id
          )
        );
        setDataFetch(true);
      }
    }
  };

  console.log(userBooking);
  const handleCancel = async (RHBid, bookingId) =>{
    if (window.confirm('Do you want cancel?')) {
      const deleteRHBResponse = await axios.delete('https://h8jv55-3004.csb.app/roomHasBooking/' + RHBid)
      if (deleteRHBResponse.status === 200) {
        const checkRHBResponse = await axios.get('https://h8jv55-3004.csb.app/roomHasBooking')
        const listCheck = checkRHBResponse.data?.filter(item=>item?.bookingsId === bookingId);
        if (listCheck.length <=0) {
          await axios.delete('https://h8jv55-3004.csb.app/bookings/' + bookingId)
        }
      }
      getUserBooking();
    }
  }

  useEffect(() => {
    getUserBooking();
  }, []);
  return (
    <div className="flex flex-col justify-between h-screen">
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
                  <div className="flex items-center justify-center w-[40%] border-r border-[#fff] h-full">
                    Infor
                  </div>
                  <div className="flex items-center justify-center w-[18%] border-r border-[#fff] h-full">
                    Price
                  </div>
                  <div className="flex items-center justify-center w-[17%] h-full">
                    Option
                  </div>
                </div>
                {dataFetch ? (
                  userBooking &&
                  userBooking?.map((item, index) => (
                    <div
                      key={index}
                      className="flex w-full border border-b-[#000] mb-[25px]"
                    >
                      <div className="flex flex-col p-[10px] w-[25%] border-yellow-700 border">
                        <div>
                          <img src="/images/Deluxe-Sea-View_Marcom-1.png"></img>
                        </div>
                        <div className="my-[20px]">
                          <h1 className="text-[18px] font-bold">
                            {item?.roomTypes?.room_type}
                          </h1>
                          <p className="font-bold text-[14px]">
                            Max people: {item?.roomTypes?.capacity}
                          </p>
                          <p className="font-bold text-[14px]">
                            Bed: {item?.roomTypes?.bed_type}
                          </p>
                          <p className="font-bold text-[14px]">
                            Room Size: {item?.roomTypes?.room_type}
                          </p>
                          <Link to={"/room-detail/" + item?.roomTypes?.id}>
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
                        <div className="p-[10px] border border-gray-300 w-[53.5%] leading-[22px]">
                          <div className="flex items-center gap-[5px] pl-[15px]">
                            <FaCheck className="text-yellow-600 text-[12px]" />
                            <p className="font-bold text-[13.5px]">
                              Checkin: {Date(item?.bookings?.checkin)}
                            </p>
                          </div>
                          <div className="flex items-center gap-[5px] pl-[15px]">
                            <FaCheck className="text-yellow-600 text-[12px]" />
                            <p className="font-bold text-[13.5px]">
                              Checkout: {Date(item?.bookings?.checkout)}
                            </p>
                          </div>
                          <div className="flex gap-[3px] items-start">
                            <span>♦</span>
                            <p className="text-[12.5px]">
                              Guests can cancel free of charge up to 3 days prior
                              to arrival.
                              <br />
                              Guests will be charged the first night if they
                              cancel within 3 days prior to arrival.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start justify-center w-[24.5%] border border-gray-300 text-[#0AB21B] pt-[15px]">
                          <div className="flex items-baseline gap-[5px]">
                            <p
                              // onChange={(e) => setPriceRoom(e.target.value)}
                              className="font-bold text-[20px]"
                            >
                              {item?.roomTypes?.price}
                            </p>
                            <span className="text-[12px] font-semibold">USD</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-[22.5%] border border-gray-300">
                          <button className="p-4 bg-red-200 rounded-full w-36"
                            onClick={()=>handleCancel(item?.id, item?.bookings?.id)}
                          >Cancel Booking</button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>You dont have any, please booking.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBooking />
    </div>
  );
}

export default PersonalManageBooking;
