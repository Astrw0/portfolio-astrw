import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Silk from './Silk.jsx';
import { School, Heart } from "lucide-react";


function App() {

  useEffect(() => {
    const updateNoiseHeight = () => {
      const htmlElement = document.documentElement;
      const bodyHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxHeight = Math.max(bodyHeight, viewportHeight);
      
      // Appliquer la hauteur maximale à l'élément HTML
      htmlElement.style.height = `${maxHeight}px`;
    };

    // Mettre à jour au chargement
    updateNoiseHeight();
    
    // Mettre à jour lors du redimensionnement de la fenêtre
    window.addEventListener('resize', updateNoiseHeight);
    
    // Mettre à jour quand le contenu change
    const observer = new MutationObserver(updateNoiseHeight);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      window.removeEventListener('resize', updateNoiseHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <>

      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-20 w-[780px] h-[60px] flex items-center justify-between px-6 text-[#FFFAFA] bg-transparent rounded-lg bg">
  <div className=" leading-none font-google"><a href="https://astrw.me">astrw.me</a></div>
  <div className="flex items-center space-x-4">
    <a href="#contact" className="font-google flex items-center justify-center bg-gray-200/10 text-[#FFFAFA] border border-gray-500 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white font-medium rounded-lg text-sm h-7 w-20 transition">
      Contact
    </a>
    <button className=" leading-none hover:scale-110 transition">
      🌙
    </button>
  </div>
</header>

    <div className="absolute top-[100px] left-1/2 -translate-x-1/2 z-10 w-[780px] ml-6">
  <div className="flex items-center space-x-4">
    <img
      src="/ppv3.jpg"
      alt="Photo de profil"
      className="w-32 h-32 rounded-full shadow-lg object-cover"
    />
    <div className="flex flex-col -translate-y-2">
      <p className="text-[#FFFAFA] text-left text-5xl font-playfair italic pb-2 font-bold">Bertrand Vigogne</p>
      <p className="text-[#FFFAFA] text-left text-xl font-roboto font-bold">Content Creator and Developper</p>
    </div>
  </div>
  <div className="flex items-start mt-5 font-roboto italic text-gray-400 text-left text-2xl">
    <p>I am passionate about crafting engaging content and developing innovative solutions that I would be excited to use. </p>
    </div>
    <div className = "flex items-center mt-4 space-x-4">
      <a href="https://www.youtube.com/@Astrw__"
      target='_blank'
      rel="noopener noreferrer"
      className="font-google flex items-center justify-center bg-gray-200/10 text-[#FFFAFA] border border-gray-500 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white font-medium rounded-lg text-lg h-10 w-25 transition ">
      Youtube
    </a>
      <a href="https://github.com/Astrw0"
      target='_blank'
      rel="noopener noreferrer"
      className="font-google flex items-center justify-center bg-gray-200/10 text-[#FFFAFA] border border-gray-500 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white font-medium rounded-lg text-lg h-10 w-23 transition ">
      Github
    </a>
    <a href="https://www.instagram.com/brt.vg/"
      target='_blank'
      rel="noopener noreferrer"
      className="font-google flex items-center justify-center bg-gray-200/10 text-[#FFFAFA] border border-gray-500 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white font-medium rounded-lg text-lg h-10 w-32 transition ">
      Instagram
    </a>
    </div>
    <div className="text-left flex pt-7">
      <div className="text-[#FFFAFA] mt-10 font-playfair text-4xl ">
        What I've done
        </div>
        <div className=" text-2xl font-google italic pl-2 text-gray-300 opacity-40 pt-13">
        (so far)
        </div>
      </div>
      <div className="text-left flex pt-6 text-2xl text-gray-300 ">
        <p>
          • &nbsp;&nbsp;&nbsp;Build a community of over 2,5k subscribers and more than 500k views on <a href="https://www.youtube.com/@Astrw__" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Youtube</a> and  <a href="https://www.tiktok.com/@astrw.x" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">Tiktok</a>.<br/>
        </p>
        </div>
        <div className="text-left flex pt-6 text-2xl text-gray-300 ">
        <p>
          • &nbsp;&nbsp;&nbsp;Create videos for channels with <a href="https://www.youtube.com/@NaxoLCN" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">7.81k</a> , <a href="https://www.youtube.com/@ShotaPrime" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">81.1k</a> and <a href="https://www.youtube.com/@darteuh" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">139k</a> subscribers.<br/>
        </p>
        </div>
        <div className="text-left flex pt-6 text-2xl text-gray-300 ">
        <p>
          • &nbsp;&nbsp;&nbsp;Learning coding at the age of 7 and still enjoy coding now.<br/>
        </p>
        </div>
        <div className="text-left flex pt-7">
      <div className="text-[#FFFAFA] mt-20 font-playfair text-4xl ">
        What I've built
        </div>
      </div>
      <div className="text-left flex pt-6 text-2xl text-gray-300 ">
        <p>
          • &nbsp;&nbsp;&nbsp; <a href="" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">An example for a TGC store  website</a> 
        </p>
        </div>
        <div className="text-left flex pt-6 text-2xl text-gray-300 ">
        <p>
          • &nbsp;&nbsp;&nbsp; <a href="" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">A Discord bot to track productivity using Notion's API</a> 
        </p>
        </div>
        <div className="text-left flex pt-7">
      <div className="text-[#FFFAFA] mt-20 font-playfair text-4xl ">
        I love working with ...
        </div>
      </div>
        <div className="text-left flex pt-6 text-2xl text-gray-300 italic ">
        <p>
          • &nbsp;&nbsp;&nbsp; <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">Reactjs</a> My favorite library for creating web applications
        </p>
        </div>
        <div className="text-left flex pt-6 text-2xl text-gray-300 italic ">
        <p>
          • &nbsp;&nbsp;&nbsp; <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">Tailwind CSS</a> So much easier to use than CSS
        </p>
        </div>
        <div className="text-left flex pt-6 text-2xl text-gray-300 italic ">
        <p>
          • &nbsp;&nbsp;&nbsp; <a href="https://www.manim.community/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">Manim</a> Create beautiful animations with Python
        </p>
        </div>
        <div className="text-left flex pt-6 text-2xl text-gray-300 italic ">
        <p>
          • &nbsp;&nbsp;&nbsp; <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">Git</a> It is so useful to track changes in my code
        </p>
        </div>
        <div className="text-left flex pt-6 text-2xl text-gray-300 italic ">
        <p>
          • &nbsp;&nbsp;&nbsp; <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">Supabase</a> Easiest way to create a database
        </p>
        </div>
                <div className="text-left flex pt-6 text-2xl/11 text-gray-300 italic ">
        <p>
          • &nbsp;&nbsp;&nbsp; <a href="https://www.adobe.com/fr/products/premiere/campaign/pricing.html?mv=search&mv=search&mv2=paidsearch&sdid=G4FRYP7G&ef_id=CjwKCAjwwNbEBhBpEiwAFYLtGCqqwTJHmtcuGalS5KSVTFXnoZZjM6-H-Zdsxad06miZBKe1FmICTBoCy7kQAvD_BwE:G:s&s_kwcid=AL!3085!3!760571183260!e!!g!!premiere%20pro!22725985660!181593388477&gad_source=1&gad_campaignid=22725985660&gbraid=0AAAAADraYsJEZD9EU5LtOjTaFkCE0w_pw&gclid=CjwKCAjwwNbEBhBpEiwAFYLtGCqqwTJHmtcuGalS5KSVTFXnoZZjM6-H-Zdsxad06miZBKe1FmICTBoCy7kQAvD_BwE" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA]  underline">Premiere pro</a> My favorite video editing software
        </p>
        </div>
        <div className="text-left flex pt-7">
      <div className="text-[#FFFAFA] mt-20 font-playfair text-4xl ">
        My academic background
        </div>
      </div>
        <div className="text-left flex pt-8 text-2xl/11 text-gray-300    h-28 w-200 transition ">
        <div className='bg-gray-200/10 flex items-center border border-gray-500  font-medium rounded-lg transition'>
        <div className="app">
        </div>
        <School className='h-8 w-20'/>&nbsp;  Bac STI2D - Lycée Mireille Grenet Compiègne&nbsp;&nbsp; <div className='text-gray-400 italic text-lg font-google'>2022 - 2025&nbsp;&nbsp;</div>
        </div>
        </div>
        <div className="text-left flex pt-7">
      <div className="text-[#FFFAFA] mt-20 font-playfair text-4xl ">
        My activities
        </div>
      </div>
      <div className="flex w-[780px] gap-x-4 mt-8 mx-auto">
  {[{
    src: "/image.jpg",
    alt: "Description 1",
    tooltip: "Me gardening with my cat"
  },{
    src: "/working.jpg",
    alt: "Description 2",
    tooltip: "Me working"
  },{
    src: "/path/to/image3.jpg",
    alt: "Description 3",
    tooltip: "Message 3"
  }].map(({src, alt, tooltip}, i) => (
    <div key={i} className="relative group w-1/3 overflow-hidden rounded-lg">
      <img 
        src={src} 
        alt={alt} 
        className="object-cover w-full h-100 transition-transform duration-300 group-hover:scale-105"
      />
      {/* Overlay noir semi-transparent, visible au hover */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity z-10"></div>
      {/* Texte en bas à gauche */}
      <span className="absolute bottom-2 left-2 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity select-none z-20 font-google">
        {tooltip}
      </span>
    </div>
  ))}
</div>
        <div className="text-left flex pt-7">
        <div className="text-[#FFFAFA] mt-20 font-playfair text-4xl ">
        Get in touch
        </div>
      </div>
              <div className="text-left flex pt-6 text-2xl/11 text-gray-300 ">

          Contact me at &nbsp;<div className='underline'> contact@astrw.me </div>

        </div>
<footer>
  <div id="contact" className="flex justify-center items-center pt-25 pb-10 text-2xl/11 text-gray-500 italic font-google">
    Made with&nbsp;<Heart /> &nbsp;by Astrw
  </div>
</footer>
</div>

    </>
  )
}

export default App