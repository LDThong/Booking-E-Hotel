import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function HomePage() {
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    window.localStorage.removeItem("user");
    setUser(null);
  };
  const handleUser = () => {
    const localUser = JSON.parse(window.localStorage.getItem("user"));
    if (localUser) {
      setUser(localUser);
    }
  };
  useEffect(() => {
    handleUser();
  }, []);
  return (
    <div>
      <Header user={user} handleLogout={handleLogout} />
      <Main user={user}/>
      <Footer />
    </div>
  );
}

export default HomePage;
