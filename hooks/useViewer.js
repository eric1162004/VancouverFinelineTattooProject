import React, { useState } from "react";

export function useViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const gotoPrevImg = () => {
    setCurrImg(currImg - 1);
  };
  const gotoNextImg = () => {
    setCurrImg(currImg + 1);
  };

  return [isOpen, setIsOpen, currImg, setCurrImg, gotoPrevImg, gotoNextImg];
}
