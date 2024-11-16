// components/AboutMe.js
'use client';
export default function AboutMe() {
    return (
      <div className=" relative bg-gray-800 flex flex-col  items-center justify-center min-h-screen p-6 overflow-hidden">
        
        <div className=" mt-0 lg:flex lg:items-center lg:gap-8 lg:max-w-3xl">
          {/* Skills Section for Large Screens */}
          <div className="hidden lg:flex flex-col items-start space-y-6 absolute left-[150px] border-2 p-10">
            <h2 className="text-white text-xl font-semibold">Skills</h2>

            {/* TypeScript */}
            <div className="w-32">
              <div className="text-white">TypeScript</div>
              <div className="w-full h-2 bg-gray-600 mt-2">
                <div className="h-2 bg-blue-500" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* HTML / CSS */}
            <div className="w-32">
              <div className="text-white">HTML / CSS</div>
              <div className="w-full h-2 bg-gray-600 mt-2">
                <div className="h-2 bg-yellow-500" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Next.js */}
            <div className="w-32">
              <div className="text-white">Next.js</div>
              <div className="w-full h-2 bg-gray-600 mt-2">
                <div className="h-2 bg-green-500" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="h-32 w-[2px] bg-white animate-grow-y lg:mt-0 mt-[150px] lg:ml-0 ml-[70px]"></div>

          {/* Profile Image */}
          <img 
            src="images/Mine.jpg"  
            alt="My profile" 
            className="w-60 h-70 rounded object-cover animate-slide-in lg:mt-0 mt-[-220px] lg:ml-0 ml-[100px]" 
          />

          {/* About Me Text */}
          <div className="text-center lg:text-left mt-6 lg:mt-0 lg:ml-6">
            <h1 className="text-white lg:text-3xl text-2xl font-bold tracking-wide animate-fade-in mb-4 font-sans">
              About Me
            </h1>
            <p className="text-white lg:text-base text-sm leading-relaxed font-sans">
              I'm a dedicated first-year Pre-Medical student at Sir Syed College with a growing passion for technology.
              Alongside my academic studies, I'm also enrolled in the Generative AI course, where I've developed skills in 
              TypeScript, HTML, and CSS. As a front-end developer, I'm actively enhancing my Next.js expertise to build intuitive, 
              user-friendly applications. I’m enthusiastic about the intersection of healthcare and technology and aim to integrate 
              my skills in innovative ways.
            </p>
          </div>
        </div>

        {/* Skills Section for Small Screens */}
        <div className="flex lg:hidden flex-col items-center space-y-4 mt-10 p-6 mr-[140px] lg:mr-0">
          <div className="text-center lg:text-left border-2 border-gray-700 rounded-lg p-6 bg-gray-700 w-full">
            <h2 className="text-white text-xl font-semibold mb-4">Skills</h2>

            {/* Skill Bars */}
            <div className="w-48 mx-auto lg:mx-0">
              <div className="text-white">TypeScript</div>
              <div className="w-full h-2 bg-gray-600 mt-2">
                <div className="h-2 bg-blue-500" style={{ width: '80%' }}></div>
              </div>

              <div className="text-white mt-4">HTML / CSS</div>
              <div className="w-full h-2 bg-gray-600 mt-2">
                <div className="h-2 bg-yellow-500" style={{ width: '90%' }}></div>
              </div>

              <div className="text-white mt-4">Next.js</div>
              <div className="w-full h-2 bg-gray-600 mt-2">
                <div className="h-2 bg-green-500" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bubbles Animation */}
        <div className="relative flex justify-center mt-[-100px] lg:mt-[-100px] mb-[90px] lg:mb-[200px] lg:ml-[900px] ml-[200px] lg:m-0">
          <div className="relative">
            <div className="bg-white h-[100px] w-[100px] rounded-full animate-pop absolute top-0"></div>
            <div className="bg-blue-400 h-[30px] w-[30px] rounded-full animate-bubble-small absolute top-[30px] -left-8"></div>
            <div className="bg-purple-400 h-[50px] w-[50px] rounded-full animate-bubble-medium absolute -top-10 right-[-40px]"></div>
            <div className="bg-pink-400 h-[40px] w-[40px] rounded-full animate-bubble-small absolute bottom-[-40px] -left-10"></div>
            <div className="bg-green-400 h-[20px] w-[20px] rounded-full animate-bubble-small absolute -bottom-12 right-[-30px]"></div>
            <div className="bg-yellow-300 h-[60px] w-[60px] rounded-full animate-bubble-large absolute top-[-70px] left-[10px]"></div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes bubble-small {
            0% { transform: translateY(0) scale(0.9); }
            50% { transform: translateY(-15px) scale(1.1); }
            100% { transform: translateY(0) scale(0.9); }
          }
          @keyframes bubble-medium {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.2); }
            100% { transform: translateY(0) scale(1); }
          }
          @keyframes bubble-large {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-23px) scale(1.2); }
            100% { transform: translateY(0) scale(1); }
          }
          .animate-pop { animation: pop 2s ease-in-out infinite; }
          .animate-bubble-small { animation: bubble-small 3s ease-in-out infinite; }
          .animate-bubble-medium { animation: bubble-medium 4s ease-in-out infinite; }
          .animate-bubble-large { animation: bubble-large 5s ease-in-out infinite; }
        `}</style>
      </div>
    );
}
