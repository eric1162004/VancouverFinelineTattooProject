import React from "react";

function VideoBackgroundDiv({ children, video, height=80, className = "" }) {
  return (
    <div style={{height:`${height}vh`}} className={"relative z-0 object-cover w-full " + className}>
      <video
        className="absolute object-cover w-full h-full z-0"
        src={video}
        playsInline
        autoPlay
        muted
        loop
      ></video>

      <div className="absolute w-full h-full overflow-auto scrollbar-hide">{children}</div>
    </div>
  );
}

export default VideoBackgroundDiv;
