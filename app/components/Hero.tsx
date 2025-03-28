import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "./Container";
import Button from "./Button";
import { classNames } from "../utils/appearance";

type HeroProps = {
  title: string;
  subTitle: string;
  buttonLink: string;
  buttonTitle: string;
  image: StaticImageData;
  classes?: {
    wrapper?: string;
    container?: string;
  };
};

function Hero({
  title,
  subTitle,
  buttonLink,
  buttonTitle,
  image,
  classes,
}: HeroProps) {
  return (
    <section
      className={classNames(
        "relative flex items-center justify-center w-full bg-gray-primary overflow-hidden py-20",
        classes?.wrapper
      )}
    >
      {image && (
        <Image
          className="absolute inset-0 object-cover w-full h-full brightness-[0.65]"
          src={image.src}
          width={image.width}
          height={image.height}
          alt="Image"
          priority={true}
          loading="eager"
        />
      )}

      <Container
        classes={{
          container: classNames(
            "grid grid-cols-1 xl:grid-cols-2 place-items-center text-center xl:text-left text-white min-h-[212px] lg:h-[550px] z-10",
            classes?.container
          ),
        }}
      >
        <div className="flex flex-col items-center xl:items-start gap-4">
          <h2 className="text-4xl md:text-5xl font-bold drop-shadow-[0_1px_1px_#2E2E2E]">
            {title}
          </h2>
          <p className="text-lg drop-shadow-[0_1px_1px_#2E2E2E]">{subTitle}</p>
          {buttonLink && buttonTitle && (
            <Button link={buttonLink} classes={{ button: "mx-auto md:m-0" }}>
              {buttonTitle}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Hero;
