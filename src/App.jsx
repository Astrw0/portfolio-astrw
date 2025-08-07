import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Silk from './Silk.jsx';


function App() {


  return (
    <>
      <div className='fixed top-0 left-0 w-screen h-screen -z-10'>
        <Silk
        speed={4.7}
        scale={1}
        color="#1e1f1e"
        noiseIntensity={1.5}
        rotation={0}
        />
      </div>

      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-20 w-[780px] h-[60px] flex items-center justify-between px-6 text-[#FFFAFA] bg-transparent rounded-lg">
  {/* Gauche : Titre */}
  <div className=" leading-none font-google">astrw.me</div>

  {/* Droite : Bouton + Icône */}
  <div className="flex items-center space-x-4">
    <button className="font-google flex items-center justify-center bg-gray-200/10 text-[#FFFAFA] border border-gray-500 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white font-medium rounded-lg text-sm h-7 w-20 transition">
      Contact
    </button>
    <button className=" leading-none hover:scale-110 transition">
      🌙
    </button>
  </div>
</header>

    <div className="absolute top-[100px] left-1/2 -translate-x-1/2 z-10 w-[780px] ml-6">
  <div className="flex items-center space-x-4">
    <img
      src="/path/to/ton-avatar.jpg"
      alt="Photo de profil"
      className="w-30 h-30 rounded-full border border-white shadow-lg object-cover"
    />
    <div className="flex flex-col -translate-y-2">
      <p className="text-[#FFFAFA] text-left text-5xl font-playfair italic pb-4 font-bold">Bertrand Vigogne</p>
      <p className="text-[#FFFAFA] text-left text-md font-roboto font-bold">Content Creator and Developper</p>
    </div>
  </div>
</div>

    </>
  )
}

export default App