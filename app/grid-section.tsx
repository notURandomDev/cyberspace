"use client";

import { BrainCircuit, Code, Merge, Monitor, Percent } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { subtitle, title } from "@/components/primitives";

export function GridSection() {
  return (
    <section className="">
      <header className="gap-1 flex flex-col">
        {/* <h1 className="text-4xl px-4 md:text-5xl xl:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
          我的观念 & 我的身份
        </h1> */}
        <h1 className={`${title()} text-center`}>我的观念 & 我的身份</h1>
        {/* <p className="text-xl md:text-2xl text-center ">
          Take a glimpse into me
        </p> */}
        <p className={`${subtitle()} text-center`}> Take a glimpse into me</p>
      </header>
      <ul className="my-14 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[32rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Merge className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="科技与创造的融合"
          description="善于自己的想法转化为产品"
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <Percent className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="追求极致"
          description={`站在用户的视角思考产品 \n 打磨细粒度的交互体验`}
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={
            <BrainCircuit className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title={`I'm a WIP.`}
          description={`从项目中沉淀技术知识 \n 持续学习`}
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="前端工程师"
          description={`精通 React & Tailwind CSS \n 有丰富的 Web、小程序、跨平台开发 项目经验 \n 借助 BaaS 实现全栈开发`}
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={
            <Monitor className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title={`ByteIntern \n 飞书App-架构团队`}
          description={`熟悉大型项目混合技术栈开发 \n DevOps & Bazel 构建`}
        />
      </ul>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white whitespace-pre-line">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold whitespace-pre-line">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
