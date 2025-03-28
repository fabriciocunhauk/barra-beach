"use client";
import { Children, ReactNode, useState, FC } from "react";
import Container from "./Container";
import { classNames } from "../utils/appearance";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  children?: ReactNode;
}

interface CarouselButtonProps {
  onClick: () => void;
  disabled: boolean;
  icon: ReactNode;
}

const CarouselButton: FC<CarouselButtonProps> = ({
  onClick,
  icon,
  disabled,
}) => (
  <button
    className={classNames(
      "flex items-center justify-center border bg-white rounded-full min-w-10 h-10 bg-opacity-75 hover:bg-opacity-75 transition duration-150",
      disabled && "pointer-events-none opacity-10"
    )}
    disabled={disabled}
    onClick={onClick}
  >
    {icon}
  </button>
);

interface CarouselDotProps {
  active: boolean;
  onClick: () => void;
}

const CarouselDot: FC<CarouselDotProps> = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={classNames(
      "w-2 h-2 bg-gray-400 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 cursor-pointer",
      active && "bg-gray-300 outline-1 outline-offset-2 outline-gray-300"
    )}
  />
);

const Carousel: FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = Children.toArray(children);

  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, childrenArray.length - 1));
  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const handleDotClick = (index: number) => setCurrentIndex(index);

  return (
    <div className="relative w-full pb-20">
      <Container
        classes={{
          container: "flex items-center justify-center p-4 py-10",
        }}
      >
        <CarouselButton
          onClick={handlePrev}
          disabled={currentIndex === 0}
          icon={<IoIosArrowBack />}
        />

        <div className="overflow-hidden w-full lg:max-w-full">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {childrenArray.map((child, index) => (
              <div key={index} className="w-full flex-shrink-0">
                {child}
              </div>
            ))}
          </div>
        </div>

        <CarouselButton
          onClick={handleNext}
          disabled={currentIndex === childrenArray.length - 1}
          icon={<IoIosArrowForward />}
        />
      </Container>

      <div className="flex items-center gap-2 justify-center mt-10">
        {childrenArray.map((_, index) => (
          <CarouselDot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
