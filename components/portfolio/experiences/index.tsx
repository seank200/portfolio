"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import throttle from "lodash/throttle";
import { MyLang, translator } from "@lib/i18n";
import delorean from "@assets/delorean.png";
import SegmentDisplay from "./SegmentDisplay";
import Heading from "../Heading";
import { ExpName, expAttribs, experiences } from "./dict";
import ExpContent from "./ExpContent";
import ExpList from "./ExpList";

export default function ExperienceSection({ lang }: { lang: MyLang }) {
  const [, setScrollY] = useState<number>(0);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(true);

  // Each experience section
  const expUList = useRef<HTMLUListElement>(null);
  const streetOList = useRef<HTMLOListElement>(null);

  // Year markers in Delorean path

  // Delorean Time Circuit
  const [destinationTime, setDestinationTime] = useState<Date>(
    () => new Date(),
  );
  const [presentTime, setPresentTime] = useState<Date | null>(null);
  const [lastDepartedTime, setLastDepartedTime] = useState<Date>(
    () => new Date(),
  );

  // Delorean
  const { scrollYProgress } = useScroll({
    target: expUList,
    offset: ["start center", "end end"],
  });
  const dLeftSpring = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dTxSpring = useTransform(scrollYProgress, [0, 1], [0, -44]);
  const tTxSpring = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const t = translator(lang);
  const now = new Date();
  const expList = experiences[lang];
  const lastStartDate = expList.at(-1)?.period.start || now;

  // Update time circuit readouts
  const handleCurrentItem = (name: ExpName) => {
    const { start, end } = expAttribs[name].period;

    let destination: Date;
    let present: Date;

    if (isScrollingDown) {
      destination = start;
      present = end || now;
    } else {
      destination = end || now;
      present = start;
    }

    setDestinationTime(destination);
    setPresentTime((prevPresent) => {
      if (prevPresent) setLastDepartedTime(prevPresent);
      return present;
    });
  };

  // Year label spacing in delorean path
  useEffect(() => {
    const expContents = expUList.current?.querySelectorAll("section");
    if (!expContents?.length) return;
    const signs = streetOList.current?.querySelectorAll("li");
    if (!signs?.length) return;
    if (expContents.length !== signs.length - 1) {
      throw new Error(
        `Number of signs do not match number of experience sections: ${expContents.length}, ${signs.length}`,
      );
    }

    const heights: number[] = [];
    expContents?.forEach((elem) => {
      heights.push(elem.getBoundingClientRect().height);
    });
    const total = heights.reduce((p, c) => p + c, 0);
    for (let i = 1; i < heights.length; i++) {
      heights[i] += heights[i - 1];
    }
    signs?.forEach((elem, i) => {
      if (i - 1 < 0 || i + 1 === signs.length) return;
      elem.style.setProperty("left", `${(heights[i - 1] * 100) / total}%`);
    });
  }, []);

  // Change Delorean direction
  useEffect(() => {
    setScrollY(window.scrollY);
    const handleScroll = throttle(() => {
      setScrollY((prevScrollY) => {
        const newScrollY = window.scrollY;
        let newIsScrollingDown = isScrollingDown;
        if (prevScrollY - 5 > newScrollY) {
          newIsScrollingDown = false;
        } else if (prevScrollY + 5 < newScrollY) {
          newIsScrollingDown = true;
        }
        setIsScrollingDown(newIsScrollingDown);

        if (
          newIsScrollingDown &&
          presentTime &&
          destinationTime.getTime() > presentTime.getTime()
        ) {
          setDestinationTime(presentTime);
          setPresentTime(destinationTime);
        } else if (
          !newIsScrollingDown &&
          presentTime &&
          destinationTime.getTime() < presentTime.getTime()
        ) {
          setDestinationTime(presentTime);
          setPresentTime(destinationTime);
        }
        return newScrollY;
      });
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [presentTime, destinationTime, isScrollingDown]);

  return (
    <motion.section id="experiences" className="container scroll-my-16">
      <Heading level={2}>{t("Work Experience", "업무 경험")}</Heading>
      <section ref={expUList}>
        {expList.map((expAttribs) => {
          return (
            <motion.section
              key={expAttribs.name}
              className="my-16 first:mt-12"
              viewport={{ once: false }}
              onViewportEnter={() => handleCurrentItem(expAttribs.name)}
            >
              <ExpContent lang={lang} attribs={expAttribs}>
                <ExpList lang={lang} items={expAttribs.details} />
              </ExpContent>
            </motion.section>
          );
        })}
      </section>
      <div className="z-10 sticky bottom-0 left-0 right-0 w-full py-6 bg-background">
        <div className="w-full relative border-b border-ctp-text">
          <ol ref={streetOList} className="text-ctp-text font-7seg">
            {expList.map((expAttribs) => {
              const date = expAttribs.period.end || expAttribs.period.start;
              return (
                <li
                  key={expAttribs.name}
                  className="absolute transition text-sm"
                >
                  {formatDate(date, "year")}
                  <span className="hidden md:inline">
                    -{formatDate(date, "month")}
                  </span>
                </li>
              );
            })}
            <li className="absolute right-0 transition text-sm">
              {formatDate(lastStartDate, "year")}
              <span className="hidden md:inline">
                -{formatDate(lastStartDate, "month")}
              </span>
            </li>
          </ol>
          <motion.div
            style={{ left: dLeftSpring, translateX: dTxSpring }}
            className="group absolute left-full bottom-0 w-[44px]"
          >
            <motion.ol
              style={{ left: dLeftSpring, translateX: tTxSpring }}
              className="absolute left-0 bottom-6 -translate-x-1/2 w-96 border border-black shadow pt-5 pb-3 hidden group-hover:flex flex-col items-center bg-[#423f44] text-3xl"
            >
              <li className="mb-3 w-full border-b border-black pb-3 text-ctp-red text-center">
                <TimeCircuitDisplay
                  label="Destination Time"
                  time={destinationTime}
                  now={now}
                />
              </li>
              <li className="mb-3 w-full border-b border-black pb-3 text-ctp-green text-center">
                <TimeCircuitDisplay
                  label="Present Time"
                  time={presentTime}
                  now={now}
                />
              </li>
              <li className="w-full text-ctp-yellow text-center">
                <TimeCircuitDisplay
                  label="Last Time Departed"
                  time={lastDepartedTime}
                  now={now}
                />
              </li>
            </motion.ol>
            <Image
              src={delorean}
              alt="Delorean"
              height={16}
              className={`w-auto cursor-pointer ${
                isScrollingDown ? "-scale-x-100" : ""
              }`}
              onClick={() =>
                window.open(
                  "https://www.backtothefuture.com",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function formatDate(date: Date, precision: "year" | "month") {
  if (precision === "year") {
    return date.getFullYear().toString();
  } else {
    return (date.getMonth() + 1).toString().padStart(2, "0");
  }
}

function TimeCircuitDisplay({
  label,
  time,
  now,
}: {
  label: string;
  time: Date | null;
  now: Date;
}) {
  const monthName = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const isAM = time ? now.getHours() < 12 : false;
  const isPM = time ? now.getHours() >= 12 : false;
  return (
    <>
      <div className="flex justify-center items-center">
        <SegmentDisplay
          label="Month"
          className="mx-1 px-1 bg-black"
          content={time ? monthName[time.getMonth()] : "---"}
        />
        <SegmentDisplay
          label="Day"
          className="mx-1 px-1 bg-black"
          content={time ? time.getDate().toString().padStart(2, "0") : "--"}
        />
        <SegmentDisplay
          label="Year"
          className="mx-1 px-1 bg-black"
          content={time ? time.getFullYear().toString() : "----"}
        />
        <ol className="mx-2 inline-block">
          <li className="mb-1 flex flex-col items-center">
            <span className="mb-1 text-[10px] leading-none">
              <span className="px-1 bg-red-900 text-red-100 font-mono">AM</span>
            </span>
            <span
              className={`rounded-full w-1.5 h-1.5 ${
                isAM ? "bg-yellow-400" : "bg-yellow-50"
              } leading-none`}
            ></span>
          </li>
          <li className="flex flex-col items-center">
            <span className="mb-1 text-[10px] leading-none">
              <span className="px-1 py-px bg-red-900 text-red-100 font-mono">
                PM
              </span>
            </span>
            <span
              className={`rounded-full w-1.5 h-1.5 ${
                isPM ? "bg-yellow-400" : "bg-yellow-50"
              } leading-none`}
            ></span>
          </li>
        </ol>
        <SegmentDisplay
          label="Hour"
          className="mx-1 px-1 bg-black"
          content={time ? now.getHours().toString().padStart(2, "0") : "--"}
        />
        <ul>
          <li className="h-4" />
          <li className="mb-1 w-1 h-1 rounded-full bg-yellow-300 blinking-bulb" />
          <li className="w-1 h-1 rounded-full bg-yellow-300 blinking-bulb" />
        </ul>
        <SegmentDisplay
          label="Min"
          className="mx-1 px-1 bg-black"
          content={time ? now.getMinutes().toString().padStart(2, "0") : "--"}
        />
      </div>
      <p className="mt-1 text-center text-xs">
        <span className="px-1 py-px bg-black text-[11px] text-white/80 font-mono uppercase">
          {label}
        </span>
      </p>
    </>
  );
}
