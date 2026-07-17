"use client";

import { useEffect, useRef, useState } from "react";

import { chargers } from "@/data/chargers";

import { ChargerCard } from "./ChargerCard";

export function ComparisonCards() {
  const containerRef = useRef<HTMLElement>(null);

  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const specificationCount = Math.max(
    ...chargers.map((charger) => charger.specifications.length),
  );

  const totalRows = 4 + specificationCount;

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateScrollState = () => {
      const { scrollLeft, clientWidth, scrollWidth } = container;
      const tolerance = 2;

      setCanScrollPrevious(scrollLeft > tolerance);

      setCanScrollNext(scrollLeft + clientWidth < scrollWidth - tolerance);
    };

    updateScrollState();

    container.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  function scroll(direction: "previous" | "next") {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const card = container.querySelector<HTMLElement>("article");
    const cardWidth = card?.offsetWidth ?? 320;
    const gap = 20;

    container.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
      <button
        type="button"
        aria-label="Show previous chargers"
        disabled={!canScrollPrevious}
        onClick={() => scroll("previous")}
        className="
            flex
            size-10
            items-center
            justify-center
            rounded-full
            border
            border-slate-300
            bg-white
            text-slate-800
            shadow-sm
            transition
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-teal-700
            enabled:cursor-pointer
            enabled:hover:border-teal-700
            enabled:hover:bg-teal-50
            disabled:cursor-not-allowed
            disabled:border-slate-200
            disabled:bg-slate-100
            disabled:text-slate-300
            disabled:shadow-none
        "
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="m12.5 15-5-5 5-5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <section
        ref={containerRef}
        aria-label="EV charger comparison"
        className="
        grid
        min-w-0
        snap-x
        snap-mandatory
        [scrollbar-width:none]
        auto-cols-[minmax(290px,320px)]
        grid-flow-col
        gap-x-5
        overflow-x-auto
        scroll-smooth
        pb-4
        [&::-webkit-scrollbar]:hidden
      "
        style={{
          gridTemplateRows: `repeat(${totalRows}, auto)`,
        }}
      >
        {chargers.map((charger) => (
          <ChargerCard
            key={charger.id}
            charger={charger}
            totalRows={totalRows}
          />
        ))}
      </section>

      <button
        type="button"
        aria-label="Show more chargers"
        disabled={!canScrollNext}
        onClick={() => scroll("next")}
        className="
  flex
  
  size-10
  items-center
  justify-center
  rounded-full
  border
  transition
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-teal-700
  enabled:cursor-pointer
  enabled:border-slate-300
  enabled:bg-white
  enabled:text-slate-800
  enabled:shadow-sm
  enabled:hover:border-teal-700
  enabled:hover:bg-teal-50
  disabled:cursor-not-allowed
  disabled:border-slate-200
  disabled:bg-slate-100
  disabled:text-slate-300
  disabled:shadow-none
"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="m7.5 5 5 5-5 5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
