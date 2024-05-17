import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'

const Transaction = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);

    useEffect(() => {
      handleTransactionHistory();
    }, []);

    const handleTransactionHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5500/get_history');
        console.log("history is",response.data);
        setTransactionHistory(response.data.transactions);
      } catch (err) {
        console.log(err);
      }
    }
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center py-5 px-2'>
                <table>
                    <thead className='border-solid border-x-2 border-y-2'>
                        <tr>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Customer No.</th>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Sender Account No.</th>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Receiver Account No.</th>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Amount</th>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Status</th>

                        </tr>
                    </thead>
                    <tbody className='border-solid border-x-2 border-y-2'>
                        {transactionHistory?.map((item, index) => (
                            <tr key={index} className={`${index%2==0?"bg-[#6A4FA0]":""}`}>
                                <td className='border-solid border-x-2 border-y-2 p-4'>{index}</td>
                                <td className='border-solid border-x-2 border-y-2 p-4'>{item.Sender}</td>
                                <td className='border-solid border-x-2 border-y-2 p-4'>{item.Receiver}</td>
                                <td className='border-solid border-x-2 border-y-2 p-4'>{item.Amount}</td>
                                <td className='border-solid border-x-2 border-y-2 p-4'>{item.Status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Transaction