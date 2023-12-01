import axios from 'axios';
import React, {  createContext, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

export default function Search() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [dataBooking, setDataBooking] = useState(null);
    const [roomHasBooking, setRoomHasBooking] = useState(null);
    const [roomTypes, setRoomTypes] = useState(null);
    const navigate = useNavigate();
    const {setSearchData} = useContext(SearchContext);
    const [adult, setAdult] = useState(null);
    const [childen, setChilden] = useState(null);


    const getDataBooking = async () =>{
        const response = await axios.get("https://h8jv55-3004.csb.app/bookings")
        if (response.status === 200) {
            setDataBooking(response.data)
            // console.log(response.data);
        }
        const response1 = await axios.get("https://h8jv55-3004.csb.app/roomHasBooking")
        if (response1.status === 200) {
            setRoomHasBooking(response1.data)
            // console.log(response1.data);
        }
        const response2 = await axios.get("https://h8jv55-3004.csb.app/roomTypes")
        if (response2.status === 200) {
            setRoomTypes(response2.data)
            // console.log(response2.data);
        }
    }
    const toDate = (string) =>{
        return new Date(string).getTime();
    }

    console.log(toDate(checkInDate));
    const handleSearch = () =>{
        const currentDate = new Date(new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }));
        // console.log(currentDate);
        if (checkInDate < currentDate || checkOutDate <= currentDate) {
            window.alert('Please select a Date on or after the current date.');
        }else if (checkInDate > checkOutDate) {
            window.alert('The check out date has to after the check in.');
        }else if(adult < 0 || adult === null){
            window.alert(`Can't book without adult`);
        }else{
            const a = dataBooking?.filter(item=>toDate(item.checkin) >= toDate(checkInDate) && toDate(item.checkin) < toDate(checkOutDate) || 
            toDate(item.checkout) > toDate(checkInDate) && toDate(item.checkout) <= toDate(checkOutDate) || toDate(item.checkin) < toDate(checkInDate) && toDate(item.checkout) > toDate(checkOutDate))
            const bookingIds = a.map(item=>item.id);
            console.log(a);
            const matchingBooking = roomHasBooking?.filter(item=> bookingIds.includes(item.bookingsId));
            const quantityMap = new Map();
            matchingBooking?.forEach(item => {
                const { roomTypesId, quantity } = item;
                if (quantityMap.has(roomTypesId)) {
                // If the roomTypesId exists in the map, add the quantity
                quantityMap.set(roomTypesId, quantityMap.get(roomTypesId) + quantity);
                } else {
                // If it doesn't exist, set the quantity in the map
                quantityMap.set(roomTypesId, quantity);
                }
            });
            const newmatchingBooking = []
            quantityMap.forEach((quantity, roomTypesId) => {
                newmatchingBooking.push({ roomTypesId, quantity });
            });
            // console.log(newmatchingBooking);
            const newArray = roomTypes?.map(roomType=>{
                const matchingRoomHasBooking = newmatchingBooking.find(item=>item.roomTypesId === roomType.id);
                const newQuatity = roomType.quantity - (matchingRoomHasBooking ? matchingRoomHasBooking.quantity : 0)
                return {...roomType, avalableQuantity: newQuatity};
            })

            setSearchData(newArray);
            const checkInAndOut = {
                checkin: checkInDate.toISOString().split('T')[0],
                checkout: checkOutDate.toISOString().split('T')[0],
            }
            const people = {
                adult: adult,
                childen: childen,
            }
            window.localStorage.setItem('checkin',JSON.stringify(checkInAndOut))
            window.localStorage.setItem('people',JSON.stringify(people))
            // navigate('/home/booking')
        }
    }
    useEffect(()=>{
        getDataBooking()
    },[])

    
  return (
    <div className='lg:grid lg:grid-cols-2 lg:w-full bg-[#fff] lg:p-[20px_15px_25px_15px] lg:gap-[10px]
        max-sm:p-[15px] 
        sm:max-lg:p-[15px]'>
        <div className='lg:flex lg:gap-[10px]
            sm:max-lg:flex sm:max-lg:justify-between sm:max-lg:mb-[10px]'>
            <div className='flex flex-col lg:gap-[15px] lg:w-[50%]
                sm:max-lg:w-[47%] '>
                <input type='date' className='border-b-[2px] border-gray-300 pb-[5px] outline-none
                    max-sm:mb-[15px]
                    sm:max-lg:mb-[15px]'
                    onChange={e=>setCheckInDate(new Date(e.target.value))}
                    ></input>
                <input type='number' className='border-b-[2px] pb-[5px] border-gray-300 outline-none
                    max-sm:mb-[15px]
                    sm:max-lg:mb-[15px]' placeholder='Adult'
                    onChange={e=>setAdult(e.target.value)}
                    ></input>
            </div>
            <div className='flex flex-col lg:gap-[15px] lg:w-[50%]
                sm:max-lg:w-[47%]'>
                <input type='date' className='border-b-[2px] border-gray-300 pb-[5px] outline-none
                    max-sm:mb-[15px]
                    sm:max-lg:mb-[15px]'
                    onChange={e=>setCheckOutDate(new Date(e.target.value))}
                    ></input>
                <input type='number' className='border-b-[2px] border-gray-300 pb-[5px] outline-none
                    max-sm:mb-[15px]
                    sm:max-lg:mb-[15px]' placeholder='Children'
                    onChange={e=>setChilden(e.target.value)}
                    ></input>
            </div>
        </div>
        <div className='flex flex-col justify-end'>
                <button
                    type='button'
                    onClick={handleSearch}
                    className='py-[10px] w-full bg-[#A3258E] text-[#fff] font-semibol'>Search</button>
        </div>
    </div>
  )
}
