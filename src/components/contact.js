import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Kontakt
        </h2>
        <p>          
          Gerne dürfen Sie sich bei mir melden:
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> mail@michaelwirth.de
        </p>        
        <p className="py-2">
          <span className="font-bold">🏠</span>Benzengasse 24, 71636 Ludwigsburg
        </p>        
      </div>
    </section>
  );
};

export default Contact;
