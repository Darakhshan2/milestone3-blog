import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" w-full   mt-12 divide-y-2 divide-gray-300 border-2 border-t-2 bg-slate-400">

      <div className="flex flex-col items-center py-12">
        <h2 className="text-[#7C4EE4] font-bold text-4xl ">Blogy.com</h2>
        <span className="space-x-7 py-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blogs</Link>
        </span>
        <span className="flex flex-row space-x-7 py-4 text-[#7C4EE4]">
          <p>
            <FaInstagram size={24} color="" />
          </p>
          <p>
            <FaFacebook size={24} color="" />
          </p>
          <Link
            href="https://www.linkedin.com/in/darakhshan-junaid-5713b422b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/Darakhshan2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </Link>
        </span>
      </div>
      <div className="text-center items-center py-7 text-[#150E06]">
        <p>Copyright Ideapeel Inc © 2024. All Right Reserved</p>
      </div>
    </footer>
  );
}