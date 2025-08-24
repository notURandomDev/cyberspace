"use client";

import { title } from "@/components/primitives";
import { Tabs, Tab } from "@heroui/tabs";
import TechStacksSection from "./tech-stacks";
import ProjectsSection from "./projects";
import BlogsSection from "./blogs/page";

export default function DevPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className={title()}>开发</h1>

      <Tabs size="lg">
        <Tab className="flex w-full" key="projects" title="做过的项目">
          <ProjectsSection />
        </Tab>
        <Tab key="techStacks" title="技术栈">
          <TechStacksSection />
        </Tab>
        <Tab key="blogs" title="博客">
          <BlogsSection />
        </Tab>
      </Tabs>
    </div>
  );
}
