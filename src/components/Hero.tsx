import React from "react";

interface HeroProps {
  vividLogo: string;
  hero: string;
  heroMobile: string;
  downArrow: string;
  scrollStart: () => void;
}

const Hero = ({
  vividLogo,
  hero,
  heroMobile,
  downArrow,
  scrollStart,
}: HeroProps) => {
  return (
    <>
      <div className="bg-vivid-black z-[20] relative">
        <a
          href="https://www.vividsydney.com/"
          target="_blank"
          className="cursor-pointer"
        >
          <img
            src={vividLogo}
            alt="vivid logo"
            className="absolute top-28 -translate-x-1/2 left-1/2 z-[100] max-w-[108px] hover:scale-110 transition-all ease-in"
          />
        </a>
        {/* hero image desktop */}
        <img
          src={hero}
          alt="hero image"
          className="sm:absolute sm:block w-full h-full object-cover object-venter hidden"
        />
        {/* hero image mobile */}
        <img
          src={heroMobile}
          alt="hero image mobile"
          className="sm:hidden absolute w-full sm:h-auto h-[700px] object-cover object-bottom"
        />
        <div className="flex flex-col items-center justify-between sm:h-screen h-[700px] z-[30] relative pt-[150px] pb-40">
          <div>
            <h1 className="text-clampHeadingMain  text-white text-center drop-shadow-3xl uppercase rift-bold  pb-0 leading-tight ">
              Beyond the lights
            </h1>
            <p className="text-white text-center rift-bold uppercase font-bold text-clampHeadingSub leading-tight drop-shadow-3xl">
              Your ultimate guide to Vivid Sydney 2024
            </p>
          </div>
          <button
            id="scroll-start"
            data-section="ideas"
            className="scroll hidden sm:flex flex-col items-center justify-center mt-[150px] border-2 border-white w-[107px] h-auto p-10 lg:h-[107px] lg:w-[107px] rounded-full source-font text-white uppercase group"
          >
            scroll
            <img
              src={downArrow}
              alt="down arrow"
              className="mt-2 group-hover:animate-bounce"
            />
          </button>
        </div>
        <p className="absolute left-10 bottom-20 sm:bottom-0 sm:max-w-[440px] text-white text-clampHeading7 px-10">
          Photo taken of 2023 Lightscape installation/s. Please note, artists
          differ each year and this may not be representative of 2024 displays.
          Image credit: Destination NSW
        </p>
      </div>
    </>
  );
};

export default Hero;
