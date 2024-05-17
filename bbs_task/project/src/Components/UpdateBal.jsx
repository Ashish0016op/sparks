import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
const UpdateBal = ({updateId}) => {
    const [bal,setBal]=useState(null);
    const handleBalance=(e)=>{
        e.preventDefault();
        let balance=e.target.value;
        setBal(balance);
    }
    const handleSubmit=async()=>{
        try{
            
            const updateBalance=await axios.put(`http://localhost:5500/updateBal/${updateId}`,{bal});
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>
        <div className='flex flex-col justify-center gap-3 py-5'>
            <p className='text-center text-2xl'>Update Balance</p>
            <form className='flex flex-col justify-center border-solid border-x-2 border-y-2'>
                <label htmlFor='bal' className='text-center'>Enter Amount</label><br/>
                <input type='number' onChange={handleBalance} className='h-10 my-3 px-4 bg-slate-600'/>
                <button onClick={handleSubmit} className='btn bg-blue-700 hover:bg-blue-900'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateBal