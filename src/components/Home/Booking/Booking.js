import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderBooking from "./HeaderBooking";
import FooterBooking from "./FooterBooking";
import axios from "axios";
import { SearchContext } from "../../../context/SearchContext";

function Booking() {
  const [roomData, setRoomData] = useState([]);
  const { searchData } = useContext(SearchContext);
  const [selectedValues, setSelectedValues] = useState({});
  const [dataFetch, setDataFetch] = useState(false);
  const [errorValue, setErrorValue] = useState("Room not selected");
  const [countRoom, setCountRoom] = useState(0);
  const [selectedTotal, setSelectedTotal] = useState({});
  const [total, setTotal] = useState(0);
  const [totalPeople, setTotalPeople] = useState(0)
  const navigate = useNavigate()
  



  const getData = async () => {
    if (searchData) {
      window.localStorage.setItem("AvailableRoom", JSON.stringify(searchData));
      setRoomData(searchData);
      setDataFetch(true);
      const people = JSON.parse(window.localStorage.getItem('people'))
      let countPeople = 0;
      for (const key in people) {
       countPeople += +people[key];
      }
      setTotalPeople(countPeople);
    } else {
      setRoomData(JSON.parse(window.localStorage.getItem("AvailableRoom")));
      const people = JSON.parse(window.localStorage.getItem('people'))
      let countPeople = 0;
      for (const key in people) {
       countPeople += +people[key];
      }
      setTotalPeople(countPeople);
      setDataFetch(true);
    }
  };
  // console.log(searchData);
  const handleSelectChange = (e, itemId, itemPrice, itemAvailableQuatity) => {
    if (e.target.value < itemAvailableQuatity) {
      const { value } = e.target;
      setSelectedValues((prevState) => ({
        ...prevState,
        [itemId]: value,
      }));
      setErrorValue("");
      setSelectedTotal((prevState1) => ({
        ...prevState1,
        [itemId]: itemPrice,
      }));
    }else{
      console.log('errrrrrrrrrrrrrrror');
    }
  };

  const countRoomBook = () =>{
    let count = 0;
    for(const key in selectedValues){
        count += +selectedValues[key];
    }
    setCountRoom(count);
  }

  const countTotal = () =>{
    let totalP = 0;
    for (const keya in selectedValues) {
      for (const keyb in selectedTotal) {
        if (keya === keyb) {
          totalP += +selectedValues[keya]*selectedTotal[keyb];
        }
      }
    }
    setTotal(totalP);
  }
  // const a = {...selectedValues}
  // console.log(total);
  // console.log(a);
  // console.log(selectedTotal);

  const arrayOfObjects = [];

  const checkCapacity = (value) =>{
    let maxCapacity = 0;
    for (const key in value) {
      const selectData = roomData?.find(item=>item.id == key)
      maxCapacity += (selectData?.capacity)*parseFloat(value[key]);
    }
    if (maxCapacity < totalPeople) {
      return false;
    }else{
      return true;
    }
    
  }
  
  const handleBooking = () =>{
    if (checkCapacity(selectedValues)) {
      if (window.localStorage.getItem('checkin')) {
        for (const key in selectedValues) {
          if (selectedValues.hasOwnProperty(key)) {
            const id = parseInt(key);
            const value = parseInt(selectedValues[key]);
            arrayOfObjects.push({ id, value });
          }
        }
        if (arrayOfObjects.length>0) {
          window.localStorage.setItem('selectRoom',JSON.stringify(arrayOfObjects));
          window.localStorage.setItem('total',JSON.stringify(total));
        }
      }else{
        window.alert('Please input your date check in and out.')
        navigate('/')
      }
      navigate('/home/confirm')
    }else{
      setErrorValue('Your amount people less than the capacity of your room select.')
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(()=>{
    countRoomBook();
    countTotal();
  },[selectedValues])

  // console.log(roomData);

  useEffect(() => {
    let allZeros = true;
    for (const key in selectedValues) {
      if (selectedValues[key] !== "0") {
        allZeros = false;
        break; // If any value is not '0', exit the loop
      }
    }
    if (allZeros) {
      // All values are '0'
      setErrorValue("Room not selected");
    } else {
      // Not all values are '0'
      setErrorValue("");
    }
  }, [selectedValues]);
  // console.log(totalPeople);
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
                <div className="flex items-center justify-center w-[40%] border-r border-[#fff] h-full">
                  Options
                </div>
                <div className="flex items-center justify-center w-[18%] border-r border-[#fff] h-full">
                  Price
                </div>
                <div className="flex items-center justify-center w-[17%] h-full">
                  Select Rooms
                </div>
              </div>
              {dataFetch ? (
                roomData &&
                roomData?.map((item, index) => (
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
                      <div className="p-[10px] border border-gray-300 w-[53.5%] leading-[22px]">
                        <h1 className="font-bold text-[14px]">Grand opening</h1>
                        <div className="flex items-center gap-[5px] pl-[15px]">
                          <FaCheck className="text-yellow-600 text-[12px]" />
                          <p className="font-bold text-[13.5px]">Breakfast</p>
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
                            {item?.price}
                          </p>
                          <span className="text-[12px] font-semibold">USD</span>
                        </div>
                      </div>
                      <div className="w-[22%] border border-gray-300 p-[15px_35px_15px_35px]">
                        <select
                          onChange={(e) => handleSelectChange(e, item.id, item.price, item.avalableQuantity)}
                          className="w-full border-[#000] border"
                        >
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
                ))
              ) : (
                <p>loading...</p>
              )}
            </div>
            <div className="fixed right-[7%] w-[13%] text-center">
                <button className="mt-[10px] p-[5px_22px_5px_22px] bg-gradient-to-b from-[#ad9d83] to-[#7F7159] rounded-[2px] text-[#fff] font-medium"
                  onClick={handleBooking}
                >
                  RESERVE
                </button>
              
              {/* Khi chưa chọn phòng */}
              <div className="mt-[5px]">
                  <p className="font-medium text-red-500 text-[14px]">
                    {errorValue}
                  </p>
                </div>
              {/* Sau khi đã chọn phòng */}
              {selectedValues && (
                <div className="flex flex-col items-center mt-[5px]">
                  <p>{countRoom && countRoom} rooms</p>
                  <div className="flex items-baseline gap-[5px] text-[#0AB21B]">
                    <p className="font-bold text-[20px]">{total}</p>
                    <span className="text-[12px] font-semibold">USD</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterBooking />
    </div>
  );
}

export default Booking;
