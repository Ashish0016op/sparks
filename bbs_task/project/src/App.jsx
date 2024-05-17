import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contactpage from './pages/Contactpage'
import Aboutpage from './pages/Aboutpage'
import AllCustomers from './pages/AllCustomers'
import CreateAccount from './pages/CreateAccount'
import SendMoney from './pages/SendMoney'
import Transaction from './pages/Transaction'

function App() {
  return (
    <div className='w-fit md:w-[100%]'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/contact' element={<Contactpage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/allcustomers' element={<AllCustomers/>}/>
        <Route path='/createAccount' element={<CreateAccount/>}/>
        <Route path='/sendMoney' element={<SendMoney/>}/>
        <Route path='/transaction_history' element={<Transaction/>}/>
      </Routes>
    </div>
  )
}

export default App
