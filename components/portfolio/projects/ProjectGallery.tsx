"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export type ProjectGalleryItem = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

export default function ProjectGallery({
  items,
  small,
}: {
  items: ProjectGalleryItem[];
  small?: boolean;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  const gridCols = small
    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 "
    : "grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 ";

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
    <ul className={`relative grid ${gridCols} gap-6`}>
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
                  className="container mb-6 w-full text-right text-2xl text-white"
                >
                  <FontAwesomeIcon icon={faXmark} className="h-em" />
                </button>
              )}
              <Image
                src={item.src}
                alt={item.alt}
                width={1280}
                onClick={() => selected !== idx && setSelected(idx)}
                className={`grow w-auto h-auto max-h-[720px] transition ${
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
  );
}
