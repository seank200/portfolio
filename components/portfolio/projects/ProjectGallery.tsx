"use client";

import Container from "@components/Container";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyLang } from "@lib/i18n";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export type ProjectGalleryItem = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

export default function ProjectGallery({
  lang,
  items,
}: {
  lang: MyLang;
  items: ProjectGalleryItem[];
}) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Container className="mt-6">
      <ul className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, idx) => {
          return (
            <li
              key={item.alt}
              className={`group flex flex-col items-center ${
                selected === idx
                  ? ""
                  : "hover:scale-102 hover:opacity-95 justify-start cursor-pointer"
              } transition `}
            >
              <div
                className={
                  selected === idx
                    ? "z-10 fixed top-0 right-0 bottom-0 left-0 bg-black/70 flex flex-col justify-center items-center"
                    : ""
                }
                onClick={selected === idx ? () => setSelected(null) : undefined}
              >
                {selected === idx && (
                  <button
                    onClick={() => setSelected(null)}
                    className="mb-6 w-[1280px] text-right text-2xl text-white"
                  >
                    <FontAwesomeIcon icon={faXmark} className="h-em" />
                  </button>
                )}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1280}
                  onClick={() => selected !== idx && setSelected(idx)}
                  className={`max-w-full h-auto transition ${
                    selected !== idx ? "group-hover:shadow-lg" : ""
                  }`}
                  loading="lazy"
                  title={item.caption}
                />
                {selected === idx && (
                  <p className="mt-6 text-white text-lg">{item.alt}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
