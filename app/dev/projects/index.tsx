import React from "react";
import { useIsSmallScreen } from "@/hooks/use-window-size";
import { Card, CardBody } from "@heroui/card";
import { Tabs, Tab } from "@heroui/tabs";
import { PROJECTS } from "./data";
import ProjectCard from "@/components/card/card-project";
import { useTheme } from "next-themes";
import { ProjectType } from "@/types/project";

const PROJECT_TABS = [
  {
    type: "all",
    name: "全部",
    desc: "按时间排序；项目详情目前是链到 Notion 页面，未来会在本站进行 Markdown 渲染的实现。",
  },
  {
    type: "full-stack",
    name: "全栈",
    desc: "为了简化开发流程，我做的全栈项目后端采用的是云开发/BaaS的方式。",
  },
  {
    type: "web-frontend",
    name: "Web前端",
    desc: "Web是我最熟悉的技术领域，丰富的生态是其深深吸引我的特性之一。",
  },

  {
    type: "client",
    name: "客户端",
    desc: "对于原生开发技术有所涉猎，但还是对于跨平台的解决方案更加熟悉一些，因为能够使用Web技术。",
  },
  {
    type: "miniprogram",
    name: "小程序",
    desc: "小程序开发用的是Taro，因为可以使用React。",
  },
  {
    type: "backend",
    name: "后端",
    desc: "后端项目是我在寻找技术发展方向的尝试。做过后端项目之后，还是认为自己更加喜欢看得见、摸得着的前端。",
  },
];

const ProjectTypeNameMap: Record<ProjectType, string> = {
  "full-stack": "全栈",
  "web-frontend": "Web前端",
  client: "客户端",
  miniprogram: "小程序",
  backend: "后端",
};

const ProjectsSection = () => {
  const { theme } = useTheme();
  const isSmallScreen = useIsSmallScreen();

  // 根据屏幕尺寸计算是否使用垂直布局
  const isVertical = !isSmallScreen;
  const fullWidth = isSmallScreen;

  return (
    <Tabs isVertical={isVertical} fullWidth={fullWidth} variant="light">
      {PROJECT_TABS.map((projectTab) => {
        const displayAll = projectTab.type === "all";
        return (
          <Tab className="flex flex-col gap-3" title={projectTab.name}>
            <Card>
              <CardBody>{projectTab.desc}</CardBody>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {PROJECTS.filter((project) =>
                displayAll
                  ? true
                  : project.type.includes(projectTab.type as ProjectType)
              ).map((project) => {
                const { name, techStack } = project;
                const techStackName = displayAll
                  ? `${ProjectTypeNameMap[project.type[0]]}｜`
                  : "";
                const blogLink = `/dev/projects/${name}`;
                const Icon =
                  theme === "light" && project.lightIcon ? (
                    <project.lightIcon></project.lightIcon>
                  ) : (
                    <project.icon></project.icon>
                  );
                const coverImageUrl = `https://images.noturandomdev.tech/projects/${name}-cover.png`;
                const coverImageSrc = () => {
                  const imgSrc = project?.imgSrc;
                  if (imgSrc === undefined) return coverImageUrl;
                  if (imgSrc.length) {
                    return imgSrc;
                  } else {
                    return undefined;
                  }
                };
                return (
                  <ProjectCard
                    name={name}
                    notionUrl={project.notionUrl}
                    key={name}
                    title={project.title}
                    description={project.description}
                    description2={project.description2}
                    subtitle={`${techStackName}${techStack}`}
                    isDisabled={project.notionUrl ? false : true}
                    imgSrc={coverImageSrc()}
                    icon={Icon}
                    devSpan={project.devSpan}
                    githubInfo={project.githubInfo}
                    scale={project.scale}
                  />
                );
              })}
            </div>
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default ProjectsSection;
