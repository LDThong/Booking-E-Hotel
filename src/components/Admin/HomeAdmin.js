import React, { useEffect, useState } from 'react';
import NavBarAdmin from './NavBarAdmin';
import HeaderAdmin from './HeaderAdmin';
import { useNavigate } from 'react-router-dom';

function HomeAdmin() {
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   window.localStorage.removeItem("user");
  //   setUser(null);
  //   navigate("/admin");
  // };

  // const handleUser = () => {
  //   const localUser = JSON.parse(window.localStorage.getItem("user"));
  //   if (localUser) {
  //     setUser(localUser);
  //   }
  // };

  // useEffect(() => {
  //   handleUser();
  // }, []);

  return (
    <div className=''>
        <NavBarAdmin />
        <div className='w-[80%] float-right h-screen'>
            <HeaderAdmin />
            <div>

            </div>
        </div>
    </div>
  )
}

export default HomeAdmin