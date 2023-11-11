"use client";

import ListItem from "@components/ListItem";
import { useState } from "react";
import { motion } from "framer-motion";
import MotionListItem from "@components/MotionListItem";
import { MyLang, translator } from "@lib/i18n";

export default function ExpList({
  lang,
  items: itemsProp,
}: {
  lang: MyLang;
  items: React.ReactNode;
}) {
  const items = itemsProp as React.ReactNode[];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleButtonClick = () => {
    setIsOpen((p) => !p);
  };
  const t = translator(lang);
  const CLOSED_COUNT = 3;
  return (
    <>
      <ul className="mt-4 flex flex-col gap-3 leading-relaxed">
        {items.slice(0, CLOSED_COUNT).map((item, idx) => {
          return <ListItem key={idx}>{item}</ListItem>;
        })}
        {items.length > CLOSED_COUNT && (
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: {
                height: "auto",
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.05,
                },
              },
              closed: {
                height: 0,
                transition: {
                  when: "afterChildren",
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                },
              },
            }}
            className="flex flex-col gap-4 overflow-hidden"
          >
            {items.slice(CLOSED_COUNT).map((item, idx) => {
              return (
                <MotionListItem
                  key={idx}
                  variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                >
                  {item}
                </MotionListItem>
              );
            })}
          </motion.div>
        )}
      </ul>
      {items.length > CLOSED_COUNT && (
        <button
          onClick={handleButtonClick}
          className="mt-4 w-full text-center hover:underline text-ctp-mauve font-medium"
        >
          {t(
            isOpen ? "View less" : "View more..",
            isOpen ? "숨기기" : "더보기..",
          )}
        </button>
      )}
    </>
  );
}
