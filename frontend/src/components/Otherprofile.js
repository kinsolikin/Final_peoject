import { images } from "./images";
import { useState } from "react";
import Footer from "./Footer";

function Otherprofile() {
  return (
    <div className="text-center text-white bg-[#0F0F0F]">
      <header className="bg-[#0F0F0F] w-full">
        <img className="w-full h-[150px]" src={images.image52} alt="image52" />
      </header>
      <section>
      <div className="relative flex flex-col justify-center items-center min-h-auto bg-[#0F0F0F]">
          <div className="relative top-8 bg-[transparent] text-white w-full max-w-[600px] p-5 rounded-lg text-center">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full object-cover"
              src={images.image2}
              alt="image22"
            />
            <div className="text-5xl my-2 pt-32">Dominik Martin</div>
            <div className="flex justify-around items-center my-4 mx-2 sm:mx-8 md:mx-16 lg:mx-32">
              <div className="flex flex-row items-center">
                <img className="w-6 h-6" src={images.follow} alt="Followers" />
                <span className="block text-xl mb-1 ml-2">11k</span>
              </div>
              <div className="ml-6 mr-1 border-r border-white h-8 self-stretch "></div>
              <div className="flex flex-row items-center">
                <img className="w-6 h-6" src={images.heart} alt="Likes" />
                <span className="block text-xl mb-1 ml-2">59,99k</span>
              </div>
            </div>
            <div className="flex justify-around items-center my-4 mx-2 sm:mx-8 md:mx-16 lg:mx-32">
              <button className="flex items-center justify-center border border-white rounded-lg cursor-pointer text-white font-bold mr-2 bg-transparent w-24 py-2">
                <img className="w-5 h-5 mr-2" src={images.image0} alt="Home" />
              </button>
              <button className="border border-white rounded-lg cursor-pointer text-white font-bold mr-2 bg-transparent w-28 py-2">
                Chat
              </button>
              <button className="border border-white rounded-lg cursor-pointer text-white font-bold bg-[#7C01EE] w-24 py-2">
                Follow
              </button>
            </div>
            <div className="text-white hover:underline hover:text-sky-500 mb-5">
              <a href="sites.google.com/view/illustraxxx">
                sites.google.com/view/illustraxxx
              </a>
            </div>
            <div className="text-white justify-center">
              <p>Specialist Animator Design Marvel Design (Spiderment)</p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-10">
        <img
          className="w-full h-full object-cover object-center"
          src={images.image86}
          alt="Spiderman pose 1"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image85}
          alt="Spiderman pose 2"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image83}
          alt="Spiderman pose 3"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image84}
          alt="Spiderman pose 4"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image78}
          alt="Spiderman pose 5"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image77}
          alt="Spiderman pose 6"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image113}
          alt="Spiderman pose 7"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image114}
          alt="Spiderman pose 8"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image115}
          alt="Spiderman pose 9"
        />
      </section>
    </div>
  );
}

export default Otherprofile;
