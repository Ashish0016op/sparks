import React, { useState } from "react";
import cusGif from "../assets/customers.gif";
import MoneyTransfer from "../assets/transer_money.gif";
import balance from "../assets/balance.gif";
import { Link, useNavigate } from "react-router-dom";

const Services = () => {
    const navigate=useNavigate();
  const handleCreateAccount = () => {
    navigate('/createAccount');
  };
  return (
    <div className="bg-white">
      <div className="flex justify-center py-3">
        <p className="text-4xl font-bold text-black">Our Services</p>
      </div>
      <div className="flex flex-wrap py-5 justify-center gap-5 px-2">
        <div className=" flex flex-col justify-center">
          <img
            src={cusGif}
            alt="image"
            className="border-black rounded-3xl border-solid border-x-2 border-y-2 h-[200px] w-[200px]"
          />
          <Link to="/allcustomers">
            <button className="btn my-3 text-xl text-white font-semibold">
              View Customers
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <img
            src={MoneyTransfer}
            alt="image"
            className="border-black rounded-3xl border-solid border-x-2 border-y-2 h-[200px] w-[200px]"
          />
          <Link to="/sendMoney"><button className="btn my-3 text-xl text-white font-semibold">
            Send Money
          </button></Link>
        </div>
        <div className="flex flex-col justify-center">
          <img
            src={balance}
            alt="image"
            className="border-black rounded-3xl border-solid border-x-2 border-y-2 h-[200px] w-[200px]"
          />
          <button
            onClick={handleCreateAccount}
            className="btn my-3 text-xl text-white font-semibold"
          >
            Create Account
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
