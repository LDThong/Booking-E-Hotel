import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../HeaderAdmin';
import NavBarAdmin from '../NavBarAdmin';
import axios from 'axios';
import {TbDots} from 'react-icons/tb';
import {GoTriangleDown} from 'react-icons/go';
import {FiLogOut} from 'react-icons/fi';
import {IoAddCircle} from 'react-icons/io5';
import {FaRegCircleXmark} from 'react-icons/fa6';
import { GiSave } from 'react-icons/gi';
import { AiOutlineRollback } from 'react-icons/ai';
import { SiAdobephotoshop } from "react-icons/si";
import { storage } from '../../../firebase/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function ManagementRoom() {
    const [dataRoom, setDataRoom] = useState(null);
    const [image, setImage] = useState(null);
    const [roomType, setRoomType] = useState(null);
    const [capacity, setCapacity] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [bedType, setBedType] = useState(null);
    const [statusR, setStatusR] = useState(false);
    const [description, setDecription] = useState(null);
    const [hidden, setHidden] = useState("hidden");
    const [error, setError] = useState("hidden");
    const [content, setContent] = useState('');
    const [notification, setNotification] = useState("hidden");
    const [textNotification, setTextNotification] = useState('');
    const date = new Date().toLocaleString();
    const [progress, setProgress] = useState(0);
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")));
    const [infoRoom, setInfoRoom] = useState(null);
    const [tableRoom, setTableRoom] = useState("hidden");
    const [roomTypeDetail, setRoomTypeDetail] = useState('');
    const [capacityDetail, setCapacityDetail] = useState('');
    const [priceDetail, setPriceDetail] = useState('');
    const [quantityDetail, setQuantityDetail] = useState('');
    const [bedTypeDetail, setBedTypeDetail] = useState('');
    const [descriptionDetail, setDescriptionDetail] = useState('');

    const getDataRooms = async () => {
        const res = await axios.get(
            "https://h8jv55-3004.csb.app/roomTypes/"
        );

        if (res.status === 200) {
            setDataRoom(res.data)
        };
    };
    
    const handleStatus = async (value, id) => {
        if (value === "false") {
            await axios.patch(
                "https://h8jv55-3004.csb.app/roomTypes/" + id,{
                    status: true,
                }
            );
            getDataRooms();
        } else {
            await axios.patch(
                "https://h8jv55-3004.csb.app/roomTypes/" + id,{
                    status: false,
                }
            );
            getDataRooms();
        } 
    };

    const metadata = {
        contentType: 'image/jpeg',
      };

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image, metadata);
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
    
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                handleAddNew(downloadURL);
                alert(
                    'Upload Product successfully'
                );
                setImage(null);
                setProgress(0);
                console.log('File available at', downloadURL);
                setHidden("hidden");
                setImage(null);
                setRoomType('');
                setCapacity('');
                setPrice('');
                setQuantity('');
                setBedType('');
                setDecription('');
                setError("hidden");
                setContent("");
                getDataRooms();
            });
          }
        );
      };

    const handleAddNew = async (UrlImage) => {
        if (image === null || roomType === null || capacity === '' || price === '' || quantity === '' || bedType === null || description === null) {
            setError("block");
            setContent("Fields cannot be left blank!!");
        } else {
            try {
                const res = await axios.post(
                    "https://h8jv55-3004.csb.app/roomTypes/",
                    {
                        images: UrlImage,
                        room_type: roomType,
                        capacity: capacity,
                        price: price,
                        quantity: quantity,
                        bed_type: bedType,
                        description: description,
                        status: statusR,
                        createAt: date,
                    }
                );

                if (res.status === 200) {
                    setHidden("hidden");
                    setImage(null);
                    setRoomType('');
                    setCapacity('');
                    setPrice('');
                    setQuantity('');
                    setBedType('');
                    setDecription('');
                    setError("hidden");
                    setContent("");
                    getDataRooms();
                }
            } catch (error) {
                console.log(error);
            }
            
        }
    };

    const handleDetails = (id) => {
        const filterRoom = dataRoom.find((item) => item.id === id);
        setInfoRoom(filterRoom);
        setTableRoom("block");
        setRoomTypeDetail(filterRoom.room_type);
        setCapacityDetail(filterRoom.capacity);
        setPriceDetail(filterRoom.price);
        setQuantityDetail(filterRoom.quantity);
        setBedTypeDetail(filterRoom.bed_type);
        setDescriptionDetail(filterRoom.description);
    };

    const saveDataRoom = async (id) => {
        await axios.patch(
            "https://h8jv55-3004.csb.app/roomTypes/" + id, {
                room_type: roomTypeDetail,
                capacity: capacityDetail,
                price: priceDetail,
                quantity: quantityDetail,
                bed_type: bedTypeDetail,
                description: descriptionDetail
            }
        );
        setTableRoom("hidden");
        getDataRooms();
    }

    const onViewAddRoom = () => {
        if (user.role === "admin") {
            setHidden("block");
        } else {
            setNotification("block");
            setTextNotification("You do not have permission to add new room types!");
        }
    };

    const offViewAddRoom = () => {
        setHidden("hidden");
        setImage(null);
        setRoomType('');
        setCapacity('');
        setPrice('');
        setQuantity('');
        setBedType('');
        setDecription('');
        setError("hidden");
        setContent("");
    };

    const offNotification = () => {
        setNotification("hidden");
        setTextNotification("");
    };

    const offViewRoomDetail = () => {
        setTableRoom("hidden");
    }

    const viewAddRoom = ` ${hidden} delay-[600ms] fixed flex justify-center items-center z-[1000] bg-[#0000004d] top-0 left-0 bottom-0 right-0`;
    const Notification = ` ${notification} fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-[#0000004d] z-[15]`;
    const roomDetail = ` ${tableRoom} fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-[#0000004d] p-[50px] z-[15]`;

    useEffect(() => {
        getDataRooms();
    }, []);

    return (
        <div>
            <NavBarAdmin />
            <div className='w-[80%] float-right h-screen'>
                <HeaderAdmin />
                <div className='p-[15px]'>
                    <div className='bg-[#F5F6F9] border border-[#D8D8D8] p-[15px]'>
                        <div className='flex itemscenter justify-between p-[10px] border-b relative'>
                            <div className='flex items-center gap-[50px]'>
                                <div>
                                    <h3 className='text-[18px] font-semibold text-[#5F6E8A]'>Room Types</h3>
                                    <div className='absolute bottom-0 left-0 w-[120px] content-[""] h-[3px] bg-[#5F6E8A]'></div>
                                </div>
                                {/* <div className=''>
                                    <h3 className='text-[18px] font-semibold text-[#BEC9D8]'>Rooms</h3>
                                    <div className={hoverRooms}></div>
                                </div> */}
                            </div>
                            <button 
                                onClick={onViewAddRoom}
                                className='rounded-[2px] bg-[#25AEE4] p-[5px_15px_5px_15px] font-medium text-[#fff]'>
                                Add Room Type
                            </button>
                        </div>
                        <div className='mt-[30px]'>
                            <div className='flex items-center text-[#BEC9D8] font-semibold w-[85%] p-[15px]'>
                                <div className='flex items-end w-[10%]'>
                                    ID
                                    <GoTriangleDown className='text-[19px]'/>
                                </div>
                                <div className='w-[20%]'>
                                    Image
                                </div>
                                <div className='w-[20%] pl-[15px]'>
                                    Type
                                </div>
                                <div className='w-[15%]'>
                                    Capacity
                                </div>
                                <div className='flex items-end w-[15%]'>
                                    Price
                                    <GoTriangleDown className='text-[19px]'/>
                                </div>
                                <div className='w-[15%]'>
                                    Quantity
                                </div>
                                <div className='flex items-end w-[10%]'>
                                    Status
                                    <GoTriangleDown className='text-[19px]'/>
                                </div>
                            </div>
                            <div>
                                {dataRoom?.map((item) => (
                                    <div key={item.id} className='flex items-center border bg-[#fff] p-[15px_10px_15px_10px] mb-[10px]'>
                                        <div className='flex items-center w-[85%] font-semibold'>
                                            <div className='w-[10%] pl-[15px]'>
                                                {item.id}
                                            </div>
                                            <div className='w-[20%]'>
                                                <img className='w-[90%] rounded-[3%]' src={item.images}></img>
                                            </div>
                                            <div className='w-[20%] pl-[15px]'>
                                                {item.room_type}
                                            </div>
                                            <div className='w-[15%] pl-[25px]'>
                                                {item.capacity}
                                            </div>
                                            <div className='w-[15%]'>
                                                {item.price}
                                            </div>
                                            <div className='w-[15%] pl-[25px]'>
                                                {item.quantity}
                                            </div>
                                            <div className='w-[10%]'>
                                                <label className="switch">
                                                    <input type="checkbox" checked={item.status} value={item.status} onClick={(e) => handleStatus(e.target.value, item.id)}></input>
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='w-[15%] text-right pr-[20px] relative see-more'>
                                            <button className='text-[#BCB9C7] text-[30px]'>
                                                <TbDots />
                                            </button>
                                            <div className='list-more absolute top-[80%] left-[45%] z-[10]'>
                                                <div className='text-center border w-[100px] p-[5px_15px_5px_15px] font-medium'>
                                                    <button onClick={() => handleDetails(item.id)}
                                                        className='hover:font-bold'>
                                                        Details
                                                    </button>
                                                    <button
                                                        className='hover:text-red-500 hover:font-bold'>
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* -------------------------------------------------- */}
                <div className={viewAddRoom}>
                    <div className='relative bg-[#fff] p-[15px_25px_15px_25px] rounded-[5px] w-[80%] h-[70%]'>
                        <div className='flex w-full gap-[5%] mt-[20px] mb-[10px]'>
                            <div className='w-[20%]'>
                                <p className='font-bold text-[#737785] mb-[10px]'>Image room</p>
                                <div className='my-[10px] relative'>
                                    <input 
                                        onChange={handleChange}
                                        type='file' 
                                        className='absolute top-[40%] left-[0%] z-[1] font-bold text-[15px] text-[#000]'>
                                    </input>
                                    { image && (
                                        <img src={URL.createObjectURL(image)} className='w-[100%] h-[200px] rounded-[5px] opacity-70'></img>
                                    )}
                                </div>
                            </div>
                            <div className='w-[35%]'>
                                <div className='mb-[10px]'>
                                    <p className='font-bold text-[#737785] mb-[10px]'>Room Type</p>
                                    <input type='text' value={roomType}
                                        onChange={(e) => setRoomType(e.target.value)}
                                        className='w-[100%] p-[5px_10px_5px_10px] border-[2px] border-[#ECEBEC] rounded-[5px] focus:outline-none focus:border-[#9DC9DE]'></input>
                                </div>
                                <div className='mb-[10px]'>
                                    <p className='font-bold text-[#737785] mb-[10px]'>Capacity</p>
                                    <input type='number' value={capacity}
                                        onChange={(e) => setCapacity(e.target.value)}
                                        className='w-[100%] p-[5px_10px_5px_10px] border-[2px] border-[#ECEBEC] rounded-[5px] focus:outline-none focus:border-[#9DC9DE]'></input>
                                </div>
                                <div className='mb-[10px]'>
                                    <p className='font-bold text-[#737785] mb-[10px]'>Price</p>
                                    <input type='number' value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className='w-[100%] p-[5px_10px_5px_10px] border-[2px] border-[#ECEBEC] rounded-[5px] focus:outline-none focus:border-[#9DC9DE]'></input>
                                </div>
                            </div>
                            <div className='w-[35%]'>
                                <div className='mb-[10px]'>
                                    <p className='font-bold text-[#737785] mb-[10px]'>Quantity</p>
                                    <input type='number' value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        className='w-[100%] p-[5px_10px_5px_10px] border-[2px] border-[#ECEBEC] rounded-[5px] focus:outline-none focus:border-[#9DC9DE]'></input>
                                </div>
                                <div className='mb-[10px]'>
                                    <p className='font-bold text-[#737785] mb-[10px]'>Bed Type</p>
                                    <input type='text' value={bedType}
                                        onChange={(e) => setBedType(e.target.value)}
                                        className='w-[100%] p-[5px_10px_5px_10px] border-[2px] border-[#ECEBEC] rounded-[5px] focus:outline-none focus:border-[#9DC9DE]'></input>
                                </div>
                                <div className='mb-[10px]'>
                                    <p className='font-bold text-[#737785] mb-[10px]'>Status</p>
                                    <select value={statusR}
                                        onChange={(e) => setStatusR(e.target.value)}
                                        className='w-[100%] p-[5px_10px_5px_10px] border-[2px] border-[#ECEBEC] rounded-[5px] focus:outline-none focus:border-[#9DC9DE]'>
                                        <option value={true}>On</option>
                                        <option value={false}>Off</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-[#737785] mb-[10px]'>Decription</p>
                            <textarea value={description}
                                onChange={(e) => setDecription(e.target.value)}
                                className='w-[100%] h-[100px] p-[5px_10px_5px_10px] border-[2px] border-[#ECEBEC] rounded-[5px] focus:outline-none focus:border-[#9DC9DE]'></textarea>
                        </div>
                        <div className='flex items-center gap-[20px] mt-[20px] float-right'>
                            <div className={error}>
                                <p className='text-red-500 font-semibold text-center shadow-[#D44040] drop-shadow-[0_0_5px]'>{content}</p>
                            </div>
                            <button 
                                onClick={handleUpload}
                                className='flex items-center gap-[10px] p-[10px_20px_10px_20px] rounded-[5px] bg-[#3DABE1] text-[#fff] font-bold'>
                                Add New
                                <IoAddCircle className='text-[20px]'/>
                            </button>
                            <button 
                                onClick={offViewAddRoom}
                                className='flex items-center gap-[10px] p-[10px_20px_10px_20px] rounded-[5px] bg-[#BF0001] text-[#fff] font-bold'>
                                Close
                                <FiLogOut />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={roomDetail}>
                    <div className='flex flex-col items-center bg-[#fff] rounded-[5px] w-[60%] h-fit'>
                        <div className='text-center mt-[20px]'>
                            <h1 className='text-[40px] font-semibold text-[#5A6A6E]'>Detail</h1>
                        </div>
                        <div className='p-[25px] w-[80%]'>
                            <div className='flex flex-col gap-[20px]'>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='w-[30%]'>Room Type:</p>
                                    <input type='text'
                                        value={roomTypeDetail}
                                        onChange={(e) => setRoomTypeDetail(e.target.value)}
                                        className='border w-[70%] rounded-[10px] p-[5px_0px_5px_15px]'>
                                    </input>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='w-[30%]'>Capacity:</p>
                                    <input type='number'
                                        value={capacityDetail}
                                        onChange={(e) => setCapacityDetail(e.target.value)}
                                        className='border w-[70%] rounded-[10px] p-[5px_0px_5px_15px]'>
                                    </input>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='w-[30%]'>Price:</p>
                                    <input type='number'
                                        value={priceDetail}
                                        onChange={(e) => setPriceDetail(e.target.value)}
                                        className='border w-[70%] rounded-[10px] p-[5px_0px_5px_15px]'>
                                    </input>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='w-[30%]'>Quantity:</p>
                                    <input type='number'
                                        value={quantityDetail}
                                        onChange={(e) => setQuantityDetail(e.target.value)}
                                        className='border w-[70%] rounded-[10px] p-[5px_0px_5px_15px]'>
                                    </input>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='w-[30%]'>Bed Type:</p>
                                    <input type='text'
                                        value={bedTypeDetail}
                                        onChange={(e) => setBedTypeDetail(e.target.value)}
                                        className='border w-[70%] rounded-[10px] p-[5px_0px_5px_15px]'>
                                    </input>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <p className='w-[30%]'>Decription:</p>
                                    <textarea type='text'
                                        value={descriptionDetail}
                                        onChange={(e) => setDescriptionDetail(e.target.value)}
                                        className='border w-[70%] h-[176px] rounded-[10px] p-[5px_0px_5px_15px]'>
                                    </textarea>
                                </div>
                            </div>
                            <div className='flex justify-end gap-[15px] p-[25px_0px_25px_0px] w-full'>
                                <button
                                    onClick={() => saveDataRoom(infoRoom.id)}
                                    className='flex items-center gap-[5px] p-[5px_15px_5px_15px] bg-[#1750A8] rounded-[10px] text-[#fff]'>
                                    <GiSave />
                                    Save
                                </button>
                                <button
                                    // onClick={() => saveDataService(editService.id)}
                                    className='flex items-center gap-[5px] p-[5px_15px_5px_15px] bg-[#031E37] rounded-[10px] text-[#fff]'>
                                    <SiAdobephotoshop className='bg-[#031E37] text-[#57A7F2]'/>
                                    <p className='text-[#57A7F2] font-bold'>Change Image</p>
                                </button>
                                <button
                                    onClick={offViewRoomDetail}
                                    className='flex items-center gap-[5px] p-[5px_15px_5px_15px] bg-[#EB1212] rounded-[10px] text-[#fff]'>
                                    <AiOutlineRollback />
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Notification}>
                    <div className='flex flex-col items-center justify-center gap-[15px] bg-[#fff] p-[40px_100px_40px_100px] rounded-[5px]'>
                        <div className='text-[100px] text-[#F21707]'>
                            <FaRegCircleXmark />
                        </div>
                        <div>
                            <p className='text-[25px] font-semibold'>{textNotification}</p>
                        </div>
                        <div>
                            <button onClick={offNotification}
                                className='p-[5px_20px_5px_20px] bg-green-500 font-bold text-[#fff] rounded-[3px]'>
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagementRoom