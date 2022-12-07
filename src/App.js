// import logo from './logo.svg';
import {   Route, Routes } from "react-router-dom";
import './App.css';
import Firstpage from './Components/Firstpage';
import Secondpage from './Components/Secondpage';
import Thirdpage from "./Components/Thirdpage";
import Getstarted from "./Components/Getstarted";
import Dashboard from "./Components/Dashboard";
import Newmodal from "./Components/Newmodal";
import Newdashboard from "./Components/Newdashboard";
import ReactSideBar from "./Components/ReactSideBar";
import NavBar from "./Components/NavBar";



function App() {
  return (
   <>
   <Routes>
         <Route path='/' element={<Firstpage/>}/>
         <Route path='/Secondpage' element={<Secondpage/>}/>
         <Route path='/thirdpage' element={<Thirdpage/>}/>
         <Route path='/getstarted' element={<Getstarted/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/newmodal' element={<Newmodal/>}/>
         <Route path='/newdashboard' element={<Newdashboard/>}/>
         <Route path='/sidebar' element={<ReactSideBar/>}/>
         <Route path='/navbar' element={<NavBar/>}/>

         
   </Routes>
   </>
  );
}

export default App;
