import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashboardKasir() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Cek apakah user sudah login atau belum 
    if (!localStorage.getItem("logged")) {
      navigate("/");
    } else {
      // setUser(`Selamat datang sebagai ${localStorage.getItem("user")} ${localStorage.getItem("namauser")}`);
      let role = localStorage.getItem("user");
      setUser(`Selamat datang sebagai ${role}`);
    }
  }, [navigate]);

  return (
<>

<div className="container px-6 py-8 mx-auto ">          
<h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl text-[#cc6e8f]"> Selamat Datang Dikasir</h1>
<h2 className="text-5xl font-bold text-white uppercase ">{user}</h2>
</div>
      
</>
  );
}

export default DashboardKasir;


