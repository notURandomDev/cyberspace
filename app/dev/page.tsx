"use client";

import { title } from "@/components/primitives";
import { Tabs, Tab } from "@heroui/tabs";
import TechStacksSection from "./tech-stacks";
import ProjectsSection from "./projects";
import BlogsSection from "./blogs";
import HacksSection from "./hacks";
import { useIsSmallScreen } from "@/hooks/use-window-size";

export default function DevPage() {
  const isSmallScreen = useIsSmallScreen(768);
  const fullWidth = isSmallScreen;

  return (
    <div className="flex flex-col gap-8 w-full justify-center">
      <h1 className={title()}>开发</h1>

      <Tabs fullWidth={fullWidth} size={isSmallScreen ? "md" : "lg"}>
        <Tab
          className="flex w-full md:justify-start justify-center"
          key="projects"
          title="做过的项目"
        >
          <ProjectsSection />
        </Tab>
        {/* <Tab
          className="flex w-full md:justify-start justify-center"
          key="techStacks"
          title="技术栈"
        >
          <TechStacksSection />
        </Tab>
        <Tab
          className="flex w-full md:justify-start justify-center"
          key="blogs"
          title="博客"
        >
          <BlogsSection />
        </Tab>
        <Tab
          className="flex w-full md:justify-start justify-center"
          key="hacks"
          title="话题"
        >
          <HacksSection />
        </Tab> */}
      </Tabs>
    </div>
  );
}
