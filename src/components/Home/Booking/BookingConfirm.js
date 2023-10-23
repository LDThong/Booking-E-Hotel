import React, { useState } from 'react';
import HeaderBooking from './HeaderBooking';
import FooterBooking from './FooterBooking';

function BookingConfirm() {
    const currentYear = new Date().getFullYear();
    const onYer = currentYear+1;
    const nextYer = onYer+1;
    const nextTwoYer = nextYer+1;
    const nextThreeYer = nextTwoYer+1;
    const nextFourYer = nextThreeYer+1;
    const nextFiveYer = nextFourYer+1;
    const nextSixYer = nextFiveYer+1;
    const [year, setYear] = useState(currentYear);
    const [month, setMonth] = useState(null);

    return (
    <div>
        <HeaderBooking />
        <div className='lg:w-[1240px] lg:mx-auto lg:flex lg:gap-[25px] mb-[80px]'>
            <div className='lg:w-[25%] lg:border lg:border-[#D8D8D8] h-fit'>
                <div className='lg:bg-[#F6F6F6] lg:border-b lg:border-[#D8D8D8] lg:p-[10px]'>
                    <h3 className='lg:text-[20px] text-[#333] leading-[22px] font-bold'>Your Booking Details</h3>
                </div>
                <div className='lg:p-[10px] lg:bg-[#fff] lg:leading-[26px]'>
                    <div className='lg:flex lg:justify-between lg:mb-[5px]'>
                        <p className='font-semibold'>Check in:</p>
                        <p>22/10/2023</p>
                    </div>
                    <div className='lg:flex lg:justify-between lg:mb-[5px]'>
                        <p className='font-semibold'>Check out:</p>
                        <p>23/10/2023</p>
                    </div>
                    <div className='lg:flex lg:justify-between lg:mb-[5px]'>
                        <p className='font-semibold'>Adult:</p>
                        <p>2</p>
                    </div>
                    <div className='lg:flex lg:justify-between lg:mb-[5px]'>
                        <p className='font-semibold'>Children:</p>
                        <p>0</p>
                    </div>
                    <div className='lg:mb-[5px] lg:border-b lg:border-dotted lg:border-[#000]'>
                        <p className='font-semibold'>Room type:</p>
                        <p className='lg:text-right lg:mb-[5px]'>1 x DELUXE BALCONY</p>
                    </div>
                    <div className='lg:flex lg:justify-between lg:mb-[5px]'>
                        <p className='font-semibold'>Room charges:</p>
                        <div className='flex gap-[5px]'>
                            <p>250</p>
                            <span className='text-[13px]'>USD</span>
                        </div>
                    </div>
                    <div className='lg:flex lg:justify-between lg:mb-[5px]'>
                        <p className='font-semibold'>Added services:</p>
                        <div className='flex gap-[5px]'>
                            <p>0</p>
                            <span className='text-[13px]'>USD</span>
                        </div>
                    </div>
                    <div className='lg:flex lg:justify-between lg:mb-[10px]'>
                        <p className='font-semibold'>Voucher:</p>
                        <div className='flex gap-[5px]'>
                            <p>- 0</p>
                            <span className='text-[13px]'>USD</span>
                        </div>
                    </div>
                    <div className='lg:flex lg:justify-between lg:pb-[15px] lg:mb-[5px] lg:border-b lg:border-dotted lg:border-[#000]'>
                        <input type='text' className='border border-[#000] px-[5px] lg:w-[55%]' placeholder='Enter Voucher Code'></input>
                        <button className='border border-[#000] lg:p-[0px_20px_0px_20px] bg-[#EFEFEF]'>
                            Apply
                        </button>
                    </div>
                    <div className='lg:flex lg:justify-between lg:mb-[5px]'>
                        <p className='font-semibold'>Subtotal:</p>
                        <div className='flex gap-[5px]'>
                            <p>250</p>  
                            <span className='text-[13px]'>USD</span>
                        </div>
                    </div>
                    <div className='lg:flex lg:justify-between lg:mb-[5px]'>
                        <div className='lg:flex lg:gap-[5px]'>
                            <p className='font-semibold'>Service charge:</p>
                            <p>(0%)</p>
                        </div>
                        <div className='flex gap-[5px]'>
                            <p>0</p>  
                            <span className='text-[13px]'>USD</span>
                        </div>
                    </div>
                    <div className='lg:flex lg:justify-between lg:mb-[5px]'>
                        <div className='lg:flex lg:gap-[5px]'>
                            <p className='font-semibold'>VAT:</p>
                            <p>(0%)</p>
                        </div>
                        <div className='flex gap-[5px]'>
                            <p>0</p>  
                            <span className='text-[13px]'>USD</span>
                        </div>
                    </div>
                    <div className='lg:flex lg:justify-between lg:mb-[5px]'>
                        <p className='font-semibold'>Total amount:</p>
                        <div className='flex gap-[5px]'>
                            <p>250</p>  
                            <span className='text-[13px]'>USD</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-[75%] bg-[#F6F6F6] lg:p-[35px_20px_50px_20px]'>
                <h3 className='font-semibold'>Guest Information</h3>
                <p className='text-[#BF0000]'>*Indicates Required field.</p>
                <div className='flex gap-[20px] w-full pb-[10px] lg:border-b lg:border-dotted lg:border-[#000]'>
                    <div className='w-[50%]'>
                        <div>
                            <p className='mb-[10px]'>First Name<span className='text-[#BF0000]'>*</span></p>
                            <input type='text' className='border border-[#D8D8D8] w-[90%] text-[13px] p-[5px] mb-[5px]'></input>
                            <p className='mb-[10px]'>Last Name<span className='text-[#BF0000]'>*</span></p>
                            <input type='text' className='border border-[#D8D8D8] w-[90%] text-[13px] p-[5px] mb-[5px]'></input>
                            <p className='mb-[10px]'>Email<span className='text-[#BF0000]'>*</span></p>
                            <input type='email' className='border border-[#D8D8D8] w-[90%] text-[13px] p-[5px] mb-[5px]'></input>
                            <p className='mb-[10px]'>Phone Number<span className='text-[#BF0000]'>*</span></p>
                            <input type='number' className='border border-[#D8D8D8] w-[90%] text-[13px] p-[5px] mb-[5px]'></input>
                            <p className='mb-[10px]'>Address</p>
                            <input type='text' className='border border-[#D8D8D8] w-[90%] text-[13px] p-[5px] mb-[5px]'></input>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <div>
                            <p className='mb-[10px]'>Country</p>
                            <select className='border border-[#D8D8D8] w-[90%] text-[13px] font-medium p-[5px] mb-[5px]'>
                                <option value='N/A' className='font-medium'>N/A</option>
                                <option value='USA' className='font-medium'>USA</option>
                                <option value='Armenia' className='font-medium'>Armenia</option>
                                <option value='Australia' className='font-medium'>Australia</option>
                                <option value='Brazil' className='font-medium'>Brazil</option>
                                <option value='Canada' className='font-medium'>Canada</option>
                                <option value='China' className='font-medium'>China</option>
                                <option value='Cuba' className='font-medium'>Cuba</option>
                                <option value='Italy' className='font-medium'>Italy</option>
                                <option value='Hong Kong' className='font-medium'>Hong Kong</option>
                                <option value='Indonesia' className='font-medium'>Indonesia</option>
                                <option value='Mexico' className='font-medium'>Mexico</option>
                                <option value='VietNam' className='font-medium'>VietNam</option>
                                <option value='Other' className='font-medium'>Other</option>
                            </select>
                            <p className='mb-[10px]'>Arrival with flight</p>
                            <input type='text' className='border border-[#D8D8D8] w-[90%] text-[13px] p-[5px] mb-[5px]'></input>
                            <p className='mb-[10px]'>Arrival Time</p>
                            <input type='text' className='border border-[#D8D8D8] w-[90%] text-[13px] p-[5px] mb-[5px]'></input>
                            <p className='mb-[10px]'>Additional request</p>
                            <textarea type='text' className='border border-[#D8D8D8] w-[90%] text-[13px] p-[5px] mb-[5px] min-h-[200px]'></textarea>
                        </div>
                    </div>
                </div>
                <h3>Payment Details</h3>
                <div className='flex gap-[20px] w-full pb-[10px]'>
                    <div className='w-[50%]'>
                        <p className='mb-[10px]'>Name on card<span className='text-[#BF0000]'>*</span></p>
                        <input type='text' className='border border-[#D8D8D8] w-[90%] text-[13px] p-[5px] mb-[5px]'></input>
                        <p className='mb-[10px]'>Card Number<span className='text-[#BF0000]'>*</span></p>
                        <input type='text' className='border border-[#D8D8D8] w-[90%] text-[13px] p-[5px] mb-[5px]'></input>
                        <p className='mb-[10px]'>Expiry Date</p>
                        <div className='flex gap-[5px] mb-[10px]'>
                            <select onChange={(e) => setMonth(e.target.value)}
                                className='border border-[#000] w-[80px] text-[14px]'>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                            </select>
                            /
                            <select onChange={(e) => setYear(e.target.value)}
                                className='border border-[#000] w-[80px] text-[14px]'>
                                <option value={currentYear}>{currentYear}</option>
                                <option value={onYer}>{onYer}</option>
                                <option value={nextYer}>{nextYer}</option>
                                <option value={nextTwoYer}>{nextTwoYer}</option>
                                <option value={nextThreeYer}>{nextThreeYer}</option>
                                <option value={nextFourYer}>{nextFourYer}</option>
                                <option value={nextFiveYer}>{nextFiveYer}</option>
                                <option value={nextSixYer}>{nextSixYer}</option>
                            </select>
                        </div>
                        <p className='mb-[10px]'>Security Code<span className='text-[#BF0000]'>*</span></p>
                        <input type='text' className='border border-[#D8D8D8] w-[90%] text-[13px] p-[5px] mb-[5px]'></input>
                    </div>
                    <div className='lg:w-[50%]'>
                        <img className='lg:mt-[30px] lg:mb-[12px]' src='/images/icon-card.png'></img>
                        <img className='w-[25%]' src='/images/RapidSSL_SEAL.png'></img>
                    </div>
                </div>
                <div className='flex gap-[5px] items-center lg:border lg:border-[#D8D8d8] bg-[#fff] lg:p-[50px_10px_10px_10px]'>
                    <input type='checkbox' checked='1' className='w-[15px]'></input>
                    <p>I have read and agree to the above</p>
                </div>
                <div className='w-full text-center mt-[10px]'>
                    <button className='lg:p-[3px_20px_3px_20px] bg-gradient-to-b from-[#ad9d83] to-[#7F7159] rounded-[2px] text-[#fff]'>
                        BOOK NOW
                    </button>
                </div>
            </div>
        </div>
        <FooterBooking />
    </div>
  )
}

export default BookingConfirm