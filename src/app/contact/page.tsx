// pages/contact.js
"use client";

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6 ">
      <h1 className="text-3xl md:text-2xl font-bold text-white mb-8 mt-[-230px] lg:mt-0">Contact Me</h1>

      {/* Contact Form */}
      <form
        action={`mailto:nutellacookiesss@gmail.com`}
        method="post"
        encType="text/plain"
        className="lg:w-full lg:max-w-md  bg-white p-8 rounded-lg border-3 border-gray-300 "
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">Your Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none"
          required
        />

        <label className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-300 text-black font-bold py-3 rounded hover:bg-yellow-200 transition duration-200"
        >
          Send Message
        </button>
      </form>

     
      <div className="absolute left-[250px] mt-[440px] md:hidden sm:hidden lg:block lg:mr-[890px] lg:mt-[100px]">
        <div className="bg-teal-300 lg:h-[100px] lg:w-[100px] h-[80px] w-[80px] rounded-full absolute animate-pop"></div>
        <div className="bg-blue-400 lg:h-[30px] lg:w-[30px] h-[70px] w-[70px] rounded-full absolute top-[-50px] left-[-40px] animate-bubble-small"></div>
        <div className="bg-purple-400 lg:h-[50px] lg:w-[50px] h-[60px] w-[60px] rounded-full absolute top-[-70px] right-[-50px] animate-bubble-medium"></div>
        <div className="bg-pink-400 lg:h-[40px] lg:w-[40px] h-[50px] w-[50px] rounded-full absolute bottom-[-60px] left-[-60px] animate-bubble-small"></div>
        <div className="bg-green-500 lg:h-[20px] lg:w-[20px] h-[40px] w-[40px] rounded-full absolute bottom-[-80px] right-[-70px] animate-bubble-small"></div>
        <div className="bg-yellow-300 lg:h-[60px] lg:w-[60px] h-[30px] w-[30px] rounded-full absolute top-[-90px] left-[20px] animate-bubble-large"></div>
      </div>

      <div className="absolute hidden lg:block ml-[750px] mt-[10px]">
        <div className="bg-red-400 h-[100px] w-[100px] rounded-full absolute animate-pop"></div>
        <div className="bg-blue-300 h-[30px] w-[30px] rounded-full absolute top-[-40px] left-[-30px] animate-bubble-small"></div>
        <div className="bg-purple-500 h-[50px] w-[50px] rounded-full absolute top-[-80px] right-[-60px] animate-bubble-medium"></div>
        <div className="bg-orange-00 h-[40px] w-[40px] rounded-full absolute bottom-[-90px] left-[-50px] animate-bubble-small"></div>
        <div className="bg-green-300 h-[20px] w-[20px] rounded-full absolute bottom-[-50px] right-[-80px] animate-bubble-small"></div>
        <div className="bg-teal-500 h-[60px] w-[60px] rounded-full absolute top-[-30px] left-[30px] animate-bubble-large"></div>
      </div>

      <style jsx>{`
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
