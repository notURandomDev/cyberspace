import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Tabs, Tab } from "@heroui/tabs";
import { TECH_STACKS } from "./data";
import { Progress } from "@heroui/progress";
import { useTheme } from "next-themes";
import { useIsSmallScreen } from "@/hooks/use-window-size";

const TECH_STACK_TABS = [
  {
    type: "language",
    name: "语言",
  },
  {
    type: "framework",
    name: "框架",
  },
];

const TechStacksSection = () => {
  const { theme } = useTheme();
  const isSmallScreen = useIsSmallScreen(768);
  const isVertical = !isSmallScreen;
  return (
    <Tabs variant="light" isVertical={isVertical}>
      {TECH_STACK_TABS.map((techStackTab) => (
        <Tab className="flex flex-col w-full gap-3" title={techStackTab.name}>
          <Card>
            <CardBody>{`这些是我掌握的${techStackTab.name}`}</CardBody>
          </Card>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
            {TECH_STACKS.filter(
              (techStack) => techStack.type === techStackTab.type
            ).map((techStack) => {
              const { name, mastery, desc } = techStack;
              const TechIcon =
                theme === "light" && techStack.lightIcon ? (
                  <techStack.lightIcon></techStack.lightIcon>
                ) : (
                  <techStack.icon></techStack.icon>
                );
              return (
                <Card key={name} className="w-full p-2 sm:p-3">
                  <CardHeader className="flex flex-col gap-4">
                    <div className="flex w-full gap-2 sm:gap-3 grow items-center">
                      <div className="flex-shrink-0">{TechIcon}</div>
                      <p className="text-sm sm:text-base font-semibold">
                        {name}
                      </p>
                    </div>
                    <div className="w-full">
                      <Progress
                        label={desc}
                        size="sm"
                        value={mastery}
                        showValueLabel
                        valueLabel={`${mastery}/5`}
                        minValue={0}
                        maxValue={5}
                        color="success"
                        classNames={{
                          label: "text-xs sm:text-sm",
                          value: "text-xs sm:text-sm",
                        }}
                      />
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Tab>
      ))}
    </Tabs>
  );
};

export default TechStacksSection;
