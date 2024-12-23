
// pages/projects.tsx
import React from 'react';

const projects = [
 {
    title: 'Project 1: Coffee.CO',
    image: '/images/coffee.png', 
    description: 'A unique coffee recipe website with animations and responsiveness using html and css and javascript.',
    link: 'https://syeda-coffee-website.vercel.app/',
  },
   
  {
    title: 'Project 2: Biryani Website',
    image: '/images/new.jpg', 
    description: 'A simple biryani recipe website with animations using html and css.',
    link: 'https://github.com/Syedaashnaghazanfar/syeda_biryani',
  },
  {
    title: 'Project 3: Resume Builder',
    image: '/images/resume.png',
    description: 'Dynamic resume builder with customizable sections.',
    link: 'https://syeda-static-resume.vercel.app/index2.html',
  },
  {
    title: 'Project 4: SHOP.CO',
    image: '/images/shop.png',
    description: 'A responsive next.js website build using figma template.',
    link: 'https://syeda-shop-co.vercel.app/',
  },
  {
    title: 'Project 5: Wishlist Cute App',
    image: '/images/wishlist.png',
    description: 'A cute wishlist app with the functionality of adding and removing wishes.',
    link: 'https://cute-wishlist-application.vercel.app/',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-10 ">
      <h1 className="lg:text-7xl text-3xl font-bold text-white mb-10 ml-10px">My Projects</h1>
      
      <div className="lg:w-full lg:max-w-4xl w-[400px] ">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6 hover:bg-gray-700 transition-all duration-300 border-2"
          >
            <div className="flex items-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-1/3 h-48 object-cover hover:opacity-75 transition-opacity duration-300"
              />
              <div className="p-6 w-2/3">
                <h2 className="lg:text-2xl font-bold text-yellow-400 mb-2">{project.title}</h2>
                <p className="text-gray-300 ">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
       <button className='bg-yellow-300 text-black border-2 lg:p-5  p-3 rounded lg:ml-[400px] ml-[150px] hover:bg-yellow-200 hover:scale-105 transition-transform duration-200'>
         <a href="https://github.com/Syedaashnaghazanfar/" target='_blank'>More Projects</a>
      </button>
         </div>
    </div>
  );
}
