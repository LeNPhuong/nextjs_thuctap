"use client";

import React, { ReactNode, Children, useState, useEffect, useRef } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const ProductLayoutV2: React.FC<{ children: ReactNode }> = ({ children }) => {
  const elm = useRef<HTMLDivElement | null>(null);
  const [widthCrd, setWidthCrd] = useState<number>(0);
  const [line, setLine] = useState<number>(0);

  useEffect(() => {
    setWidthCrd(
      (e) => (e = (elm?.current?.children[0] as HTMLDivElement).offsetWidth),
    );
  }, [Children.count(children)]);

  function handleNext(): void | null {
    const total =
      (elm?.current?.children[0] as HTMLDivElement).offsetWidth *
      Children.count(children);
    if (line >= total - widthCrd) {
      return null;
    } else {
      setLine((e) => e + widthCrd);
    }
  }

  function handlePrev(): void | null {
    if (line <= 0) {
      return null;
    } else {
      setLine((e) => e - widthCrd);
    }
  }

  return (
    <div className="relative">
      {typeof Children.count(children) === "number" &&
      Children.count(children) > 4 ? (
        <button
          onClick={handlePrev}
          className="absolute top-[50%] translate-y-[-50%] translate-x-[-150%] left-0 z-[500] bg-rgb-custome-9 w-full max-w-[21px] min-h-[74px] text-center text-white font-big"
        >
          <FaAngleLeft />
        </button>
      ) : null}
      <div className="overflow-hidden w-full">
        <div
          style={{
            transform:
              line > 0 ? `translateX(calc(-${line}px))` : "translateX(0)",
          }}
          className="flex whitespace-nowrap w-full duration-500"
          ref={elm}
        >
          {children}
        </div>
      </div>
      {typeof Children.count(children) === "number" &&
      Children.count(children) > 4 ? (
        <button
          onClick={handleNext}
          className="absolute top-[50%] translate-y-[-50%] translate-x-[150%] right-0 z-[500] bg-rgb-custome-9 w-full max-w-[21px] min-h-[74px] text-center text-white font-big"
        >
          <FaAngleRight />
        </button>
      ) : null}
    </div>
  );
};

export default ProductLayoutV2;
