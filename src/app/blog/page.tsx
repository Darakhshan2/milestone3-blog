import React from 'react'
import Image from "next/image"
import Header from "../../components/Header"
import Link from 'next/link'
import myBlogs from '../../../data/allblogs'
export default function Blog() {
  return (
    <>

      <Header/>
      <div className='text-center m-12 text-3xl font-extrabold tracking-[2px]'  style={{fontFamily:"Dancing Script"}}>Our Latest Blog</div>
      <p className="text-[#666666] text-center w-auto text-2xl">
          our blogs are written from very research  and well known
          writers writers so that we can provide you
          <br /> the best blogs and articles articles for you to read them all
          along
        </p>
 
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-2 lg:mx-20 my-16">
        {myBlogs.map((myBlog) => (
          <div
            key={myBlog.id}
            className="flex flex-col justify-between h-[630px] lg:w-[402px] w-[290px] rounded group hover:scale-105 transition-transform ease-out duration-700 shadow-lg shadow-zinc-400"
          >
            <div className="relative h-[360px] lg:w-[400px] w-[280px] flex-1">
              <Image
                src={myBlog.image}
                alt="AI for everyone"
                width={300}
                height={300}
                className="object-cover rounded-t lg:w-[400px] w-[280px] h-[360px]"
              />
            </div>

            <div className="flex flex-col justify-between px-2 py-4">
              <h2 className="text-2xl font-bold line-clamp-2 leading-tight mb-2 text-[#333333]">
                {myBlog.title}
              </h2>
              <p className="mb-3 font-normal text-sm text-[#999999]">
                {myBlog.published}
              </p>
              <p className="text-[#666666] line-clamp-3">{myBlog.summary}</p>
            
            <Link href={`/blog/${myBlog.id}`}>
              <button className="block py-1 text-start rounded text-[#7C4EE4] font-semibold mt-4">
                Read More
              </button>
            </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
