import './App.css';
import React from 'react';
import Characters from './components/Characters/Characters';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Locations from './components/Locations/Locations';
import Items from './components/Items/Items';
import Weapons from './components/Weapons/Weapons';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from './components/Users/Register';
import Login from './components/Users/Login';
import FormNewCharacter from './components/Characters/FormNewCharacter';
import FormNewItem from './components/Items/FormNewItem';
import FormNewLocation from './components/Locations/FormNewLocation';
import FormNewWeapon from './components/Weapons/FormNewWeapon';

function App() {
    return (
        <div className="App">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/characters' element={<Characters />} />
                        <Route path='/characters/create' element={<FormNewCharacter />}/>
                        <Route path='locations' element={<Locations />} />
                        <Route path='locations/create' element={<FormNewLocation />} />
                        <Route path='weapons' element={<Weapons />} />
                        <Route path='weapons/create' element={<FormNewWeapon />} />
                        <Route path='items' element={<Items />} />
                        <Route path='items/create' element={<FormNewItem />} />
                        <Route path='users/register' element={<Register/>} />
                        <Route path='users/login' element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
