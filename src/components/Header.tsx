"use client"
import React, { useState } from 'react';
import { LuHouse } from "react-icons/lu";
import { PiCoffeeBold } from "react-icons/pi";
import { ImBlog } from "react-icons/im";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ fontFamily: "Poppins" }} className='sticky top-0 z-50 bg-transparent p-[2px] backdrop-blur-md'>
      <nav className='flex items-center justify-between m-6'>
        <h1 className='text-3xl md:mt-1'>Blogy.com</h1>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-2xl'>
            <AiOutlineMenu />
          </button>
        </div>
        <div className='hidden md:flex items-center space-x-16 text-xl'>
          <Link href="/" className='flex items-center'>
            <LuHouse className='inline-block mr-1 mb-1 text-xl' />
            Home
          </Link>
          <Link href="/about" className='flex items-center'>
            <PiCoffeeBold className='inline-block mr-1 mb-1 text-xl' />
            About
          </Link>
          <Link href="/blog" className='flex items-center'>
            <ImBlog className='inline-block mr-1 mb-1 text-xl' />
            Blog
          </Link>
          
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full backdrop-blur-md bg-transparent shadow-lg transform ${isOpen ? 'translate-x-50' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className='flex items-center justify-between p-4'>
          <h1 className='text-3xl'>Menu</h1>
          <button onClick={toggleMenu} className='text-2xl'>
            <AiOutlineClose />
          </button>
        </div>
        <div className='flex flex-col space-y-4 p-4 text-xl bg-white '>
          <Link href="/" className='flex items-center' onClick={toggleMenu}>
            <LuHouse className='inline-block mr-1 mb-1 text-xl' />
            Home
          </Link>
          <Link href="/about" className='flex items-center' onClick={toggleMenu}>
            <PiCoffeeBold className='inline-block mr-1 mb-1 text-xl' />
            About
          </Link>
          <Link href="/blog" className='flex items-center' onClick={toggleMenu}>
            <ImBlog className='inline-block mr-1 mb-1 text-xl' />
            Blog
          </Link>
         
        </div>
      </div>
    </div>
  );
}