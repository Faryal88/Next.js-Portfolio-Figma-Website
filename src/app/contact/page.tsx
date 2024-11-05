import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="h-max bg-[url('/images/pink.png')] bg-cover bg-opacity-80">
      <section id="contact" className="text-stone-50 text-center">
        <div className="flex justify-center pt-10 md:pb-10">
          <div className="font-Merienda text-4xl md:text-5xl font-bold text-white hover:text-blue-800 md:pb-1 transition duration-300">
            CONTACT ME
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-80 md:w-[80%] md:h-[80%] border-blue-800">
          <div className="m-6 space-y-6 text-stone-50 text-md md:text-xl font-Merienda">
            <div>
              <label htmlFor="name" className="block p-1 text-blue-100">
                Enter Your Name:
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 rounded-md bg-black/50 border-2 border-blue-800 text-blue-200 text-center focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block p-1 text-blue-100">
                Enter Your Email:
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 rounded-md bg-black/50 border-2 border-blue-800 text-blue-200 text-center focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block p-1 text-blue-100">
                Write Message:
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 rounded-md bg-black/50 border-2 border-blue-800 text-blue-200 text-center focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
              />
            </div>
            
            <button className="text-white border-2 border-black p-2 bg-blue-700 hover:bg-blue-800 font-semibold rounded-xl w-full transition-all duration-300 ease-in-out">
              Submit
            </button>
          </div>

          <div>
            <div className="flex justify-end pb-10 pt-5">
              <Image 
                src="/me1.jpg" 
                alt="me"
                height={300}
                width={400}
                className="rounded-full border-4 border-white shadow-lg shadow-blue-800 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
