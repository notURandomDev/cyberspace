import { SkillIconsAndroidstudioDark } from "@/components/SvgIcons/SkillIconsAndroidstudioDark";
import { SkillIconsAndroidstudioLight } from "@/components/SvgIcons/SkillIconsAndroidstudioLight";
import { SkillIconsExpressjsDark } from "@/components/SvgIcons/SkillIconsExpressjsDark";
import { SkillIconsHtml } from "@/components/SvgIcons/SkillIconsHtml";
import { SkillIconsReactDark } from "@/components/SvgIcons/SkillIconsReactDark";
import { SkillIconsReactLight } from "@/components/SvgIcons/SkillIconsReactLight";
import { SkillIconsSwift } from "@/components/SvgIcons/SkillIconsSwift";
import { SkillIconsVuejsDark } from "@/components/SvgIcons/SkillIconsVuejsDark";
import { SkillIconsVuejsLight } from "@/components/SvgIcons/SkillIconsVuejsLight";
import { SkillIconsExpressjsLight } from "@/components/SvgIcons/SkillsIconsExpressJsLight";
import { ProjectScale, ProjectType, ProjectWebsiteInfo } from "@/types/project";
import { WebsiteInfo } from "@/types/util";

interface Project {
  name: string;
  title: string;
  techStack: string;
  description: string;
  description2: string;
  device: "pc" | "mobile";
  type: ProjectType[];
  status: "done" | "wip";
  notionUrl?: string;
  githubInfo?: WebsiteInfo;
  projectWebsiteInfo?: ProjectWebsiteInfo;
  imgSrc?: string;
  icon: any;
  lightIcon?: any;
  devSpan: string;
  scale: ProjectScale;
}

export const PROJECTS: Project[] = [
  {
    title: "个人网站",
    name: "cyberspace",
    techStack: "React.js + HeroUI",
    description: "你现在在访问的网站！",
    description2: "走通开发、部署全流程",
    device: "pc",
    status: "wip",
    type: ["web-frontend"],
    notionUrl:
      "https://noturandomdev.notion.site/Cyberspace-2592ad4d7872808587c7cc3f0d493502",
    icon: SkillIconsReactDark,
    devSpan: "2025-07 - Now",
    scale: "solo",
    githubInfo: {
      name: "cyberspace",
      url: "https://github.com/notURandomDev/cyberspace",
    },
  },
  {
    title: "Bits CI SuperCharged",
    name: "bits-ci-supercharged",
    techStack: "React.js + HeroUI",
    description: "CI测试提效工具",
    description2: "基于批量发送请求的能力",
    device: "pc",
    status: "wip",
    type: ["web-frontend"],
    notionUrl:
      "https://noturandomdev.notion.site/Bits-CI-SuperCharged-2532ad4d787280e6a7d5f273bbecd4b4",
    icon: SkillIconsReactDark,
    devSpan: "2025-07",
    scale: "solo",
    imgSrc: "",
  },
  {
    title: "杭电吉协小程序",
    name: "a105",
    techStack: "Taro + Taroify + TCB",
    description: "乐队排练预约、组队、社费缴纳",
    description2: "社团管理应用",
    device: "mobile",
    status: "wip",
    type: ["full-stack", "miniprogram"],
    icon: SkillIconsReactDark,
    devSpan: "2025-06 - Now",
    scale: "solo",
    imgSrc: "",
  },
  {
    title: "仿网易云音乐播放器",
    name: "netease-music-clone",
    techStack: "Taro + Taroify",
    description: "小程序版的网易云音乐",
    // description2: "「软件开发实践3」课程设计项目",
    description2: "滚动歌词组件、全局状态管理",
    device: "mobile",
    status: "done",
    type: ["miniprogram"],
    notionUrl:
      "https://noturandomdev.notion.site/2542ad4d787280f4910edc608770dc4f",
    githubInfo: {
      name: "netease-clone",
      url: "https://github.com/418-I-am-TeaPot/netease-clone",
    },
    icon: SkillIconsReactDark,
    devSpan: "2025-06",
    scale: "team",
  },
  {
    title: "LarkClone",
    name: "lark-clone",
    techStack: "Swift + UIKit",
    description: "仿飞书 APP 开发",
    // description2: "字节跳动-飞书技术训练营项目",
    description2: "多技术栈、混合构建系统",
    device: "mobile",
    status: "done",
    type: ["client"],
    notionUrl:
      "https://noturandomdev.notion.site/LarkClone-2532ad4d78728008b9caf2e0d633d0f5",
    githubInfo: {
      name: "LarkClone",
      url: "https://github.com/notURandomDev/LarkClone",
    },
    icon: SkillIconsSwift,
    devSpan: "2025-05",
    scale: "team",
  },
  {
    title: "安小恒",
    name: "a18",
    techStack: "RN + Nativewind",
    description: "智能AI会议助手",
    description2: "AI聊天流式输出渲染、会议实时总结",
    // description2: "服务外包比赛｜出题方：安恒信息",
    device: "mobile",
    status: "done",
    type: ["client"],
    notionUrl:
      "https://noturandomdev.notion.site/2532ad4d787280278f7bee789a1f39f9",
    githubInfo: {
      name: "nativewind-a18",
      url: "https://github.com/notURandomDev/nativewind-a18",
    },
    icon: SkillIconsReactDark,
    devSpan: "2025-02 ~ 2025-04",
    scale: "team",
  },
  {
    title: "W2G",
    name: "w2g",
    techStack: "Java + Appwrite",
    description: "推荐附近有趣的场所",
    description2: "BaaS简化全栈项目的后端开发",
    // description2: "「移动应用开发」课程设计项目",
    device: "mobile",
    status: "done",
    type: ["full-stack", "client"],
    notionUrl:
      "https://noturandomdev.notion.site/W2G-2542ad4d787280ff9e1ed11497402be8",
    icon: SkillIconsAndroidstudioLight,
    lightIcon: SkillIconsAndroidstudioDark,
    devSpan: "2024-12",
    scale: "solo",
  },
  {
    title: "GROOVE SHOOTER",
    name: "groove-shooter",
    techStack: "RN + Appwrite",
    description: "提升鼓手律动的小游戏",
    // description2: "「创新实践3」课程设计项目",
    description2: "深入鼓手垂域，探索创新性功能",
    device: "mobile",
    status: "done",

    type: ["full-stack", "client"],
    notionUrl:
      "https://noturandomdev.notion.site/Groove-Shooter-2532ad4d7872809984dbd2414371a0eb",
    icon: SkillIconsReactDark,
    devSpan: "2024-10 ~ 2024-12",
    scale: "solo",
  },
  {
    title: "宠物信息交流平台",
    name: "fop",
    techStack: "Vue.js + Vuetify",
    description: "Forum of Pets",
    description2: "「软件开发实践2」课程设计项目",
    device: "mobile",
    status: "done",
    type: ["web-frontend"],
    notionUrl:
      "https://noturandomdev.notion.site/2532ad4d78728030ac39f3a81b9c2538",
    githubInfo: {
      name: "fop",
      url: "https://github.com/notURandomDev/fop",
    },
    icon: SkillIconsVuejsLight,
    lightIcon: SkillIconsVuejsDark,
    devSpan: "2024-09",
    scale: "team",
  },
  {
    title: "Vocablist",
    name: "vocablist",
    techStack: "Vue.js + Bootstrap",
    description: "极简背单词应用",
    description2: "备考TOEFL时做的记生词工具",
    device: "pc",
    status: "done",
    type: ["web-frontend"],
    notionUrl:
      "https://noturandomdev.notion.site/Vocablist-2572ad4d787280869880e569100c9b7f",
    githubInfo: {
      name: "vocablist",
      url: "https://github.com/notURandomDev/vocablist",
    },
    icon: SkillIconsVuejsLight,
    lightIcon: SkillIconsVuejsDark,
    devSpan: "2024-08",
    scale: "solo",
  },
  {
    title: "毕业设计管理系统",
    name: "gpms",
    techStack: "Express.js",
    description: "Graduation Project Management System",
    // description2: "[软件工程] 课程设计项目",
    description2: "后端开发的一次探索性尝试",
    device: "pc",
    status: "done",
    type: ["backend"],
    githubInfo: {
      name: "GPMS",
      url: "https://github.com/notURandomDev/GPMS",
    },
    icon: SkillIconsExpressjsLight,
    lightIcon: SkillIconsExpressjsDark,
    devSpan: "2024-04 ~ 2024-05",
    scale: "solo",
  },
  {
    title: "灵问",
    name: "a11",
    techStack: "React.js + CSS",
    description: "智能问答系统",
    // description2: "服务外包比赛｜出题方：超星集团",
    description2: "第一个大型项目，具有启蒙意义",
    device: "pc",
    status: "done",
    type: ["web-frontend"],
    notionUrl:
      "https://noturandomdev.notion.site/1b62ad4d787281c1a343e4b261056b4e",
    githubInfo: {
      name: "a11",
      url: "https://github.com/notURandomDev/a11",
    },
    icon: SkillIconsReactDark,
    lightIcon: SkillIconsReactLight,
    devSpan: "2024-01 ~ 2024-04",
    scale: "team",
  },

  {
    title: "Essence Extract",
    name: "essence-extract",
    techStack: "HTML + CSS + JS",
    description: "书籍浓缩提取",
    description2: "踏入前端领域的首次尝试",
    // description2: "「Web前端开发技术」课程设计项目",
    device: "pc",
    status: "done",
    type: ["web-frontend"],
    notionUrl:
      "https://noturandomdev.notion.site/Essence-Extract-24f2ad4d787280f2acb9ed89d1ba4d2b",
    githubInfo: {
      name: "Essence_Extract",
      url: "https://github.com/notURandomDev/Essence_Extract",
    },
    icon: SkillIconsHtml,
    devSpan: "2023-10 ~ 2024-12",
    scale: "solo",
  },
];
