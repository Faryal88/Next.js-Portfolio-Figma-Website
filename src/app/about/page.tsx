"use client";
import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="text-stone-50 h-screen bg-[url('/images/pink.png')] bg-cover sm:bg-center md:bg-cover opacity-90 md:grid grid-row-2 space-y-2 p-4 place-content-center items-center text-center"
      >
        <div className="text-4xl md:text-6xl font-bold font-Merienda text-blue-800 p-8 md:pt-2 pb-2 text-center drop-shadow-lg hover:text-blue-400 transition duration-300 ease-in-out">
          About Me..
        </div>

        <div className="h-screen md:h-[400px] w-full md:w-[1000px] bg-black/20 md:border border-2 border-blue-800 rounded-xl leading-relaxed md:leading-10 p-8 text-lg md:text-xl font-lg font-sans md:tracking-wider sm:flex-wrap text-justify text-white-700">
          <p>
            I’m a passionate Front-End Web Developer with expertise in crafting visually appealing, responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, and modern frameworks like Next.js and React, with a deep focus on Tailwind CSS for rapid, customizable UI design. My goal is to turn creative ideas into functional, high-performing websites that deliver seamless user experiences across devices. With a strong eye for design and attention to detail, I prioritize clean, maintainable code and optimized performance. Whether building dynamic single-page applications or robust websites, I aim to bridge the gap between design and development. Let’s create something amazing together!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
