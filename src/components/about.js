import React from "react";
import AboutImg from "../assets/about-img.jpg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Über mich
          </h2>

          <p className="pb-5">
           Hi, mein Name ist Michael!
           
           Ich bin Softwareentwickler mit Fokus auf Microsoft .Net Technologie. Kann aber auch mit den hippen JS Frameworks umgehen.
          </p>
          <p className="pb-5">
            Im (Web) Frontend verwende ich Angular / React oder .Net Blazor und nutze dabei gerne fertige Designs von "Design Profis".
            Usability und die Grundregeln der Nutzerinteraktion sind mir bei der Entwicklung von Frontends wichtig.
          </p>
          
          <p className="pb-5">
           Auf dem Desktop bin ich komplett in der .NET Welt zu Hause und kann Anwendungen in WPF oder der neuen WINUI3 Technologie umsetzen.
          </p>
          <p>Im Backend verwende ich .NET REST Apis + MongoDB oder SQL basierende Systeme.</p>
          <br></br>
          <p>            
            In meiner Freizet versuche ich gerade neben der Kindererziehung das Gitarrespielen zu lernen 😉, 
            Administriere einen Shared Mailserver für den erweiterten Familienkreis auf LINUX - basis  und kümmere mich um meine Heimautomatisierung
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            width={450}
            className="lgw-[80%] md:ml-auto rounded-3xl "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
