import React from "react";
import HeroImg from "../assets/hero-img.jpeg";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineAudit,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hallo, <br />Ich bin <span className="text-accent">M</span>ichael, <br />
            Software-Entwickler            
          </h1>

          <p className="py-5">
            Frontend, Backend - maßgeschneidert
          </p>

          <div className="flex py-5 ">
            <a
              href="https://twitter.com/shufflecode"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>           
            <a
              href="https://github.com/shufflecode/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/michael-wirth-05499a131"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
          </div>

          {/* <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a> */}
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto rounded-3xl " 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
