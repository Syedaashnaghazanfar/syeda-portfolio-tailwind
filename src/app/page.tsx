'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-gray-800 px-4 lg:px-0">
      <main className="flex flex-col lg:flex-row items-center ml-0 mt-[250px] justify-center text-center w-full lg:justify-between">
        
        {/* Intro section */}
        <div className="header-text mb-8 lg:ml-[80px] lg:mt-[-400px]">
          <p className="intro-text text-white text-xl lg:text-2xl">Hi, I'm</p>
          <h1 className="name-text text-3xl lg:text-6xl font-bold text-yellow-300 animate-slide-left">
            Ashna Ghazanfar
          </h1>
          <p className="profession-text text-lg lg:text-3xl text-blue-300 mt-2">
            A Front-end Developer
          </p>
          <h2 className="text-base lg:text-2xl text-white mt-4">
            Hi, I'm Ashna, 17-year-old girl passionate about <br />
            web development and how I can utilize these skills in my medical career.
          </h2>
        </div>

        {/* Resume button */}
        <div className="mt-4 lg:absolute lg:ml-[390px] lg:mt-[-80px]">
          <Link legacyBehavior href="https://syeda-static-resume.vercel.app/">
            <a className="bg-blue-400 rounded border-white border-2 text-white py-1.5 px-2 lg:p-4 hover:bg-gray-200 transition" target="_blank">
              My Resume
            </a>
          </Link>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex space-x-4 lg:space-x-6 mt-6 lg:absolute lg:ml-[350px] lg:mt-[60px]">
          <div className="relative group">
            <Link href="https://www.linkedin.com/in/ashna-ghazanfar-b268522b4/" target="_blank">
              <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 lg:w-12 lg:h-12 hover:bg-blue-500 transition">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-800" />
              </div>
            </Link>
          </div>
          <div className="relative group">
            <Link href="https://www.instagram.com/s_ashnaali/" target="_blank">
              <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 lg:w-12 lg:h-12 hover:bg-pink-400 transition">
                <FontAwesomeIcon icon={faInstagram} className="text-gray-800" />
              </div>
            </Link>
          </div>
          <div className="relative group">
            <Link href="https://github.com/Syedaashnaghazanfar" target="_blank">
              <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 lg:w-12 lg:h-12 hover:bg-orange-300 transition">
                <FontAwesomeIcon icon={faGithub} className="text-gray-800" />
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Profile Image */}
      <img
        src="images/mine2.jpg"
        alt="Profile"
        className=" absolute rounded w-[200px] h-[250px] lg:rounded-full lg:w-[400px] lg:h-[400px]  object-cover border-4 border-gray-700 animate-float lg:absolute lg:ml-[900px] mt-[-390px]  lg:mt-0 "
      />

      {/* Bubbles around the image */}
      <div className="hidden lg:block lg:absolute lg:ml-[400px] lg:mt-[100px]">
        <div className="bg-white h-[100px] w-[100px] rounded-full absolute animate-pop"></div>
        <div className="bg-blue-400 h-[30px] w-[30px] rounded-full absolute top-[-50px] left-[-40px] animate-bubble-small"></div>
        <div className="bg-purple-400 h-[50px] w-[50px] rounded-full absolute top-[-70px] right-[-50px] animate-bubble-medium"></div>
        <div className="bg-pink-400 h-[40px] w-[40px] rounded-full absolute bottom-[-60px] left-[-60px] animate-bubble-small"></div>
        <div className="bg-green-400 h-[20px] w-[20px] rounded-full absolute bottom-[-80px] right-[-70px] animate-bubble-small"></div>
        <div className="bg-yellow-300 h-[60px] w-[60px] rounded-full absolute top-[-90px] left-[20px] animate-bubble-large"></div>
      </div>

      {/* More bubbles for right side */}
      <div className="hidden lg:block lg:absolute lg:ml-[1300px] lg:mb-[300px]">
        <div className="bg-red-400 h-[100px] w-[100px] rounded-full absolute animate-pop"></div>
        <div className="bg-blue-500 h-[30px] w-[30px] rounded-full absolute top-[-40px] left-[-30px] animate-bubble-small"></div>
        <div className="bg-purple-500 h-[50px] w-[50px] rounded-full absolute top-[-80px] right-[-60px] animate-bubble-medium"></div>
        <div className="bg-orange-400 h-[40px] w-[40px] rounded-full absolute bottom-[-90px] left-[-50px] animate-bubble-small"></div>
        <div className="bg-green-300 h-[20px] w-[20px] rounded-full absolute bottom-[-50px] right-[-80px] animate-bubble-small"></div>
        <div className="bg-teal-500 h-[60px] w-[60px] rounded-full absolute top-[-30px] left-[30px] animate-bubble-large"></div>
      </div>

        {/* Animations */}
        <style jsx>{`
        @keyframes slide-left {
          from {
            transform: translateX(-50%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes pop {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes bubble-small {
          0% {
            transform: translateY(0) scale(0.9);
          }
          50% {
            transform: translateY(-15px) scale(1.1);
          }
          100% {
            transform: translateY(0) scale(0.9);
          }
        }
        @keyframes bubble-medium {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.2);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        @keyframes bubble-large {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-23px) scale(1.2);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-left {
          animation: slide-left 1s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pop {
          animation: pop 2s ease-in-out infinite;
        }
        .animate-bubble-small {
          animation: bubble-small 3s ease-in-out infinite;
        }
        .animate-bubble-medium {
          animation: bubble-medium 4s ease-in-out infinite;
        }
        .animate-bubble-large {
          animation: bubble-large 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
