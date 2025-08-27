"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Tabs, Tab } from "@heroui/tabs";
import React from "react";
import { BLOGS } from "./data";
import { Link } from "@heroui/link";
import Image from "next/image";

const BLOG_TABS = [
  {
    type: "all",
    name: "全部",
    desc: "抽象的思维沉淀为可复用的知识库",
  },
  {
    type: "tech",
    name: "技术博客",
    desc: "做项目的过程中，理解如何结合应用场景，选用最合适的技术方案",
  },
  {
    type: "note",
    name: "学习笔记",
    desc: "在学习新技术的时候，梳理自己的思路",
  },
];

const BlogsSection = () => {
  return (
    <Tabs isVertical>
      {BLOG_TABS.map((blogTab) => {
        const displayAll = blogTab.type === "all";
        return (
          <Tab className="flex flex-col w-full gap-3" title={blogTab.name}>
            <Card>
              <CardBody>{blogTab.desc}</CardBody>
            </Card>
            <div className="flex flex-col gap-3">
              {BLOGS.filter((blog) =>
                displayAll ? true : blog.type === blogTab.type
              ).map((blog) => {
                const { title, url, coverImg, gist, source } = blog;
                return (
                  <Card
                    href={url}
                    isExternal
                    as={Link}
                    key={url}
                    className="w-full p-2 flex"
                  >
                    <CardHeader className="flex flex-row gap-4">
                      <Image
                        alt="Cover Image"
                        className="object-cover rounded-xl"
                        src={
                          coverImg.length
                            ? coverImg
                            : "https://heroui.com/images/hero-card-complete.jpeg"
                        }
                        width={120}
                        height={100}
                      />
                      <div className="flex flex-col h-full gap-0.5">
                        <div>
                          <p className="text-tiny uppercase font-bold text-default-500">
                            {source}
                          </p>
                          <p className="text-lg">{title}</p>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <p className="text-default-500 text-small line-clamp-1">{`文章摘要：${gist}`}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default BlogsSection;
