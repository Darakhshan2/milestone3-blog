"use client";
import { useEffect } from "react";

import Image from "next/image";
import Header from "@/components/Header";
import gsap from "gsap";

export default function About() {
  useEffect(() => {
    gsap.from(".image", { duration: 1, opacity: 0, x: -100 });
    gsap.from(".text", { duration: 1, opacity: 0, y: 50, delay: 0.7 });
    gsap.from(".para", { duration: 1, opacity: 0, y: 50, delay: 1.2 });
    gsap.from(".mission", { duration: 1, opacity: 0, y: 50, delay: 2 });
    gsap.from(".team", { duration: 1, opacity: 0, y: 50, delay: 2 });


  }, []);
  return (
    <>
      <Header />
      <h1 className="text-center text-5xl" style={{fontFamily:"Dancing Script"}}>About Our Blog</h1>
      <div className="flex md:flex-row lg:flex-col mt-16 md:px-0 px-4 ">
        <div className="image pl-24">
          <Image
            src={"/about.jpg"}
            alt="main"
            width={1200}
            height={740}
            className=" ml-6 rounded-sm "
          />
        </div>
        <div className="text ml-[40px] lg:flex-row text-5xl h-auto md:mt-12 md:text-xl font-bold tracking-[2px] pl-5 pr-5 text-gray-400">
  About Our Website
  <div className="text md:w-auto font-bold  text-black mt-4 md:text-sm md:mt-1">
    "At TechnologyIs, we explore the vast and ever-evolving <br /> world
    of technologies that are shaping the future. <br />
    From artificial intelligence and machine learning to the Internet{" "}
    <br /> of Things (IoT), blockchain, and cloud computing, we cover a
    wide <br /> range of topics that are transforming industries and
    everyday life.
  </div>
</div>

   <div className="para p-24 md:p-6 md:w-auto tracking-[2px]  text-lg mt-5">
  Welcome to my Blog, your go-to source for cutting-edge insights
  into the world of Artificial Intelligence. Our mission is to demystify
  AI, explore its potential, and discuss its impact on various aspects of
  our lives and industries. <br /> Founded by a team of AI enthusiasts,
  researchers, and industry experts, we strive to bring you the most
  accurate, up-to-date, and thought-provoking content about AI and its
  related fields. <br /> Whether you're a seasoned AI professional, a curious
  student, or simply someone interested in the future of technology, our
  blog offers valuable insights, practical guides, and engaging
  discussions to expand your understanding of AI.
     </div>
      <div className="mission p-24 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg">
          To provide insightful, accurate, and engaging content about the latest advancements in AI and technology, and to foster a community of learners and professionals who are passionate about the future of technology.
        </p>
      </div>

      <div className="team p-24">
  <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
  <div className="flex flex-wrap justify-center md:justify-around">
    <div className="team-member text-center w-full sm:w-1/2 md:w-1/3 mb-8">
      <Image src="/third.jpg" alt="Team Member 1" width={200} height={200} className="rounded-full mx-auto" />
      <h3 className="text-2xl font-bold mt-4">John Doe</h3>
      <p className="text-lg">AI Researcher</p>
    </div>
    
    <div className="team-member text-center w-full sm:w-1/2 md:w-1/3 mb-8">
      <Image src="/second.jpg" alt="Team Member 2" width={200} height={200} className="rounded-full mx-auto" />
      <h3 className="text-2xl font-bold mt-4">Jane Smith</h3>
      <p className="text-lg">Tech Writer</p>
    </div>
    
    <div className="team-member text-center w-full sm:w-1/2 md:w-1/3 mb-8">
      <Image src="/first.jpg" alt="Team Member 3" width={200} height={200} className="rounded-full mx-auto" />
      <h3 className="text-2xl font-bold mt-4">Alice Johnson</h3>
      <p className="text-lg">Developer</p>
    </div>
          </div>
          </div>
        </div>
    </>
  );
}


