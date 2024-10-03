"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import style from "./parallax.module.scss";
import { useMediaQuery } from "react-responsive";

function Parallax({
  className,
  imageURL,
  alt,
  text,
  buttonText,
  buttonLink,
}: {
  imageURL: string;
  alt: string;
  className?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  const paralRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paralRef,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const desktop = useMediaQuery({
    query: "(max-width: 1224px)",
  });
  const landscape = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <motion.div
      className={`${style.parallaxContainer} ${
        style[className as keyof typeof style]
      } ${landscape ? style["small"] : desktop ? style["medium"] : ""}`}
      ref={paralRef}
    >
      <motion.div
        style={{ y: landscape ? "0px" : parallax }}
        className={style.parallaxContainer__parallax__img}
      >
        <ExportedImage src={imageURL} width={1920} height={900} alt={alt} />
      </motion.div>

      <motion.div className={style.parallaxContainer__parallax__testo}>
        <div
          className={style.parallaxContainer__parallax__testo_div}
          dangerouslySetInnerHTML={{ __html: text || "" }}
        />
        <br />
        {buttonText && (
          <a
            className={style.parallaxContainer__parallax__testo__button}
            href={buttonLink}
          >
            {buttonText}
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Parallax;
