import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function ImageParallaxDiv({
  children,
  image,
  speed,
  className,
  backgroundStyle,
  expanded=true,
  scale=1
}) {
  return (
    <ParallaxBanner className={`aspect-[0.70/1] md:aspect-[2.5/1] ${className}`}>
      <ParallaxBannerLayer
        className={backgroundStyle}
        image={`"${image}"`}
        speed={speed}
        expanded={expanded}
        scale={[1,scale]}
      />
      <ParallaxBannerLayer speed={-speed}>{children}</ParallaxBannerLayer>
    </ParallaxBanner>
  );
}

export default ImageParallaxDiv;
