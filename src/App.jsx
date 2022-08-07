import React from 'react';
import './App.css';
import StandardThumbnail from './images/placeholder.png'
import { GiMagnifyingGlass } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import Footer from './components/Footer';

const bord ='rounded border border-solid border-black w-36 m-5'
const basicDate = new Date();
const date = new Intl.DateTimeFormat(
  'pt-br', { day: 'numeric', month: 'long', year: 'numeric' })
  .format(basicDate);

function App() {
  return (
    <>
      <header className='bg-neutral-400 flex justify-between'>
        <AiOutlineMenu className='m-2' size='30' color='white' />
        <GiMagnifyingGlass className='m-2' size='30' color='white' />
      </header>
      <section className='text-center pt-2 pb-10 bg-slate-100'>
        <h1 className='text-4xl text-sky-600 font-bold mb-1'>
          Easy consultoria
        </h1>
        <p className='text-slate-500 text-xl'>App - Web Easy Consultoria</p>
      </section>
      <main className='flex flex-wrap justify-around mb-2'>
        <a>
          <img className={ bord } src={ StandardThumbnail } />
        </a>
        <a>
          <img className={ bord } src={ StandardThumbnail } />
        </a>
        <a>
          <img className={ bord } src={ StandardThumbnail } />
        </a>
        <a>
          <img className={ bord } src={ StandardThumbnail } />
        </a>
        <a>
          <img className={ bord } src={ StandardThumbnail } />
        </a>
        <a>
          <img className={ bord } src={ StandardThumbnail } />
        </a>
      </main>
      <p className='mb-10 text-center text-slate-500 text-xl'>
        {date}
      </p>
      <Footer />
    </>
  );
}

export default App;
