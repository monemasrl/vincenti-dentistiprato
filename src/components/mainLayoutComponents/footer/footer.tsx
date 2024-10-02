"use client";
import Image from "next/image";
import style from "./footer.module.scss";
import Link from "next/link";
import generic from "../../../../public/data/generic.json";
import { usePathname } from "next/navigation";

function Footer() {
  const pathN = usePathname();
  const t = generic;

  return (
    <footer className={style.footer}>
      <div className={style.footer__first}>
        <Image src="/image/vtslogo.jpg" width={180} height={96} alt="logo" />
        <ul>
          <li>
            <a href={`tel:${t.generics.telNumber}`}>
              {t.generics.label_tel}:{t.generics.telNumber}
            </a>
          </li>
          <li>
            {t.generics.label_iva}:{t.generics.iva}
          </li>
          <li>{t.generics.albo}</li>
          <li>
            {t.generics.label_powered}:{t.generics.powered}
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
