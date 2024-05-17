import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import UpdateBal from '../Components/UpdateBal';

const AllCustomers = () => {
    const [allData, setAllData] = useState([]);
    const [isTableUpdate,setTableUpdate]=useState(true);
    const [updateId,setUpdateId]=useState(null);
    const handleAllCustomer = async () => {
        try {
            const response = await axios.get('http://localhost:5500/getCustomer');
            setAllData(response.data.allCustomer);
        } catch (err) {
            console.log(err);
        }
    };
    const handleUpdate=(id)=>{
        setTableUpdate(!isTableUpdate);
        setUpdateId(id);
    }
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5500/deleteCustomer/${id}`);
            handleAllCustomer();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleAllCustomer();
    }, []);

    return (
        <div>
            <Navbar />
            {isTableUpdate &&
             <div className='flex justify-center py-5 px-2'>
                <table>
                    <thead className='border-solid border-x-2 border-y-2'>
                        <tr>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Customer No.</th>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Name</th>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Email</th>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Account No.</th>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Balance</th>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Update Bal</th>
                            <th className='border-solid border-x-2 border-y-2 p-4'>Action</th>

                        </tr>
                    </thead>
                    <tbody className='border-solid border-x-2 border-y-2'>
                        {allData?.map((item, index) => (
                            <tr key={index} className={`${index%2==0?"bg-[#6A4FA0]":""}`}>
                                <td className='border-solid border-x-2 border-y-2 p-4'>{index}</td>
                                <td className='border-solid border-x-2 border-y-2 p-4'>{item.Username}</td>
                                <td className='border-solid border-x-2 border-y-2 p-4'>{item.email}</td>
                                <td className='border-solid border-x-2 border-y-2 p-4'>{item.AccountNo}</td>
                                <td className='border-solid border-x-2 border-y-2 p-4'>{item.currentBal}</td>
                                <td className='border-solid border-x-2 border-y-2 p-4'><button onClick={()=>handleUpdate(item._id)} className='btn bg-green-700'>Update</button></td>
                                <td className='border-solid border-x-2 border-y-2 p-4'><button onClick={()=>handleDelete(item._id)} className='btn bg-red-700'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
            {!isTableUpdate && <div>
                <UpdateBal updateId={updateId}/>
            </div>}
        </div>
    );
};

export default AllCustomers;
