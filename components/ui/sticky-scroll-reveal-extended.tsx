"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: React.ReactNode;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [elementTops, setElementTops] = useState<number[]>([]); // 每个item的顶部位置

  // CORE-LOGIC-START

  // 计算每个内容块顶部位置
  const calculatePositions = useCallback(() => {
    if (!containerRef.current) return;
    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const newElementTops = itemRefs.current.map((el) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY - containerTop;
      return top;
    });
    console.log("newElementTops", newElementTops);
    setElementTops(newElementTops);
  }, []);

  // 监听容器大小变化并重新计算位置
  useEffect(() => {
    calculatePositions();
    window.addEventListener("resize", () => {
      console.log("Window resized. Recalculating elementTops...");
      calculatePositions();
    });
    return () => window.removeEventListener("resize", calculatePositions);
  }, [calculatePositions]);

  // 滚动监听
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    console.log("scrollTop", scrollTop);
    const threshold = 100;
    // 找出距离 scrollTop 最近的元素
    let closestIndex = 0;
    let minDistance = Infinity;
    // 遍历每个元素的顶部位置，找到距离 scrollTop 最近的元素
    elementTops.forEach((elementTop, index) => {
      console.log(`elementTop: ${elementTop}, index: ${index}`);
      // 计算元素的顶部位置与 scrollTop 的距离
      const distance = Math.abs(elementTop - scrollTop - threshold);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveCard(closestIndex);
  }, [elementTops]);

  // 为容器添加滚动事件监听
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // CORE-LOGIC-END

  const backgroundColors = ["#000000"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="w-full relative flex h-[calc(100vh-4rem)] justify-between overflow-y-auto rounded-md py-10 scrollbar-hide"
      ref={containerRef}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
    >
      <div className="relative flex items-start px-4">
        <div className="w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-20 flex-col w-full"
              ref={(el) => {
                itemRefs.current[index] = el!;
              }}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100 flex w-full"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg mt-10 text-slate-300 whitespace-pre-line flex w-full"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
          <div className="h-110" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
