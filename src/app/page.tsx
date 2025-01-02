"use client"
import { useEffect } from "react";
import Header from "../components/Header"
import Typed from "typed.js";
import gsap from "gsap"
import { main} from "../../data/main";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  useEffect(() => {
        gsap.from(".text", { duration: 1, opacity: 0, y: 50, delay: 0.7 });
        gsap.from(".text1", { duration: 1, opacity: 0, y: 50, delay: 1.2 });


    const typing = {
      strings: ['Welcome to My Blog Website...'],
      typeSpeed: 90,
    };

    const text = new Typed(".typed", typing);
    return () => {
      text.destroy();
    };
  }, []);

  return (
    <>
      <Header/>

     <div className="text text-center mt-20 font-extrabold text-4xl tracking-[3px] font-poppins sm:text-2xl md:text-3xl lg:text-4xl">
       <span className="typed">W</span>
      </div>


      <div className="text1 pl-[18%] mt-6 text-xl text-gray-500 w-full min-w-auto"> Our blog is dedicated to providing you with insights, tutorials, and the latest trends in web development <br />  and cutting-edge technologies that are revolutionizing the industry.</div>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-2 lg:mx-20 my-16">
        {main.map((mai) => (
          <div
            key={mai.h2}
            className="flex flex-col justify-between h-[630px] lg:w-[402px] w-[290px] rounded group hover:scale-105 transition-transform ease-out duration-700 shadow-lg shadow-zinc-400"
          >
            <div className="relative h-[360px] lg:w-[400px] w-[280px] flex-1">
              <Image
                src={mai.image}
                alt="AI for everyone"
                width={300}
                height={300}
                className="object-cover rounded-t lg:w-[400px] w-[280px] h-[360px]"
              />
            </div>

            <div className="flex flex-col justify-between px-2 py-4">
              <h2 className="text-2xl font-bold line-clamp-2 leading-tight mb-2 text-[#333333]">
                {mai.h4}
              </h2>
              <p className="mb-3 font-normal text-sm text-[#999999]">
                {mai.p}
              </p>
            
            <Link href={`/blog/${mai.id}`}>
              <button className="block py-1 text-start rounded text-[#7C4EE4] font-semibold mt-4">
                Read More
              </button>
            </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}