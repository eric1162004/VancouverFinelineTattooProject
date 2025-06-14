import React, { useState, useEffect, useMemo } from "react";
import ImgsViewer from "react-images-viewer";
import LazyLoad from "react-lazy-load";
import InstagramIcon from "../components/InstagramIcon";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { useViewer } from "../hooks/useViewer";

export default function Tattoo_revamp({ data }) {
  const collections = ["revamp"];

  const viewers = [
    useViewer(),
    useViewer(),
    useViewer(),
    useViewer(),
    useViewer(),
  ];

  const [isOpen, setIsOpen, currImg, setCurrImg, gotoPrevImg, gotoNextImg] = [
    0, 1, 2, 3, 4, 5,
  ];

  const [images, setImages] = useState();
  const [resizedImages, setResizedImages] = useState();

  useEffect(() => {
    let images = collections.map((collection) => {
      let imageLinks = Array(data[collection].count)
        .fill(0)
        .map((_, i) => ({
          src: `img/gallery/${collection}/${i + 1}.jpg`,
        }));
      return imageLinks;
    });

    setImages(images);

    let resizedImages = collections.map((collection) => {
      let imageLinks = Array(data[collection].count)
        .fill(0)
        .map((_, i) => ({
          src: `img/gallery_resized/${collection}/${i + 1}.jpg`,
        }));
      return imageLinks;
    });

    setResizedImages(resizedImages);
  }, []);

  const onImgClick = (imageIndex, collectionIndex) => {
    viewers[collectionIndex][setIsOpen](!viewers[collectionIndex][isOpen]);
    viewers[collectionIndex][setCurrImg](imageIndex);
  };

  return (
    <div className="container mx-auto pt-16">
      {resizedImages &&
        resizedImages.map((collection, collectionIndex) => {
          return (
            <div className="pt-5 mx-2" key={collectionIndex}>
                <h1 className="title text-center self-center skew-x-1 my-5">
                  TATTOO REVAMP
                </h1>
                {/* <AnimationOnScroll
                  animateOnce={true}
                  duration={1}
                  animateIn="animate__fadeInDown"
                > */}
                  <h1 className="subtitle text-center self-center skew-x-1">
                    Revamp Your Tattoo with Skin Tone Ink!
                  </h1>
                  <p className="paragraph text-center px-4">
                    Is your old tattoo looking faded or messy? Our tattoo revamp
                    service is here to help. We use specialized skin tone ink to
                    discreetly cover blown-out or bold lines, restoring your
                    tattoo to its former glory.
                  </p>
                  <h1 className="subtitle text-center self-center skew-x-1">
                    What We Offer:
                  </h1>
                  <p className="paragraph text-center px-4">
                    Clean & Readable Results: Our skilled artists focus on
                    making your tattoo clean and easily readable once again.
                  </p>
                  <h1 className="subtitle text-center self-center skew-x-1">
                    Excellent Retention:
                  </h1>
                  <p className="paragraph text-center px-4">
                    We ensure your revamped tattoo stays vibrant over time with
                    expert touch-ups and guidance on proper care.
                  </p>
                  <h1 className="subtitle text-center self-center skew-x-1">
                    Case-By-Case Assessment:
                  </h1>
                  <p className="paragraph text-center px-4">
                    We carefully evaluate each tattoo to determine if it’s
                    suitable for a revamp. While we can work wonders in most
                    cases, some tattoos may be too dark or intricate for this
                    process. <br></br>
                    Say goodbye to tattoo imperfections and hello to a
                    revitalized design. Contact us today to discuss your tattoo
                    revamp!
                  </p>
                {/* </AnimationOnScroll> */}
              <div className="grid-cols-3 md:grid-cols-4 m-2 mt-6 p-2 space-y-1 grid gap-7">
                {collection.map((image, imageIndex) => (
                  <div
                    className="w-full rounded self-center"
                    key={imageIndex}
                    onClick={() => onImgClick(imageIndex, collectionIndex)}
                  >
                    <LazyLoad offset={5}>
                      <img
                        className="block object-cover object-center w-full h-full rounded-lg hover:brightness-90 hover:contrast-125 "
                        src={image.src}
                        alt={`Vancouver Fineline Tattoos - ${collections[collectionIndex]} image`}
                      />
                    </LazyLoad>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      {/* For more see Ig */}
      <div className="flex justify-center p-10">
        <p className="title">See more...</p>
        <InstagramIcon className="w-12 inline-block animate__animated animate__pulse animate__slower animate__infinite" />
      </div>

      {/* Image Viewer Popup */}
      {images &&
        images.map((collection, collectionIndex) => (
          <div key={collectionIndex}>
            <ImgsViewer
              imgs={collection}
              isOpen={viewers[collectionIndex][isOpen]}
              currImg={viewers[collectionIndex][currImg]}
              onClickPrev={() => viewers[collectionIndex][gotoPrevImg]()}
              onClickNext={() => viewers[collectionIndex][gotoNextImg]()}
              onClose={() => viewers[collectionIndex][setIsOpen]()}
              backdropCloseable={true}
            />
          </div>
        ))}
    </div>
  );
}

export async function getServerSideProps() {
  const data = {
    revamp: {
      description: "",
      count: 19,
    },
  };

  return {
    props: { data },
  };
}
