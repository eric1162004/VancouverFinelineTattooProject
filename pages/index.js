import React from "react";
import Image from "next/image";

import VideoBackgroundDiv from "../components/VideoBackgroundDiv";
import ImageParallaxDiv from "../components/ImageParallaxDiv ";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Home() {
  return (
    <div className="">
      {/* background with logo */}
      <ImageParallaxDiv
        className="aspect-[0.6/1] md:aspect-[2.3/1]"
        backgroundStyle=""
        image={"img/background_with_logo_2.webp"}
        speed={-20}
        scale={1.1}
      >
        <div className="flex flex-col h-full items-center justify-center">
          <AnimationOnScroll duration={1} animateIn="animate__fadeInUp">
            <div className="flex flex-col h-full items-center justify-center">
              <Image
                src="/img/miki_logo_black.png"
                alt="Vancouver fineline tattoo"
                width={400}
                height={200}
              />
              <h1 className="title -mt-4 text-center text-sm md:text-xl">
                VANCOUVER FINELINE TATTOO
              </h1>
              <h1 className="title p-0 text-center text-sm md:text-xl">
                Micro-Realism & Geometry
              </h1>
            </div>
          </AnimationOnScroll>
        </div>
      </ImageParallaxDiv>

      {/* Fine Line Tatoo */}
      <ImageParallaxDiv
        backgroundStyle="brightness-90"
        image={"img/finelineTattoo.webp"}
        speed={-20}
      >
        <div className="text-primary flex flex-col h-full justify-center lg:w-1/2 p-5 lg:p-20 backdrop-blur-sm backdrop-brightness-50">
          <h1 className="title ">Fine-line Tattoo</h1>
          <p className="paragraph text-base md:text-lg">
            Fineline tattoo is subtle, delicate, and thin-line tattoo. Unlike
            traditional tattoos, which create thicker and bolder design,
            fine-line tattoos are created by just a single tattoo needle or
            combinations of small needles. This style of tattoo allows artist to
            create soft, tiny and minimalistic tattoos with intricately detailed
            design by using ultra-thin line incorporating with color, shading,
            and texture. It’s a growing trend in past decade to make delicate
            hidden tattoos, with super skinny lines and minimalist designs.
          </p>
        </div>
      </ImageParallaxDiv>

      {/* My Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <AnimationOnScroll duration={0.5} animateIn="animate__fadeIn">
          <img
            className="contrast-125"
            src="img/myStory.webp"
            alt="my story image"
          />
        </AnimationOnScroll>

        <div className=" text-primary ">
          <ImageParallaxDiv
            className="h-full "
            backgroundStyle=""
            image={"img/myStory2.webp"}
            speed={-20}
          >
            <div className="h-full flex flex-col items-center justify-center p-5 lg:p-20 backdrop-blur-md ">
              <h1 className="title">My Story</h1>
              <p className="paragraph text-base md:text-lg">
                I am Miki, a tattoo artist in Vancouver BC. I was born and
                raised in Hong Kong, and I moved to Vancouver since 2005. From
                an early age, I have always been passionate about art, drawing
                and designing. While working in the studio as brows artist, I
                got a chance to learning tattoo under mentorship of Nancy Liang.
                With the experience working in detail with machine, I was
                fascinated and extremely interested in the fine-line tattoo
                style, which create incredibly detailed minimalistic tattoo.
                Continuing advancing in past 3 years, I found my passion in
                micro-realistic style and love working on small dainty tattoo
                with incredible details and with color as highlight brightening
                up the piece. I also like to play with geometric design to
                create perfect line and shape on body.
              </p>
            </div>
          </ImageParallaxDiv>
        </div>
      </div>

      {/* Video background */}
      <VideoBackgroundDiv video="video/charge.mp4">
        <div className="flex flex-col h-full justify-center backdrop-blur-xs text-primary p-5 md:p-20">
          <div className="flex flex-col md:w-1/2 text-center p-5 gap-3 ">
            <h1 className="title ">Tattoo rate</h1>
            <AnimationOnScroll
              animateIn="animate__bounceIn"
              animateOut="animate__fadeOut"
            >
              <p className="text-4xl md:text-5xl">Charge by piece</p>
            </AnimationOnScroll>
            <p className="text-sm md:text-lg">
              Accept black & grey, white and color tattoo request.{" "}
            </p>
            <p className="text-sm md:text-lg">
              Accept booking around 2-8 weeks in advance.{" "}
            </p>
          </div>
        </div>
      </VideoBackgroundDiv>

      {/* Contact */}
      <div className="grid grid-cols-1 md:grid-cols-1 bg-black px-5 py-10 h-1/3 md:gap-40">
        <div className="text-center text-sm md:text-lg text-primary-light">
          <h1 className="title text-2xl my-0 tracking-wider">Contact us</h1>
          <p>Vancouver, BC</p>
          <p>(By appointment only)</p>
          <p>E-mail: miki.s.tattooart@gmail.com</p>
          <p>
            <a
              href="https://www.instagram.com/miki.s_tattoo"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <img
                className="inline"
                src="img/ig_icon.png"
                width={20}
                alt="instagram icon"
              />{" "}
              miki.s_tattoo
            </a>
          </p>
          <button className="btn btn-accent btn-outline border-2 m-3 my-5 ">
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
  );
}
