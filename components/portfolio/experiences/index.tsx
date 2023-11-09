"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MyLang, translator } from "@lib/i18n";
import Section from "../Section";
import Container from "@components/Container";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import delorean from "@assets/delorean.png";
import SegmentDisplay from "./SegmentDisplay";
import throttle from "lodash/throttle";

const expPeriod = {
  none: {
    start: new Date("2023-10"),
    end: new Date(),
  },
  ucn: {
    start: new Date("2021-09"),
    end: new Date("2023-10"),
  },
  anl: {
    start: new Date("2023-06"),
    end: new Date("2023-08"),
  },
  yonsei: {
    start: new Date("2017-03"),
    end: new Date("2023-03"),
  },
  ceos: {
    start: new Date("2021-03"),
    end: new Date("2021-12"),
  },
  cfc: {
    start: new Date("2019-02"),
    end: new Date("2020-12"),
  },
  yicrc: {
    start: new Date("2018-03"),
    end: new Date("2019-02"),
  },
};

type ExpName = keyof typeof expPeriod;

export default function ExperienceSection({ lang }: { lang: MyLang }) {
  const [, setScrollY] = useState<number>(0);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(true);

  const expUList = useRef<HTMLUListElement>(null);
  const street = useRef<HTMLDivElement>(null);

  const ucnLi = useRef<HTMLLIElement>(null);
  const anlLi = useRef<HTMLLIElement>(null);
  const yonseiLi = useRef<HTMLLIElement>(null);
  const ceosLi = useRef<HTMLLIElement>(null);
  const cfcLi = useRef<HTMLLIElement>(null);
  const yicrcLi = useRef<HTMLLIElement>(null);

  const ucnYearLi = useRef<HTMLLIElement>(null);
  const anlYearLi = useRef<HTMLLIElement>(null);
  const yonseiYearLi = useRef<HTMLLIElement>(null);
  const ceosYearLi = useRef<HTMLLIElement>(null);
  const cfcYearLi = useRef<HTMLLIElement>(null);
  const yicrcYearLi = useRef<HTMLLIElement>(null);

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
  const scrollYSpring = useSpring(scrollYProgress, { bounce: 0 });
  const dLeftSpring = useTransform(scrollYSpring, [0, 1], ["0%", "100%"]);
  const dTxSpring = useTransform(scrollYSpring, [0, 1], [0, -44]);
  const tTxSpring = useTransform(scrollYSpring, [0, 1], ["0%", "-100%"]);

  const t = translator(lang);

  // const formatDate = (date: Date) => {
  //   const year = date.getFullYear();
  //   const month = date.getMonth() + 1;
  //   const day = date.getDate();
  //   const fMonth = month < 10 ? `0${month}` : month;
  //   const fDay = day < 10 ? `0${day}` : day;
  //   return `${year}-${fMonth}-${fDay}`;
  // };
  const now = new Date();

  useEffect(() => {
    const streetWidth = street?.current?.getBoundingClientRect().width;
    if (!streetWidth) return;
    const lastWidth = yicrcYearLi.current?.getBoundingClientRect().width;
    if (!lastWidth) return;

    const width = streetWidth - lastWidth;

    const heights = [
      ucnLi.current?.getBoundingClientRect().height || 1,
      anlLi.current?.getBoundingClientRect().height || 1,
      yonseiLi.current?.getBoundingClientRect().height || 1,
      ceosLi.current?.getBoundingClientRect().height || 1,
      cfcLi.current?.getBoundingClientRect().height || 1,
      yicrcLi.current?.getBoundingClientRect().height || 1,
    ];

    const total = heights.reduce((p, c) => p + c, 0);

    for (let i = 1; i < heights.length; i++) {
      heights[i] += heights[i - 1];
    }

    anlYearLi.current?.style.setProperty(
      "left",
      `${(width * heights[0]) / total}px`,
    );
    yonseiYearLi.current?.style.setProperty(
      "left",
      `${(width * heights[1]) / total}px`,
    );
    ceosYearLi.current?.style.setProperty(
      "left",
      `${(width * heights[2]) / total}px`,
    );
    cfcYearLi.current?.style.setProperty(
      "left",
      `${(width * heights[3]) / total}px`,
    );
    yicrcYearLi.current?.style.setProperty(
      "left",
      `${(width * heights[4]) / total}px`,
    );
  }, []);

  // Delorean direction
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

  // Update time circuit readouts
  const handleCurrentItem = (name: ExpName) => {
    const { start, end } = expPeriod[name];

    let destination: Date;
    let present: Date;

    if (isScrollingDown) {
      destination = start;
      present = end;
    } else {
      destination = end;
      present = start;
    }

    setDestinationTime(destination);
    setPresentTime((prevPresent) => {
      if (name === "none") {
        setLastDepartedTime(present);
      } else if (prevPresent) {
        setLastDepartedTime(prevPresent);
      }
      return present;
    });
  };

  return (
    <Section level={2} heading={t("Experiences", "업무 경험")} id="experiences">
      <Container>
        <ul ref={expUList}>
          <motion.li
            ref={ucnLi}
            onViewportEnter={() => handleCurrentItem("ucn")}
            onViewportLeave={() => handleCurrentItem("none")}
            viewport={{ once: false }}
            className="h-screen bg-ctp-flamingo/10"
          />
          <motion.li
            ref={anlLi}
            onViewportEnter={() => handleCurrentItem("anl")}
            viewport={{ once: false }}
            className="h-screen bg-ctp-blue/10"
          />
          <motion.li
            ref={yonseiLi}
            onViewportEnter={() => handleCurrentItem("yonsei")}
            viewport={{ once: false }}
            className="h-screen bg-ctp-teal/10"
          />
          <motion.li
            ref={ceosLi}
            onViewportEnter={() => handleCurrentItem("ceos")}
            viewport={{ once: false }}
            className="h-screen bg-ctp-mauve/10"
          />
          <motion.li
            ref={cfcLi}
            onViewportEnter={() => handleCurrentItem("cfc")}
            viewport={{ once: false }}
            className="h-screen bg-ctp-flamingo/10"
          />
          <motion.li
            ref={yicrcLi}
            onViewportEnter={() => handleCurrentItem("yicrc")}
            viewport={{ once: false }}
            className="h-screen bg-ctp-mauve/10"
          />
        </ul>
      </Container>
      <div className="z-10 sticky bottom-0 left-0 right-0 w-full py-6 bg-background">
        <Container className="relative flex gap-6">
          <div
            ref={street}
            className="w-full relative border-b border-ctp-text"
          >
            <ol className="text-ctp-text font-7seg">
              <li className="absolute left-0" ref={ucnYearLi}>
                {expPeriod.ucn.end.getFullYear()}
              </li>
              <li className="absolute" ref={anlYearLi}></li>
              <li className="absolute" ref={yonseiYearLi}></li>
              <li className="absolute" ref={ceosYearLi}>
                {expPeriod.ceos.end.getFullYear()}
              </li>
              <li className="absolute" ref={cfcYearLi}>
                {expPeriod.cfc.end.getFullYear()}
              </li>
              <li className="absolute" ref={yicrcYearLi}>
                {expPeriod.yicrc.end.getFullYear()}
              </li>
              <li className="absolute right-0">
                {expPeriod.yicrc.start.getFullYear()}
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
        </Container>
      </div>
    </Section>
  );
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
