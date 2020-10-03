import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfilPhoto from './components/profile/profilphoto';
import { FullName } from './components/profile/fullname';
import Adresse from './components/profile/adress';

function App() {
  return (
    <div className="App">
      <h1> Ma fiche de présentation </h1>
      <ProfilPhoto/>
      <br/>
      <FullName/>
      <br/>
      <Adresse/>
   

   
    
      

     
    </div>
  );

}

export default App;
