import { useState, useEffect } from 'react'
import { School, Heart } from "lucide-react";
import './App.css'

function App() {
  const [lang, setLang] = useState('en'); // 'en' ou 'fr'

  useEffect(() => {
    const updateNoiseHeight = () => {
      const htmlElement = document.documentElement;
      const bodyHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxHeight = Math.max(bodyHeight, viewportHeight);

      htmlElement.style.height = `${maxHeight}px`;
    };

    updateNoiseHeight();

    window.addEventListener('resize', updateNoiseHeight);

    const observer = new MutationObserver(updateNoiseHeight);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', updateNoiseHeight);
      observer.disconnect();
    };
  }, []);

  // Contenus textes en anglais et français
  const texts = {
    en: {
      name: "Bertrand Vigogne",
      job: "Content Creator and Developer",
      passion: "I am passionate about crafting engaging content and developing innovative solutions that I would be excited to use.",
      youtube: "Youtube",
      github: "Github",
      instagram: "Instagram",
      whatDoneTitle: "What I've done",
      soFar: "(so far)",
      whatDoneItems: [
        <>Build a community of over 2,5k subscribers and more than 500k views &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on <a href="https://www.youtube.com/@Astrw__" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Youtube</a> and <a href="https://www.tiktok.com/@astrw.x" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Tiktok</a>.</>,
        <>Create videos for channels with <a href="https://www.youtube.com/@NaxoLCN" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">7.88k</a>, <a href="https://www.youtube.com/@ShotaPrime" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">81.1k</a> and <a href="https://www.youtube.com/@darteuh" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">139k</a> subscribers.</>,
        <>Learning coding at the age of 7 and still enjoy coding now.</>,
      ],
      whatBuiltTitle: "What I've built",
      whatBuiltItems: [
        <><a href="https://cardshop.astrw.me/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">An example for a TCG store website</a></>,
        <><a href="" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">A Discord bot to track productivity using Notion's API</a></>,
      ],
      loveWorkingTitle: "I love working with ...",
      loveWorkingItems: [
        <><a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Reactjs</a> My favorite library for creating web applications</>,
        <><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Tailwind CSS</a> So much easier to use than CSS</>,
        <><a href="https://www.manim.community/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Manim</a> Create beautiful animations with Python</>,
        <><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Git</a> It is so useful to track changes in my code</>,
        <><a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Supabase</a> Easiest way to create a database</>,
        <><a href="https://www.adobe.com/fr/products/premiere/campaign/pricing.html" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Premiere pro</a> My favorite video editing software</>,
      ],
      academicBackgroundTitle: "My academic background",
      academicBackgroundContent: "Bac STI2D - Lycée Mireille Grenet Compiègne",
      academicBackgroundYears: "2022 - 2025",
      activitiesTitle: "My activities",
      contactTitle: "Get in touch",
      contactText: "Contact me at",
      contactEmail: "contact@astrw.me",
      footerText: "Made with",
      buttonLangText: "🇫🇷"
    },
    fr: {
      name: "Bertrand Vigogne",
      job: "Créateur de contenu et développeur",
      passion: "Je suis passionné par la création de contenus engageants et le développement de solutions innovantes que j'aimerais utiliser.",
      youtube: "Youtube",
      github: "Github",
      instagram: "Instagram",
      whatDoneTitle: "Ce que j'ai fait",
      soFar: "(jusqu'à présent)",
      whatDoneItems: [
        <>Construire une communauté de plus de 2,5k abonnés et plus de 500k &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vues sur <a href="https://www.youtube.com/@Astrw__" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Youtube</a> et <a href="https://www.tiktok.com/@astrw.x" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Tiktok</a>.</>,
        <>Créer des vidéos pour des chaînes avec <a href="https://www.youtube.com/@NaxoLCN" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">7.81k</a>, <a href="https://www.youtube.com/@ShotaPrime" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">81.1k</a> et <a href="https://www.youtube.com/@darteuh" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">139k</a> abonnés.</>,
        <>Avoir découvert le monde de l'informatique à 7 ans et toujours être &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;passionné aujourd'hui.</>,
      ],
      whatBuiltTitle: "Ce que j'ai construit",
      whatBuiltItems: [
        <><a href="https://cardshop.astrw.me/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Un exemple de site pour une boutique TCG</a></>,
        <><a href="" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Un bot Discord pour tracker la productivité avec l'API Notion</a></>,
      ],
      loveWorkingTitle: "J'aime travailler avec ...",
      loveWorkingItems: [
        <><a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Reactjs</a> Ma bibliothèque préférée pour créer des applications web</>,
        <><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Tailwind CSS</a> Beaucoup plus simple à utiliser que le CSS</>,
        <><a href="https://www.manim.community/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Manim</a> Créer de belles animations avec Python</>,
        <><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Git</a> C'est très utile pour suivre les changements dans mon code</>,
        <><a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Supabase</a> Le moyen le plus simple de créer une base de données</>,
        <><a href="https://www.adobe.com/fr/products/premiere/campaign/pricing.html" target="_blank" rel="noopener noreferrer" className="text-[#FFFAFA] underline">Premiere pro</a> Mon logiciel de montage vidéo préféré</>,
      ],
      academicBackgroundTitle: "Mon parcours scolaire",
      academicBackgroundContent: "Bac STI2D - Lycée Mireille Grenet Compiègne",
      academicBackgroundYears: "2022 - 2025",
      activitiesTitle: "Mes activités",
      contactTitle: "Contactez-moi",
      contactText: "Contactez-moi à",
      contactEmail: "contact@astrw.me",
      footerText: "Fait avec ",
      buttonLangText: "🇪🇳"
    }
  };

  // Inverse la langue
  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'fr' : 'en');
  }

  // Données à afficher selon la langue
  const t = texts[lang];

  return (
    <div className="">
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-20 w-[780px] h-[60px] flex items-center justify-between px-6 text-[#FFFAFA] bg-transparent rounded-lg">
        <div className="leading-none font-google"><a href="https://astrw.me">astrw.me</a></div>
        <div className="flex items-center space-x-4">
          <a href="#contact" className="font-google flex items-center justify-center bg-gray-200/10 text-[#FFFAFA] border border-gray-500 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white font-medium rounded-lg text-sm h-7 w-20 transition">
            Contact
          </a>
          <button onClick={toggleLang} className="leading-none hover:scale-110 mb-1 transition text-2xl">
            {t.buttonLangText}
          </button>
        </div>
      </header>

      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 z-10 w-[780px] ml-6">
        <div className="flex items-center space-x-4">
          <img
            src="/PP2.png"
            alt="Photo de profil"
            className="w-32 h-32 rounded-full shadow-lg object-cover"
          />
          <div className="flex flex-col -translate-y-2">
            <p className="text-[#FFFAFA] text-left text-5xl font-playfair italic pb-2 font-bold">{t.name}</p>
            <p className="text-[#FFFAFA] text-left text-xl font-roboto font-bold">{t.job}</p>
          </div>
        </div>
        <div className="flex items-start mt-5 font-roboto italic text-gray-400 text-left text-2xl">
          <p>{t.passion}</p>
        </div>
        <div className="flex items-center mt-4 space-x-4">
          <a
            href="https://www.youtube.com/@Astrw__"
            target='_blank'
            rel="noopener noreferrer"
            className="font-google flex items-center justify-center bg-gray-200/10 text-[#FFFAFA] border border-gray-500 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white font-medium rounded-lg text-lg h-10 w-25 transition "
          >
            {t.youtube}
          </a>
          <a
            href="https://github.com/Astrw0"
            target='_blank'
            rel="noopener noreferrer"
            className="font-google flex items-center justify-center bg-gray-200/10 text-[#FFFAFA] border border-gray-500 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white font-medium rounded-lg text-lg h-10 w-23 transition "
          >
            {t.github}
          </a>
          <a
            href="https://www.instagram.com/brt.vg/"
            target='_blank'
            rel="noopener noreferrer"
            className="font-google flex items-center justify-center bg-gray-200/10 text-[#FFFAFA] border border-gray-500 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white font-medium rounded-lg text-lg h-10 w-32 transition "
          >
            {t.instagram}
          </a>
        </div>

        {/* What I've done */}
        <div className="text-left flex pt-7">
          <div className="text-[#FFFAFA] mt-10 font-playfair text-4xl ">
            {t.whatDoneTitle}
          </div>
          <div className=" text-2xl font-google italic pl-2 text-gray-300 opacity-40 pt-13">
            {t.soFar}
          </div>
        </div>
        {t.whatDoneItems.map((item, i) => (
          <div key={i} className="text-left flex pt-6 text-2xl text-gray-300 ">
            <p>• &nbsp;&nbsp;&nbsp;{item}</p>
          </div>
        ))}

        {/* What I've built */}
        <div className="text-left flex pt-7">
          <div className="text-[#FFFAFA] mt-20 font-playfair text-4xl ">
            {t.whatBuiltTitle}
          </div>
        </div>
        {t.whatBuiltItems.map((item, i) => (
          <div key={i} className="text-left flex pt-6 text-2xl text-gray-300 ">
            <p>• &nbsp;&nbsp;&nbsp;{item}</p>
          </div>
        ))}

        {/* I love working with */}
        <div className="text-left flex pt-7">
          <div className="text-[#FFFAFA] mt-20 font-playfair text-4xl ">
            {t.loveWorkingTitle}
          </div>
        </div>
        {t.loveWorkingItems.map((item, i) => (
          <div key={i} className="text-left flex pt-6 text-2xl text-gray-300 italic ">
            <p>• &nbsp;&nbsp;&nbsp;{item}</p>
          </div>
        ))}

        {/* My academic background */}
        <div className="text-left flex pt-7">
          <div className="text-[#FFFAFA] mt-20 font-playfair text-4xl ">
            {t.academicBackgroundTitle}
          </div>
        </div>
        <div className="text-left flex pt-8 text-2xl/11 text-gray-300 h-28 w-200 transition ">
          <div className='bg-gray-200/10 flex items-center border border-gray-500 font-medium rounded-lg transition'>
            <School className='h-8 w-20' />&nbsp; {t.academicBackgroundContent}&nbsp;&nbsp; <div className='text-gray-400 italic text-lg font-google'>{t.academicBackgroundYears}&nbsp;&nbsp;</div>
          </div>
        </div>

        {/* My activities */}
        <div className="text-left flex pt-7">
          <div className="text-[#FFFAFA] mt-20 font-playfair text-4xl ">
            {t.activitiesTitle}
          </div>
        </div>
        <div className="flex w-[780px] gap-x-4 mt-8 mx-auto">
          {[{
            src: "/image.jpg",
            alt: "Description 1",
            tooltip: lang === 'en' ? "Me gardening with my cat" : "Moi jardinant avec mon chat"
          }, {
            src: "/working.jpg",
            alt: "Description 2",
            tooltip: lang === 'en' ? "Me working" : "Moi en train de travailler"
          }, {
            src: "vinyl2.jpg",
            alt: "Description 3",
            tooltip: lang === 'en' ? "My vinyl collection" : "Ma collection de vinyles"
          }].map(({ src, alt, tooltip }, i) => (
            <div key={i} className="relative group w-1/3 overflow-hidden rounded-lg">
              <img
                src={src}
                alt={alt}
                className="object-cover w-full h-100 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity z-10"></div>
              <span className="absolute bottom-2 left-2 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity select-none z-20 font-google">
                {tooltip}
              </span>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div id="contact" className="text-left flex pt-7 pb-14">
          <div className="text-[#FFFAFA] mt-20 font-playfair text-4xl ">
            {t.contactTitle}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 mb-20">
          <span className="text-xl text-gray-300 font-google ml-1">{t.contactText}</span>&nbsp;
          <a href="mailto:contact@astrw.me" className="text-gray-300 font-google underline">{t.contactEmail}</a>
        </div>

        <footer className="fixed bottom-2 left-1/2 -translate-x-1/2 text-gray-400 font-google mb-7 text-sm flex items-center gap-1 select-none">
          {t.footerText} <Heart className='h-4 w-4 ml-2.5  text-gray-700' />
        </footer>
        <div className='h-20'></div>
      </div>
    </div>
  );
}

export default App;
