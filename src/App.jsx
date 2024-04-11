import Login from './views/login'
import Register from './views/register'
import Home from './views/home'
import AboutUs from './views/aboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;