
import bankImage from "../assets/bank.jpg";
const Hero = () => {
  
  return (
    <div className="flex justify-center flex-col lg:flex-row items-center bg-white">
        <img src={bankImage} alt="image" style={{maxWidth:"66%"}}/>
      <div className="bg-white flex flex-col gap-3 p-4">
        <p className="text-4xl text-black font-bold flex justify-center">Online Banking System</p>
        <div>
          <p className="text-lg flex flex-col justify-center text-black font-semibold">Enhancing Financial Transactions: A Comprehensive Online Banking System.
          offering a comprehensive solution for managing financial transactions. With a user-friendly interface, customers can effortlessly view all account holders, seamlessly send and receive funds, and securely add money to their accounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
