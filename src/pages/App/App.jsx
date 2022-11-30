import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../AllCoinPage/AllCoinPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import NavBar from '../../components/NavBar/NavBar'
import AllCoinPage from '../AllCoinPage/AllCoinPage';
import CoinDetailsPage from '../CoinDetailsPage/CoinDetailsPage';
import ProfilePage from '../ProfilesPage/ProfilePage';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/coins" element={<AllCoinPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/coins/:coinId" element={<CoinDetailsPage />} />
            <Route path='/profiles' element={<ProfilePage user={user}/>} /> 
            <Route path='/profiles/watchlist/:coinId' />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


