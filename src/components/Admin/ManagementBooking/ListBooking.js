import React, { useEffect, useState } from 'react';
import NavBarAdmin from '../NavBarAdmin';
import HeaderAdmin from '../HeaderAdmin';
import {TbDots} from 'react-icons/tb';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {MdOutlineArrowBackIosNew} from 'react-icons/md';
import {TfiEmail} from 'react-icons/tfi';
import {FcPhoneAndroid} from 'react-icons/fc';
import {FaMapLocationDot} from 'react-icons/fa6';

function ListBooking() {
  const [dataBooking, setDataBooking] = useState(null);
  const [dataRHB, setDataRHB] = useState(null);
  const [checkCancel, setCheckCancel] = useState(true);
  const [tableRHB, setTableRHB] = useState("hidden");
  const [infoRHB, setInfoRHB] = useState(null);
  const date = new Date().toLocaleString();

  const getDataBooking = async () => {
    const res = await axios.get(
      "https://h8jv55-3004.csb.app/bookings"
    );
    const response = await axios.get(
      "https://h8jv55-3004.csb.app/roomHasBooking?_expand=roomTypes"
    );

    if (res.status === 200 && response.status === 200) {
      setDataBooking(res.data);
      setDataRHB(response.data)
    };
  };

  const handleDetails = async (id) => {
    const filterRHB = dataRHB.filter((item) => item.bookingsId === id)
    console.log(filterRHB);
    setInfoRHB(filterRHB);
    setTableRHB("block");
  };

  const handleCheckInOut = async (id, status) => {
    let check = true;
    const result = dataRHB.filter((item) => item.bookingsId === id);

    if (status === "pending") {
      await axios.patch(
        "https://h8jv55-3004.csb.app/bookings/" + id, {
        status: "Renting"
      }
      );
      getDataBooking();

    } else if (status === "Renting") {
      const chnage = await axios.patch(
        "https://h8jv55-3004.csb.app/bookings/" + id, {
        status: "Check Out"
      }
      );
      if (chnage.status === 200) {
        const res = await axios.get(
          "https://h8jv55-3004.csb.app/bookings/" + id
        );
        if (res.status === 200) {
          await axios.post(
            "https://h8jv55-3004.csb.app/reports",
            {
              historyBooking: res.data,
              createAt: date,
            }
          );
        }
        if (check) {
          for (let i = 0; i < result.length; i++) {
            const idRHB = result[i].id;
            const response = await axios.delete(
              "https://h8jv55-3004.csb.app/roomHasBooking/" + idRHB
            );
            if (response.status === 200) {
              await axios.delete(
                "https://h8jv55-3004.csb.app/bookings/" + id
              );
              check = false;
              break;
            }
          }
          
        }
        getDataBooking();
      }

    }

  };

  const handleCancel = async (id) => {
    let check = true;
    const result = dataRHB.filter((item) => item.bookingsId === id);

    const chnage = await axios.patch(
      "https://h8jv55-3004.csb.app/bookings/" + id, {
      status: "Cancel",
      total: 0,
    }
    );
    if (chnage.status === 200) {
      const res = await axios.get(
        "https://h8jv55-3004.csb.app/bookings/" + id
      );
      if (res.status === 200) {
        await axios.post(
          "https://h8jv55-3004.csb.app/reports",
          {
            historyBooking: res.data,
            createAt: date,
          }
        );
      }
      if (check) {
        for (let i = 0; i < result.length; i++) {
          const idRHB = result[i].id;
          const response = await axios.delete(
            "https://h8jv55-3004.csb.app/roomHasBooking/" + idRHB
          );
          if (response.status === 200) {
            await axios.delete(
              "https://h8jv55-3004.csb.app/bookings/" + id
            );
            check = false;
            break;
          }
        }

      }
      getDataBooking();
    }
  };

  const offViewRHB = () => {
    setTableRHB("hidden");
  }

  const roomHasBooking = ` ${tableRHB} fixed top-0 left-0 right-0 bottom-0 bg-[#0000004d] p-[50px] z-[15]`;

  useEffect(() => {
    getDataBooking();
  }, []);

  return (
    <div>
      <NavBarAdmin />
      <div className='w-[80%] float-right h-screen'>
        <HeaderAdmin />
        <div className='p-[15px]'>
          <div className='bg-[#fff] border border-[#D8D8D8] p-[15px]'>
            <div className='pb-[5px]'>
              <h1 className='text-[#484B6C] text-[30px] font-semibold'>Manage bookings</h1>
            </div>
            <table>
              <tr className='border-[2px] w-[100%]'>
                <th className='w-[2%] p-[15px] border-r-[2px]'>ID</th>
                <th className='w-[45%] p-[15px] border-r-[2px]'>Info Client</th>
                <th className='w-[10%] p-[15px] border-r-[2px]'>Status</th>
                <th className='w-[10%] p-[15px] border-r-[2px]'>Payment Type</th>
                <th className='w-[5%] p-[15px] border-r-[2px]'>Total</th>
                <th className='w-[10%] p-[15px]'></th>
              </tr>
              {dataBooking?.map((item) => (
                <tr key={item.id} className='border-[2px]'>
                  <td className='border-r-[2px] text-center text-[20px]'>
                      {item?.id}
                  </td>
                  <td className='border-r-[2px]'>
                    <div className='flex'>
                      <div className='border-r-[2px] w-[50%]'>
                        <div className='flex gap-[5px] items-center p-[3px] border-b-[2px]'>
                          <p>First Name:</p>
                          {item?.firstName}
                        </div>
                        <div className='flex gap-[5px] items-center p-[3px] border-b-[2px]'>
                          <p>Last Name:</p>
                          {item?.lastName}
                        </div>
                        <div className='flex gap-[5px] items-center p-[3px] border-b-[2px]'>
                          <TfiEmail />:
                          {item?.email}
                        </div>
                        <div className='flex gap-[5px] items-center p-[3px] border-b-[2px]'>
                          <FcPhoneAndroid />:
                          {item?.phoneNum}
                        </div>
                        <div className='flex gap-[5px] items-center p-[3px]'>
                          <FaMapLocationDot />:
                          {item?.address}
                        </div>
                      </div>

                      <div className='flex flex-col w-[50%]'>
                        <div className='flex flex-col justify-center items-center border-b h-[50%]'>
                          <p className='font-bold bg-[#0F78AB] w-fit text-[#fff] p-[3px] rounded-[4px]'>Check In:</p>
                          {item?.checkin}
                        </div>
                        <div className='flex flex-col justify-center items-center h-[50%]'>
                          <p className='font-bold bg-[#47443F] w-fit text-[#fff] p-[3px] rounded-[4px]'>Check Out:</p>
                          {item?.checkout}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='border-r-[2px] text-center text-green-500 font-semibold'>
                    {item?.status === "pending" ? (
                      <p className='text-[#F1B207]'>{item?.status}</p>
                    ) : (
                      <p>{item?.status}</p>
                    )}
                  </td>
                  <td className='border-r-[2px] text-center'>Direct</td>
                  <td className='border-r-[2px] text-center'>{item?.total} $</td>
                  <td className='flex justify-center mt-[40%] relative see-more'>
                    <button className='flex items-center text-[#6F7172] text-[40px] '>
                      <TbDots />
                    </button>
                    <div className='list-more absolute top-[80%] right-[5%] z-[10]'>
                      <div className='border w-[110px] p-[5px_15px_5px_15px] font-medium'>
                        <button onClick={() => handleDetails(item.id)}
                          className='hover:font-bold'>
                          Details
                        </button>
                        {item?.status === "pending" ? (
                          <button onClick={() => handleCheckInOut(item.id, item.status)}
                            className='hover:text-[#0F78AB] hover:font-bold'>
                            Check In
                          </button>
                        ) : item?.status === "Renting" ?
                          (
                            <button onClick={() => handleCheckInOut(item.id, item.status)}
                              className='hover:text-[#0F78AB] hover:font-bold'>
                              Check Out
                            </button>
                          ) : (
                            <div></div>
                          )}
                        <button
                          onClick={() => handleCancel(item.id)}
                          className='hover:text-red-500 hover:font-bold'>
                          <p>Cancel</p>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className={roomHasBooking}>
          <div className='flex flex-col justify-between bg-[#fff] rounded-[5px] h-full'>
            <div className='bg-[#D1E0E4] p-[25px] rounded-[5px]'>
              <h1 className='text-[30px] text-[#5A6A6E]'>Booking details</h1>
            </div>
            <div className='p-[25px] h-full'>
              <div className='border'>
                <div className='flex items-center'>
                  <div className='w-[5%] border p-[5px] text-center'>
                    <p>ID</p>
                  </div>
                  <div className='w-[25%] border p-[5px_0px_5px_15px]'>
                    <p>Room Type</p>
                  </div>
                  <div className='w-[10%] border p-[5px] text-center'>
                    <p>Capacity</p>
                  </div>
                  <div className='w-[10%] border p-[5px] text-center'>
                    <p>Price</p>
                  </div>
                  <div className='w-[10%] border p-[5px] text-center'>
                    <p>Quantity</p>
                  </div>
                  <div className='w-[40%] border p-[5px_0px_5px_15px]'>
                    <p>Services</p>
                  </div>
                </div>
                <div>
                  {infoRHB?.map((item) => (
                    <div key={item.id} className='flex'>
                      <div className='w-[5%] border p-[5px] text-center'>
                        <p>{item?.id}</p>
                      </div>
                      <div className='w-[25%] border p-[5px_0px_5px_15px]'>
                        <p>{item.roomTypes?.room_type}</p>
                      </div>
                      <div className='w-[10%] border p-[5px] text-center'>
                        <p>{item.roomTypes?.capacity}</p>
                      </div>
                      <div className='w-[10%] border p-[5px] text-center'>
                        <p>{item.roomTypes?.price} $</p>
                      </div>
                      <div className='w-[10%] border p-[5px] text-center'>
                        <p>{item?.quantity}</p>
                      </div>
                      <div className='w-[40%] border p-[5px_0px_5px_15px]'>
                        <p>Not</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='bg-[#F8FAF9] border-t-[3px] p-[25px]'>
              <button onClick={offViewRHB}
                className='flex items-center gap-[5px] border p-[3px_15px_3px_15px] shadow text-[#B9C1BF]'>
                <MdOutlineArrowBackIosNew className='text-[#C8E4DD]'/>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListBooking