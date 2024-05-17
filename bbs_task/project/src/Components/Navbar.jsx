
import { GoDownload } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className=' w-[100%] bg-gray-400'>
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <label htmlFor="my-drawer" className=""><GiHamburgerMenu className='text-white h-[40px] w-[30px]'/></label>
      </div>
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overla"></label>
    <ul className="menu p-4 w-80 min-h-full gap-3 text-white" style={{backgroundColor:"#9CA3AF"}}>
    <label htmlFor="my-drawer" className=""><ImCross className='h-[40px] w-[20px] ml-auto'/></label>
      <Link to="/"><button className='btn'><li className='text-lg'>Home</li></button></Link>
      <Link to="/allcustomers"><button className='btn'><li className='text-lg'>View Customer</li></button></Link>
      <Link to="/sendMoney"><button className='btn'><li className='text-lg'>Send Money</li></button></Link>
      <Link to="/transaction_history"><button className='btn'><li className='text-lg'>Transactions History</li></button></Link>
      <Link to="/about"><button className='btn'><li className='text-lg'>About</li></button></Link>
      <Link to="/contact"><button className='btn'><li className='text-lg'>Contact</li></button></Link>
      
    </ul>
  </div>
</div>
    </div>
    <a className="btn btn-ghost text-xl text-white">logo</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-4 cursor-pointer px-1 text-white">
      <Link to="/"><button className='btn'><li className='text-lg'>Home</li></button></Link>
      <Link to="/allcustomers"><button className='btn'><li className='text-lg'>View Customer</li></button></Link>
      <Link to="/sendMoney"><button className='btn'><li className='text-lg'>Send Money</li></button></Link>
      <Link to="/transaction_history"><button className='btn'><li className='text-lg'>Transactions History</li></button></Link>
      <Link to="/about"><button className='btn'><li className='text-lg'>About</li></button></Link>
      <Link to="/contact"><button className='btn'><li className='text-lg'>Contact</li></button></Link>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar