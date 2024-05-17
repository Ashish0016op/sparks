import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import createAccountImg from '../assets/createAccount_img.jpg'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateAccount = () => {
  const navigate=useNavigate();
    const [data,setData]=useState({ Username: "", email: "",AccountNo:"", currentBal: null })
    const handleName = (event) => {
        setData({ ...data, Username: event.target.value });
    };
    const handleEmail = (event) => {
        setData({ ...data, email: event.target.value });
    };
    const handleAccount=(event)=>{
      setData({...data,AccountNo:event.target.value});
    }
    const handleBalance = (event) => {
        setData({ ...data, currentBal: event.target.value });
    };
    console.log(data);
    const handleCreate = async () => {
      try {
        console.log(data);
          await axios.post('http://localhost:5500/customerdata', {data});
          navigate('/allcustomers')
      } catch (err) {
          console.log(err);
      }
  };
  
  return (
    <div>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="card w-96 glass">
          <figure>
            <img
              src={createAccountImg}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input type="text" onChange={handleName} className="grow" placeholder="virat kohli" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                onChange={handleEmail}
                className="grow"
                placeholder="test@gmail.com"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Account Number
              <input
                type='number'
                onChange={handleAccount}
                className="grow"
                placeholder="0123456789"
              />
            </label>
            <p>Account number must be 10 digit</p>
            <label className="input input-bordered flex items-center gap-2">
              <input type='number' onChange={handleBalance} className="grow" placeholder="balance" />
            </label>
            <div className="card-actions justify-end">
              <button onClick={handleCreate} className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
