import heroData from "../../public/data/hero.json";
import homeData from "../../public/data/home.json";
import staffData from "../../public/data/staff.json";
import generic from "../../public/data/generic.json";

import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";
import LeafletMain from "@/components/map/Leaflet";
import Form from "@/components/form/netlifyForm";
import Parallax from "@/components/parallax/parallax";
import Gallery from "@/components/gallery/gallery";
import ExportedImage from "next-image-export-optimizer";

import styles from "./page.module.scss";

/**
 * PAGINA
 * Utilizzare le pagine per fetchare i dati e passarli ai componenti
 * Mantenere le pagine componenti server-side
 * Passare i dati ai componenti figli tramite props, sui componenti annidati è possibile refetchare i dati in quando sono cacheati da next
 */

export default async function Home() {
  const HeroDataLang = heroData["it"];
  const HomeDataLang = homeData["it"];
  const StaffDataLang = staffData["it"];
  const mapData = generic.generics;
  const HeroImage =
    "/image/studio-dentistico-dottor-vincenzi-slideshow_overlay-25.jpg";

  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <Parallax
          className={"parallaxSection1"}
          imageURL={HeroImage}
          alt="heroImage"
          text={HeroDataLang.titolo}
          buttonText={HeroDataLang.link}
          buttonScroll={HeroDataLang.linkURL}
        />
      </section>
      <AnimatedSection classname={styles.section2} scrollToMe="studio">
        <div className="subtitle">{homeData["it"].sezione1.subtitle}</div>
        <h1 className="title">{homeData["it"].sezione1.title}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: homeData["it"].sezione1.testo }}
        />
      </AnimatedSection>
      <AnimatedSection classname={styles.section3}>
        <Gallery type="one" images={HomeDataLang.gallery1} />
      </AnimatedSection>
      <AnimatedSection classname={styles.section4} scrollToMe="trattamenti">
        <div className="subtitle">{homeData["it"].sezione2.subtitle}</div>
        <h2 className="title">{homeData["it"].sezione2.title}</h2>
        <p>{homeData["it"].sezione2.testo}</p>
        <div className={styles.trattamenti}>
          {HomeDataLang.trattamenti.map((item, index) => {
            return (
              <div
                key={index}
                className={`${styles.trattamenti__box} ${
                  styles["trattamenti__" + index.toString()] || ""
                } `}
              >
                <div className={styles.trattamenti__box__imageBox}>
                  <ExportedImage
                    src={"/image/" + item.img}
                    width={item["img-width"]}
                    height={item["img-height"]}
                    alt={item.titolo}
                  />
                </div>
                <h3>{item.titolo}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.descrizione }} />
              </div>
            );
          })}
        </div>
      </AnimatedSection>
      <AnimatedSection classname={styles.section5}>
        <Parallax
          className={"parallaxSection5"}
          imageURL="/image/dr_vincenti_center_band-1.jpg"
          alt="parallax"
          text={homeData["it"].parallax}
        />
      </AnimatedSection>
      <AnimatedSection classname={styles.section6} scrollToMe="team">
        <div className="subtitle">{homeData["it"].sezione3.subtitle}</div>
        <h2 className="title">{homeData["it"].sezione3.title}</h2>
        <p>{homeData["it"].sezione3.testo}</p>
        <div className={styles.staff}>
          {StaffDataLang.map((item, index) => {
            return (
              <div
                key={index}
                className={`${styles.staff__box} ${
                  styles["staff__box__" + index.toString()]
                }`}
              >
                <ExportedImage
                  src={"/image/" + item.image}
                  width={300}
                  height={230}
                  alt={item.nome}
                />

                <h3>{item.nome}</h3>
                <p>{item.ruolo}</p>
                <hr />
                <p>{item.descrizione}</p>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
      <AnimatedSection classname={styles.section7}>
        <ExportedImage
          src={"/image/team.jpg"}
          width={1459}
          height={595}
          alt="foto-team"
        />
        <hr style={{ marginTop: "-4px" }} />
      </AnimatedSection>
      <AnimatedSection
        classname={styles.section8}
        width="1200px"
        scrollToMe="strumentazione"
      >
        <div className="subtitle">{homeData["it"].sezione4.subtitle}</div>
        <h2 className="title">{homeData["it"].sezione4.title}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: homeData["it"].sezione4.testo }}
        />
        <div className={styles.strumentazioneGallery}>
          <Gallery type="two" images={HomeDataLang.gallery2} />
        </div>
      </AnimatedSection>
      <AnimatedSection classname={styles.section9}>
        <hr style={{ marginTop: "0" }} />
        <ExportedImage
          src={"/image/periscopio-460x300.png"}
          width={460}
          height={300}
          alt="foto-team"
          style={{ marginTop: "-9px" }}
        />
      </AnimatedSection>
      <AnimatedSection classname={styles.section10} scrollToMe="contatti">
        <div className="subtitle">{homeData["it"].sezione5.subtitle}</div>
        <h1 className="title">{homeData["it"].sezione5.title}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: homeData["it"].sezione5.testo }}
        />
        <div className={styles.contatti}>
          <div className={styles.contatti__box}>
            <ExportedImage
              src={homeData["it"].contatti[0].img}
              width={150}
              height={150}
              alt="icon time"
            />
            <h3>{homeData["it"].contatti[0].titolo}</h3>
            <p>{homeData["it"].contatti[0].testo1}</p>
            <hr />
            <p> {homeData["it"].contatti[0].testo2}</p>
          </div>
          <div className={styles.contatti__box}>
            <ExportedImage
              src={homeData["it"].contatti[1].img}
              width={150}
              height={150}
              alt="icon time"
            />
            <h3>{homeData["it"].contatti[1].titolo}</h3>
            <p>
              {homeData["it"].contatti[1].testo1}
              <span>{homeData["it"].contatti[1].testo2}</span>
            </p>
          </div>

          <div className={styles.contatti__box}>
            <ExportedImage
              src={homeData["it"].contatti[2].img}
              width={150}
              height={150}
              alt="icon time"
            />
            <h3>{homeData["it"].contatti[2].titolo}</h3>
            <p>
              {homeData["it"].contatti[2].testo1}
              <span>{homeData["it"].contatti[2].testo2}</span>
            </p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection classname={styles.section11}>
        <Form />
      </AnimatedSection>
      <AnimatedSection classname={styles.section12}>
        <LeafletMain
          address={{
            city: mapData.city,
            street: mapData.address,
            number: mapData.address_number,
          }}
        />
      </AnimatedSection>
    </main>
  );
}
