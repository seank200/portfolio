"use client";

import Image, { type StaticImageData } from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function ProjectHeroGallery({
  images,
}: {
  images: StaticImageData[];
}) {
  const [rows, setRows] = useState<number>(6);
  const gridRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const { height } = gridRef.current.getBoundingClientRect();
    if (height < window.innerHeight + 256) {
      setRows((row) => row + 3);
    }
  }, [gridRef, rows]);

  return (
    <div className="-z-10 absolute top-0 right-0 left-0 h-screen overflow-hidden">
      <div className="z-10 absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-background/40 to-background dark:from-background/70 dark:to-background"></div>
      <div
        ref={gridRef}
        className="absolute -top-40 -right-20 -bottom-40 -left-40 group-hover/project:scale-102 transition-transform grid grid-cols-5 gap-4 rotate-12"
      >
        {Array(5)
          .fill(0)
          .map((v, col) => (
            <div key={col}>
              {Array(rows)
                .fill(0)
                .map((v, row) => {
                  return (
                    <Image
                      key={row}
                      src={images[(row * 5 + col) % images.length]}
                      alt="Sigmate"
                      width={640}
                      className="mb-4 last:mb-0"
                    />
                  );
                })}
            </div>
          ))}
      </div>
    </div>
  );
}
