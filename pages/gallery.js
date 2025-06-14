import React, { useState, useEffect, useMemo } from "react";
import ImgsViewer from "react-images-viewer";
import LazyLoad from "react-lazy-load";
import { AnimationOnScroll } from "react-animation-on-scroll";
import InstagramIcon from "./../components/InstagramIcon";

import { useViewer } from "../hooks/useViewer";

export default function Gallery({ data }) {
  const collections = ["feature", "script", "color", "geometric"];

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
    let images = collections.map(collection => {
      let imageLinks = Array(data[collection].count)
        .fill(0)
        .map((_, i) => ({
          src: `img/gallery/${collection}/${i + 1}.jpg`,
        }));
      return imageLinks;
    });

    setImages(images);

    let resizedImages = collections.map(collection => {
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
            <div className="pt-5" key={collectionIndex}>
              <h1 className="title text-center self-center skew-x-1 my-5">
                {collections[collectionIndex]}
              </h1>
              <AnimationOnScroll
                animateOnce={true}
                duration={1}
                animateIn="animate__fadeInDown"
              >
                <p className="paragraph text-center px-4">
                  {data[collections[collectionIndex]].description}
                </p>
              </AnimationOnScroll>

              <div className="grid-cols-3 md:grid-cols-5 m-2 p-2 space-y-1 grid gap-1">
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
                        alt={`Vancouver fineline tattoo - ${collections[collectionIndex]} image`}
                      />
                    </LazyLoad>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      {/* For more see Ig */}
      <div className="flex justify-center p-10 ">
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
    feature: {
      description: "These are one of my favorite tattoos!",
      count: 10,
    },
    script: {
      description:
        "Script being done in fine-line tattoo is very clean and precise! I can tattoo in any language and any choice of font! From specific handwriting, copy of signature, Roman numerals, custom Chinese calligraphy, to wide-range of font choices e.g., calligraphy, typewriter, curly etc.",
      count: 8,
    },
    color: {
      description:
        "Love color tattoos! Adding color to tattoos can change the whole effect, brighten up the picture, and make the tattoo design come to life! There are different styles of color tattoo, and fine-line tattoo works very well with partially saturated coloring, lining, soft shading, and watercolor etc.",
      count: 9,
    },
    geometric: {
      description:
        "Geometric tattoos symbolize balance, symmetry, stability, intelligence, mystery etc. It combines and connects the use of lines, circles, squares, triangles, and different shapes and patterns to form beautiful and intricate designs. As a perfectionist, I enjoy tattooing smooth lines and perfect shapes in geometric designs.",
      count: 10,
    }
  };

  return {
    props: { data },
  };
}
