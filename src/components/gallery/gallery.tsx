"use client";

import style from "./gallery.module.scss";
import ExportedImage from "next-image-export-optimizer";
function Gallery({ type, images }: { type: string; images: string[] }) {
  if (type === "one") {
    return (
      <div className={style.galleryGrid}>
        <div className={style.galleryGrid__colBig}>
          <ExportedImage
            src={"/image/" + images[0]}
            width={900}
            height={450}
            alt="gallery"
          />
        </div>
        <div className={style.galleryGrid__colBig}>
          <ExportedImage
            src={"/image/" + images[1]}
            width={450}
            height={225}
            alt="gallery"
          />
        </div>
        <div className={style.galleryGrid__col}>
          <ExportedImage
            src={"/image/" + images[2]}
            width={450}
            height={225}
            alt="gallery"
          />
        </div>
        <div className={style.galleryGrid__col}>
          <ExportedImage
            src={"/image/" + images[3]}
            width={450}
            height={225}
            alt="gallery"
          />
        </div>
        <div className={style.galleryGrid__col}>
          <ExportedImage
            src={"/image/" + images[4]}
            width={450}
            height={225}
            alt="gallery"
          />
        </div>
        <div className={style.galleryGrid__col}>
          <ExportedImage
            src={"/image/" + images[5]}
            width={450}
            height={225}
            alt="gallery"
          />
        </div>
      </div>
    );
  }
  if (type === "two") {
    return (
      <div className={style.galleryGrid2}>
        {images.map((item, index) => {
          return (
            <div key={index} className={style.galleryGrid2__col}>
              <ExportedImage
                src={"/image/" + item}
                width={300}
                height={230}
                alt="gallery"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
