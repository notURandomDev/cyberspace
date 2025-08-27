"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal-extended";
import React from "react";

const elementTops = [120, 392, 664, 936, 1208, 1480, 1752, 2024];

const content = [
  {
    title: "教育经历",
    description: (
      <ul>
        <li>杭州电子科技大学 | 软件工程-大三</li>
        <li>GPA：4.2/5，综合排名专业前三</li>
        <li>获浙江省政府奖学金</li>
        <li>校优秀学生奖学金一等奖2次，二等奖1次</li>
      </ul>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        2022.08 - 2026.06
      </div>
    ),
  },
  {
    title: "专业技能",
    description: (
      <ul className="flex flex-col gap-2">
        <li>
          熟悉 HTML、CSS、JavaScript、TypeScript；熟悉 React
          框架、UI组件库应用及开发
        </li>
        <li>
          熟悉 React Native 跨平台开发、微信小程序开发；有 Android、iOS
          客户端开发经验
        </li>
        <li>
          有使用 云开发平台/BaaS 协助全栈开发的能力；了解常规的 Node.js
          后端项目开发
        </li>
        <li>
          熟悉Git；有GitHub/GitLab的DevOps相关经验，以及Web项目的部署全流程经验
        </li>
        <li>
          熟悉UI、UX设计，有Figma使用经验，艺术审美较高；善于将想法转化为产品
        </li>
      </ul>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Dev Skills
      </div>
    ),
  },
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
];

const ResumePage = () => {
  return <StickyScroll content={content} />;
};

export default ResumePage;
