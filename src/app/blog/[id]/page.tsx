
"use client";

import Image from "next/image";
import myBlogs from "../../../../data/allblogs";
const SingleBlogPage = ({ params }: { params: { id: string } }) => {
 
  const blog = myBlogs.find((b) => b.id === params.id); 

  if (!blog) {
    return <p>Product not found!</p>;
  }

    return (
        <article className="pt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8 justify-center bg-gray-100">
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-center text-[#333333]">
          {blog.title}
        </h1>
  
        <div className="flex justify-center my-6">
          <Image
            src={blog.image}
            width={800}
            height={800}
            alt="AI for everyone"
            className="rounded w-full h-auto md:w-[800px] md:h-[500px] lg:w-[1232px] lg:h-[680px] object-contain"
          />
        </div>
  
        <p className="font-semibold text-3xl text-[#333333]">
          Published:
          <span
            className="font-normal text-[#333333]
        "
          >
            {blog.published}
          </span>
        </p>
  
        <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
          <Image
            src={blog.imageauthor}
            width={200}
            height={200}
            alt="author"
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
          <div className="flex flex-col gap-1 pt-4 ">
            <h3 className="text-xl font-semibold text-[#333333]">
              Author:
              <span className="text-xl font-medium">{blog.author}</span>
            </h3>
            <p className="italic text-xs xs:text-sm sm:text-base text-[#333333]">
              {blog.about}
            </p>
          </div>
        </section>
  
            
        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-semibold text-[#333333] mb-5">
            Summary:
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-[#333333]">
            {blog.summary}
          </p>
        </section>
        <section className="text-lg p-12 leading-normal text-[#333333]">
          {blog.content}
        </section>
  

       
            </article>
    );
};

export default SingleBlogPage;
