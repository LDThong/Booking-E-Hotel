import React, { useState } from 'react';
import {IoPeopleSharp} from 'react-icons/io5';
import {FaChildren} from 'react-icons/fa6';

function Main() {

  return (
    <div className='lg:mt-[120px] 
        max-sm:mt-[62px]
        sm:max-lg:mt-[80px]'>
        <div className='imgTop lg:mx-[12px] lg:rounded-[10px]
            max-sm:bg-none max-sm:bg-[#999999] max-sm:p-[15px]
            sm:max-lg:bg-block sm:max-lg:p-[60px_50px_80px_50px]'>
            <p className='lg:hidden text-[#fff]
                max-sm:block max-sm:text-center max-sm:font-semibold max-sm:text-[30px] max-sm:pb-[10px] 
                sm:max-lg:text-center sm:max-lg:font-semibold sm:max-lg:text-[40px] sm:max-lg:pb-[20px]'>
                The Best Hotel</p>
            <div className='lg:p-[250px_250px_250px_250px]
                max-sm:p-[15px] max-sm:bg-[#c03fca66]
                sm:max-lg:p-[15px] sm:max-lg:bg-[#00000066]'>
                <div className='lg:flex lg:w-full bg-[#fff] lg:p-[20px_15px_25px_15px] lg:gap-[10px]
                    max-sm:p-[15px] 
                    sm:max-lg:p-[15px]'>
                    <div className='lg:flex lg:gap-[10px] lg:w-[60%]
                        sm:max-lg:flex sm:max-lg:justify-between sm:max-lg:mb-[10px]'>
                        <div className='flex flex-col lg:gap-[15px] lg:w-[50%]
                            sm:max-lg:w-[47%] '>
                            <input type='date' className='border-b-[2px] border-gray-300 pb-[5px] outline-none
                                max-sm:mb-[15px]
                                sm:max-lg:mb-[15px]'></input>
                            <input type='number' className='border-b-[2px] pb-[5px] border-gray-300 outline-none
                                max-sm:mb-[15px]
                                sm:max-lg:mb-[15px]' placeholder='Adult'></input>
                        </div>
                        <div className='flex flex-col lg:gap-[15px] lg:w-[50%]
                            sm:max-lg:w-[47%]'>
                            <input type='date' className='border-b-[2px] border-gray-300 pb-[5px] outline-none
                                max-sm:mb-[15px]
                                sm:max-lg:mb-[15px]'></input>
                            <input type='number' className='border-b-[2px] border-gray-300 pb-[5px] outline-none
                                max-sm:mb-[15px]
                                sm:max-lg:mb-[15px]' placeholder='Children'></input>
                        </div>
                    </div>
                    <div className='flex flex-col justify-end lg:w-[40%]'>
                        <button
                            type='butotn'
                            className='py-[10px] w-full bg-[#A3258E] text-[#fff] font-semibol'>Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:w-[1300px] lg:mx-auto lg:pb-[100px] 
            max-sm:px-[15px]
            sm:max-lg:px-[25px]'>
            <div className='flex lg:items-cneter lg:mt-[40px] lg:pb-[100px]
                max-sm:flex-col-reverse max-sm:pt-[40px] max-sm:mb-[20px] relative max-sm:after:absolute max-sm:after:content-[""] max-sm:after:translate-x-[-50%] max-sm:after:z-[-100]
                max-sm:after:h-[1px] max-sm:after:border-b-[1px] max-sm:after:border-dotted max-sm:after:border-[#a3258e99] max-sm:after:left-[50%] max-sm:after:w-[60%]
                sm:max-lg:mt-[40px] sm:max-lg:pb-[30px] sm:max-lg:items-center'>
                <div className='lg:w-[55%] sm:max-lg:w-[50%] max-sm:pb-[25px] z-[-100]'>
                    <img className='lg:w-[100%] rounded-[50%] ' src='/images/banner2.png'></img>
                </div>
                <div className='lg:w-[45%] lg:pl-[70px] lg:flex lg:flex-col lg:justify-center lg:items-center
                    max-sm:pb-[30px] z-[-100]
                    sm:max-lg:w-[50%] sm:max-lg:px-[20px]'>
                    <h1 className='text-[#A3258E] lg:text-[45px] font-serif font-bold pb-[10px]
                        max-sm:text-[24px] max-sm:text-center
                        sm:max-lg:text-[29px] sm:max-lg:font-semibold'>
                    EXPERIENCE WITH NOVOTEL HOTEL</h1>
                    <p className='text-[#6C6C69] lg:text-[19px] font-medium lg:leading-8
                        max-sm:text-[14px] '>
                    Novotel Hotel with fully equipped rooms, the interior space is decorated in a luxurious style that blends the traditional features of Vietnam and the modernity of the West. We have a staff of well-trained, professional and professional, dedicated service</p>
                </div>
            </div>

            <div className='lg:flex lg:pb-[100px] '>
                <div className='lg:w-[100%] lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-[45px]
                    relative max-sm:after:absolute max-sm:after:content-[""] max-sm:after:translate-x-[-50%] max-sm:after:z-[-100]
                    max-sm:after:h-[1px] max-sm:after:border-b-[1px] max-sm:after:border-dotted max-sm:after:border-[#a3258e99] max-sm:after:left-[50%] max-sm:after:w-[60%]'>
                    <div className='lg:p-[10px_0_10px_0]'>
                        <h1 className='text-[#A3258E] lg:text-[45px] font-serif font-bold lg:pb-[10px]
                            max-sm:text-[20px] max-sm:text-center max-sm:p-[10px_0_20px_0] '>
                        OUR ROOMS</h1>
                    </div>
                    <div className='lg:gird lg:grid-cols-4 lg:flex gap-[15px]
                        max-sm:grid max-sm:grid-cols-1 max-sm:mb-[40px] 
                        sm:max-lg:grid sm:max-lg:grid-cols-2'>
                        <div className='border bg-[#fff] '>
                            <img src='/images/Deluxe-Sea-View_Marcom-1.png'></img>
                            <div className='lg:p-[15px] border-b
                                max-sm:p-[10px_20px_10px_20px]
                                sm:max-lg:p-[10px_15px_10px_15px]'>
                                <p className='font-semibold text-[20px]'>Deluxe City View</p>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-[10px]'>
                                            <IoPeopleSharp className='text-[#A3258E]'/>
                                            <p className='font-bold'>2</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='font-bold '>ADULT</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-[10px]'>
                                            <FaChildren className='text-[#A3258E]'/>
                                            <p className='font-bold'>1</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='font-bold'>CHILDREN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:p-[10px] flex justify-between items-center
                                max-sm:p-[10px_20px_10px_20px]
                                sm:max-lg:p-[10px_15px_10px_15px]'>
                                <div>
                                    <p className='text-[#A3258E] font-bold text-[25px]'>$ 250</p>
                                    <p>PER NIGHT</p>
                                </div>
                                <button
                                    className='p-[10px_25px_10px_25px]  text-[#A3258E] border-solid border border-[#A3258E] hover:text-[#fff] hover:bg-[#A3258E]'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                        <div className='border bg-[#fff] '>
                            <img src='/images/Deluxe-Sea-View_Marcom-1.png'></img>
                            <div className='lg:p-[15px] border-b
                                max-sm:p-[10px_20px_10px_20px]
                                sm:max-lg:p-[10px_15px_10px_15px]'>
                                <p className='font-semibold text-[20px]'>Deluxe City View</p>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-[10px]'>
                                            <IoPeopleSharp className='text-[#A3258E]'/>
                                            <p className='font-bold'>2</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='font-bold '>ADULT</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-[10px]'>
                                            <FaChildren className='text-[#A3258E]'/>
                                            <p className='font-bold'>1</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='font-bold'>CHILDREN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:p-[10px] flex justify-between items-center
                                max-sm:p-[10px_20px_10px_20px]
                                sm:max-lg:p-[10px_15px_10px_15px]'>
                                <div>
                                    <p className='text-[#A3258E] font-bold text-[25px]'>$ 250</p>
                                    <p>PER NIGHT</p>
                                </div>
                                <button
                                    className='p-[10px_25px_10px_25px]  text-[#A3258E] border-solid border border-[#A3258E] hover:text-[#fff] hover:bg-[#A3258E]'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                        <div className='border bg-[#fff] '>
                            <img src='/images/Deluxe-Sea-View_Marcom-1.png'></img>
                            <div className='lg:p-[15px] border-b
                                max-sm:p-[10px_20px_10px_20px]
                                sm:max-lg:p-[10px_15px_10px_15px]'>
                                <p className='font-semibold text-[20px]'>Deluxe City View</p>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-[10px]'>
                                            <IoPeopleSharp className='text-[#A3258E]'/>
                                            <p className='font-bold'>2</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='font-bold '>ADULT</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-[10px]'>
                                            <FaChildren className='text-[#A3258E]'/>
                                            <p className='font-bold'>1</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='font-bold'>CHILDREN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:p-[10px] flex justify-between items-center
                                max-sm:p-[10px_20px_10px_20px]
                                sm:max-lg:p-[10px_15px_10px_15px]'>
                                <div>
                                    <p className='text-[#A3258E] font-bold text-[25px]'>$ 250</p>
                                    <p>PER NIGHT</p>
                                </div>
                                <button
                                    className='p-[10px_25px_10px_25px]  text-[#A3258E] border-solid border border-[#A3258E] hover:text-[#fff] hover:bg-[#A3258E]'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                        <div className='border bg-[#fff] '>
                            <img src='/images/Deluxe-Sea-View_Marcom-1.png'></img>
                            <div className='lg:p-[15px] border-b
                                max-sm:p-[10px_20px_10px_20px]
                                sm:max-lg:p-[10px_15px_10px_15px]'>
                                <p className='font-semibold text-[20px]'>Deluxe City View</p>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-[10px]'>
                                            <IoPeopleSharp className='text-[#A3258E]'/>
                                            <p className='font-bold'>2</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='font-bold '>ADULT</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-[10px]'>
                                            <FaChildren className='text-[#A3258E]'/>
                                            <p className='font-bold'>1</p>
                                        </div>
                                        <div className='flex'>
                                            <p className='font-bold'>CHILDREN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:p-[10px] flex justify-between items-center
                                max-sm:p-[10px_20px_10px_20px]
                                sm:max-lg:p-[10px_15px_10px_15px]'>
                                <div>
                                    <p className='text-[#A3258E] font-bold text-[25px]'>$ 250</p>
                                    <p>PER NIGHT</p>
                                </div>
                                <button
                                    className='p-[10px_25px_10px_25px]  text-[#A3258E] border-solid border border-[#A3258E] hover:text-[#fff] hover:bg-[#A3258E]'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='lg:flex max-sm:pt-[40px]
                relative max-sm:after:absolute max-sm:after:content-[""] max-sm:after:translate-x-[-50%] max-sm:after:z-[-100]
                max-sm:after:h-[1px] max-sm:after:border-b-[1px] max-sm:after:border-dotted max-sm:after:border-[#a3258e99] max-sm:after:left-[50%] max-sm:after:w-[60%]
                sm:max-lg:flex sm:max-lg:pt-[60px] sm:max-lg:gap-[30px]'>
                <div className='lg:w-[50%] sm:max-lg:w-[50%]'>
                    <h1 className='text-[#A3258E] lg:text-[45px] font-serif font-bold lg:pb-[10px]
                        max-sm:text-center max-sm:text-[25px]
                        sm:max-lg:text-[30px]'>
                        THE ART <br /> OF CUISINE</h1>
                    <div className='mt-[40px] lg:p-[15px] max-sm:mb-[40px]'>
                        <img src='/images/shape5.png'></img>
                    </div>
                    <div className='lg:pr-[107px] sm:max-lg:py-[30px]'>
                        <h2 className='text-[#A3258E] lg:text-[30px] font-serif font-bold max-sm:text-[20px]
                            sm:max-lg:text-[25px]'>
                            FREE BREAKFAST</h2>
                        <p className='text-[#6C6C69] lg:text-[19px] lg:leading-8 pt-[20px] font-medium
                            max-sm:text-[13.5px] sm:max-lg:text-[14px]'>
                            The hotel's breakfast buffet menu is very diverse and rich, including European and Asian dishes to pure Vietnamese dishes. Guests can easily choose a menu that suits their own needs, tastes and preferences.
                        </p>
                    </div>
                    <div className='lg:mt-[80px] lg:p-[15px] max-sm:my-[40px]'>
                        <img src='/images/shape7.png'></img>
                    </div>
                    <div className='lg:pr-[107px] sm:max-lg:py-[30px]'>
                        <h2 className='text-[#A3258E] lg:text-[30px] font-serif font-bold max-sm:text-[20px]
                            sm:max-lg:text-[25px]'>
                            VIETNAMESE FOOD</h2>
                        <p className='text-[#6C6C69] lg:text-[19px] lg:leading-8 pt-[20px] font-medium 
                            max-sm:text-[13.5px] sm:max-lg:text-[14px]'>
                            Vietnamese dishes are not too picky but still have a typical delicious taste. Unmistakable with any other cuisine in the world.
                        </p>
                    </div>
                </div>
                <div className='lg:w-[50%] max-sm:pb-[40px] sm:max-lg:pt-[20px] sm:max-lg:w-[50%]'>
                    <div className='lg:mt-[40px] lg:p-[15px] max-sm:my-[40px]'>
                        <img src='/images/shape6.png'></img>
                    </div>
                    <div className='lg:pr-[107px] sm:max-lg:py-[30px]'>
                        <h2 className='text-[#A3258E] lg:text-[30px] font-serif font-bold max-sm:text-[20px]
                            sm:max-lg:text-[25px]'>
                            EUROPEAN CUISINE</h2>
                        <p className='text-[#6C6C69] lg:text-[19px] lg:leading-8 pt-[20px] font-medium
                            max-sm:text-[13.5px] sm:max-lg:text-[14px]'>
                            Inspired by European architecture, diners can immerse themselves in melodious music with a romantic and sophisticated space and enjoy, the culinary experience will surely satisfy diners.
                        </p>
                    </div>
                    <div className='lg:mt-[80px] lg:p-[15px] max-sm:my-[40px]'>
                        <img src='/images/shape8.png'></img>
                    </div>
                    <div className='lg:pr-[160px] sm:max-lg:py-[30px]'>
                        <h2 className='text-[#A3258E] lg:text-[30px] font-serif font-bold max-sm:text-[20px]
                            sm:max-lg:text-[25px]'>
                            DRINKS</h2>
                        <p className='text-[#6C6C69] lg:text-[19px] lg:leading-8 pt-[20px] font-medium
                            max-sm:text-[13.5px] sm:max-lg:text-[14px]'>
                            Here with a variety of drinks: smoothies, teas, coffees, cocktails, mocktails or charming afternoon tea sets…. It is also an irresistible attraction for those who have once set foot here.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full lg:px-[12px] text-center max-sm:mt-[40px] max-sm:px-[15px] sm:max-lg:px-[25px] sm:max-lg:py-[40px]'>
            <h1 className='text-[#A3258E] lg:text-[50px] font-serif font-bold max-sm:pb-[10px]
                sm:max-lg:text-[30px]'>
                ARE YOU READY?</h1>
            <p className='text-[#6C6C69] lg:text-[19px] font-medium max-sm:text-[15px] sm:max-lg:text-[16px]'>
                Contact us immediately for the best service support.</p>
        </div>

        <div className='lg:grid lg:grid-cols-5 lg:flex lg:items-baseline lg:w-[1300px] lg:mx-auto lg:mt-[60px]
            sm:max-lg:grid sm:max-lg:grid-cols-5 sm:max-lg:items-baseline'>
            <div className='p-[25px] text-center max-sm:flex max-sm:flex-col max-sm:items-center '>
                <img className='max-sm:w-[50%]' src='/images/iconShape1.png'></img>
                <p className='text-[#646461] font-medium lg:p-[15px] max-sm:p-[15px] sm:max-lg:py-[15px]'>Southeast Asia’s Best Relaxation Retreat 2018</p>
            </div>
            <div className='p-[25px] text-center max-sm:flex max-sm:flex-col max-sm:items-center'>
                <img className='max-sm:w-[50%]' src='/images/iconShape2.png'></img>
                <p className='text-[#646461] font-medium lg:p-[15px] max-sm:p-[15px] sm:max-lg:py-[15px]'>World Travel Award 2019</p>
            </div>
            <div className='p-[25px] text-center max-sm:flex max-sm:flex-col max-sm:items-center'>
                <img className='max-sm:w-[50%]' src='/images/iconShape3.png'></img>
                <p className='text-[#646461] font-medium lg:p-[15px] max-sm:p-[15px] sm:max-lg:py-[15px]'>Asia's Best Boutique Honeymoon Hotel 2020</p>
            </div>
            <div className='p-[25px] text-center max-sm:flex max-sm:flex-col max-sm:items-center'>
                <img className='max-sm:w-[50%]' src='/images/iconShape4.png'></img>
                <p className='text-[#646461] font-medium lg:p-[15px] max-sm:p-[15px] sm:max-lg:py-[15px]'>Luxury Beachfront Hotel of the Year 2018</p>
            </div>
            <div className='p-[25px] text-center max-sm:flex max-sm:flex-col max-sm:items-center'>
                <img className='max-sm:w-[50%]' src='/images/iconShape5.png'></img>
                <p className='text-[#646461] font-medium lg:p-[15px] max-sm:p-[15px] sm:max-lg:py-[15px]'>Global Best Luxury Boutique Resort 2018</p>
            </div>
        </div>
        
    </div>
  )
}

export default Main