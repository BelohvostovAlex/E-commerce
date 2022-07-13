import React, { useState } from "react";

import { Slider } from "./Slider";

export const SliderContainer: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return <Slider handleClick={handleClick} slideIndex={slideIndex} />;
};
