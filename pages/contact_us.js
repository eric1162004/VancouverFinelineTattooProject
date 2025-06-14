import React from "react";
import Map from "../components/Map";

export default function Contact_us() {
  return (
    <div>
      {/* Contact and Map */}
      <div className="grid grid-cols-1 justify-center items-center p-5 w-full h-full top-10 md:top-0 z-10 absolute text-base overflow-scroll scrollbar-hide  text-primary">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center text-primary">
          <div className="flex flex-col justify-center text-center backdrop-brightness-50 p-5 py-10 md:p-5 md:w-[50vh] md:h-[50vh] mb-2 md:mb-0 ">
            <h1 className="title text-2xl my-0 tracking-wider mb-2">
              Contact us
            </h1>
            <p>Guest Artist</p>
            <p>based in</p>
            <p>Vancouver, BC</p>
            <p>(By appointment only)</p>
            {/* <a
              href="https://www.google.com/search?q=326+W+5th+Ave"
              target="_blank"
              rel="noreferrer"
            >
              <p>326 W 5th Ave, Vancouver BC </p>
              <p>Studio #12 @ The Beaumont</p>
            </a> */}
            <p>E-mail: miki.s.tattooart@gmail.com</p>
            <a
              href="https://www.instagram.com/miki.s_tattoo/"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                Instagram
                <img
                  className="inline"
                  src="img/ig_icon.png"
                  width={20}
                  alt="instagram icon"
                /> miki.s_tattoo
              </p>
            </a>
            <button className="btn border-2 border-primary m-2 text-primary bg-transparent mt-4 z-50">
              <a
                href="https://form.jotform.com/Sheir/tattoo-request-form"
                target="_blank"
                rel="noreferrer"
              >
                Tattoo Request Form
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* Background */}
      <div className="blur-sm absolute w-full h-full">
          <img
            className="w-full h-full object-left object-cover"
            src="img/contact_us.jpg"
            alt="Fine line Tattoo Studio image"
          />
      </div>
    </div>
  );
}
