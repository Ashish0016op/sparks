import { useState } from "react";
import Navbar from "../Components/Navbar";
import sendMoney from '../assets/sendMoney.jpg';
import axios from "axios";

const SendMoney = () => {
    const [transData, setTransData] = useState({ sender: "", receiver: "", amount: "", status: "Success" });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTransData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSendMoney = async () => {
        try {
            const response = await axios.get('http://localhost:5500/getCustomer');
            let receiverPresent = false;
            let senderPresent = false;
            let receiverId = '';
            let senderId = '';
            let senderBal = 0;
            response.data.allCustomer.map((item) => {
                if (transData.receiver == item.AccountNo) {
                    receiverPresent = true;
                    receiverId = item._id;
                }
                if (transData.sender == item.AccountNo) {
                    senderPresent = true;
                    senderId = item._id;
                    senderBal = item.currentBal;
                }
            });

            if (receiverPresent && senderPresent && senderBal >= parseInt(transData.amount)) {
                if (window.confirm("Are you sure you want to send money?")) {
                    await axios.post("http://localhost:5500/sendAmount", transData);
                    await axios.put(`http://localhost:5500/update_receive_Bal/${receiverId}`, { bal: parseInt(transData.amount) });
                    await axios.put(`http://localhost:5500/update_send_Bal/${senderId}`, { bal: parseInt(transData.amount) });
                    alert("Transaction successful");
                }
            } else {
                if (!receiverPresent) alert("Receiver Account not present");
                if (!senderPresent) alert("Sender Account not present");
                if (senderBal < parseInt(transData.amount)) alert("Insufficient balance in sender's account");
            }
        } catch (err) {
            console.error("Error occurred while sending money:", err);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="flex justify-center py-5">
                <div className="card w-96 glass">
                    <figure>
                        <img src={sendMoney} alt="Send Money" />
                    </figure>
                    <p className="text-3xl text-white flex justify-center pt-3">Transfer Money</p>
                    <div className="card-body">
                        <label className="input input-bordered flex items-center py-8 gap-2">
                            Sender Account No.
                            <input
                                type='number'
                                name='sender'
                                onChange={handleInputChange}
                                className="grow"
                                placeholder="0123456789"
                            />
                        </label>
                        <label className="input input-bordered flex items-center py-8 gap-2">
                            Receiver Account No.
                            <input
                                type='number'
                                name='receiver'
                                onChange={handleInputChange}
                                className="grow"
                                placeholder="0123456789"
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Amount
                            <input
                                type='number'
                                name='amount'
                                onChange={handleInputChange}
                                className="grow"
                                placeholder="500"
                            />
                        </label>
                        <div className="card-actions justify-end">
                            <button onClick={handleSendMoney} className="btn btn-success text-white">Transfer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;
