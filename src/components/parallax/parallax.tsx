"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import style from "./parallax.module.scss";

function Parallax({
  imageURL,
  alt,
  height,
  text,
  buttonText,
  buttonLink,
}: {
  imageURL: string;
  alt: string;
  height: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  const paralRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paralRef,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      className={style.parallaxContainer}
      ref={paralRef}
      style={{
        height: height,
      }}
    >
      <motion.div
        className={style.parallaxContainer__parallax}
        style={{
          y: parallax,
        }}
      >
        <motion.div
          className={style.parallaxContainer__parallax}
          style={{
            y: parallax,
          }}
        >
          <ExportedImage src={imageURL} fill alt={alt} />
        </motion.div>
        <motion.div className={style.parallaxContainer__parallax__testo}>
          <div dangerouslySetInnerHTML={{ __html: text || "" }} />
          <br />
          <a
            className={style.parallaxContainer__parallax__testo__button}
            href={buttonLink}
          >
            {buttonText}
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Parallax;
