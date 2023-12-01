import React, { useEffect, useState } from 'react';
import NavBarAdmin from '../NavBarAdmin';
import HeaderAdmin from '../HeaderAdmin';
import {AiOutlineReload} from 'react-icons/ai';
import axios from 'axios';

function Reports() {
  const [firstDate, setFirstDate] = useState(null);
  const [lastDate, setLastDate] = useState(null);
  const [dataReport, setDataReport] = useState(null);
  const [listData, setListData] = useState([]);
  const [total, setTotal] = useState(0);

  const getDataReport = async () => {
    const res = await axios.get(
      "https://h8jv55-3004.csb.app/reports"
    );

    if (res.status === 200) {
      setDataReport(res.data);
    };
  };

  const toDate = (string) =>{
    return new Date(string);
  };

  const handleSearch = () => {
    const result = dataReport.filter((item) => toDate(item.createAt) >= firstDate && toDate(item.createAt) <= lastDate);
    setListData(result);
    const totalPrice = result.reduce((total, item) => total + parseFloat(item.historyBooking.total), 0);
    setTotal(totalPrice);
  };


  useEffect(() => {
    getDataReport();
  }, []);

  return (
    <div className=''>
      <NavBarAdmin />
      <div className='w-[80%] float-right h-screen'>
        <HeaderAdmin />
        <div className='p-[15px]'>
          <div className='bg-[#fff] border border-[#D8D8D8] p-[15px]'>
            <div className='pb-[5px]'>
              <h1 className='text-[#484B6C] text-[30px] font-semibold'>Revenue</h1>
            </div>
            <div className='flex items-center gap-[15px] mb-[20px]'>
              <input type='date'
                onChange={e=> setFirstDate(new Date(e.target.value))}
                className='border-[2px] p-[5px_10px_5px_10px] rounded-[10px] focus:outline-none focus:shadow focus:shadow-gray-600'>
              </input>
              <input type='date'
                onChange={e=> setLastDate(new Date(e.target.value))}
                className='border-[2px] p-[5px_10px_5px_10px] rounded-[10px] focus:outline-none focus:shadow focus:shadow-gray-600'>
              </input>
              <button 
                onClick={handleSearch}
                className='bg-[#64B5F6] p-[5px_10px_5px_10px] text-[25px] rounded-[10px]'>
                <AiOutlineReload />
              </button>
            </div>

            <table className='w-full mb-[10px]'>
              <tr className='border-[2px] w-full'>
                <th className='w-[5%] border-[2px]'>ID</th>
                <th className='w-[71%] border-[2px]'>Info Client</th>
                <th className='w-[7%] border-[2px]'>Total</th>
                <th className='w-[22%] border-[2px]'>Create At</th>
              </tr>
              {listData?.map((item) => (
                <tr key={item.id} className='border-[2px] w-full'>
                  <td className='w-[5%] border-[2px] text-center'>{item.id}</td>
                  <td className='w-[71%] border-[2px]'>
                    <div className='flex'>
                      <div className='flex flex-col justify-center w-[40%] border-r-[2px]'>
                        <div className='flex flex-col justify-center items-center h-[50%] border-b-[2px] py-[5px]'>
                          <p className='font-bold bg-[#0F78AB] w-fit text-[#fff] p-[3px] rounded-[4px]'>Check In:</p>
                          {item.historyBooking?.checkin}
                        </div>
                        <div className='flex flex-col justify-center items-center h-[50%] py-[5px]'>
                          <p className='font-bold bg-[#47443F] w-fit text-[#fff] p-[3px] rounded-[4px]'>Check Out:</p>
                          {item.historyBooking?.checkout}
                        </div>
                      </div>
                      <div className='w-[45%] border-r-[2px]'>
                        <div className='flex items-center gap-[5px] border-b-[2px] p-[5px_15px_5px_15px]'>
                          <p>First Name:</p>
                          <p>{item.historyBooking?.firstName}</p>
                        </div>
                        <div className='flex items-center gap-[5px] border-b-[2px] p-[5px_15px_5px_15px]'>
                          <p>Last Name:</p>
                          <p>{item.historyBooking?.lastName}</p>
                        </div>
                        <div className='flex items-center gap-[5px] border-b-[2px] p-[5px_15px_5px_15px]'>
                          <p>Email:</p>
                          <p>{item.historyBooking?.email}</p>
                        </div>
                        <div className='flex items-center gap-[5px] border-b-[2px] p-[5px_15px_5px_15px]'>
                          <p>Phone:</p>
                          <p>{item.historyBooking?.phoneNum}</p>
                        </div>
                        <div className='flex items-center gap-[5px] p-[5px_15px_5px_15px]'>
                          <p>Address:</p>
                          <p>{item.historyBooking?.address}</p>
                        </div>
                      </div>
                      <div className='w-[15%]'>
                        <div className='flex flex-col items-center justify-center gap-[20px] h-full'>
                          <p className='font-bold bg-green-500 w-fit text-[#fff] p-[3px] rounded-[4px]'>Status:</p>
                          <p>{item.historyBooking?.status}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='w-[7%] border-[2px] text-center'>$ {item.historyBooking?.total}</td>
                  <td className='w-[22%] border-[2px] text-center'>{item.createAt}</td>
                </tr>
              ))}
            </table>
            
            <div className='flex items-center gap-[10px]'>
              <p className='font-semibold'>Total income:</p>
              <p className='text-[#00A150] font-bold'>$ {total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports