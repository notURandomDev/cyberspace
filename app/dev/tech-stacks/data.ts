import { SkillIconsBashDark } from "@/components/SvgIcons/SkillIconsBashDark";
import { SkillIconsBashLight } from "@/components/SvgIcons/SkillIconsBashLight";
import { SkillIconsCss } from "@/components/SvgIcons/SkillIconsCss";
import { SkillIconsHtml } from "@/components/SvgIcons/SkillIconsHtml";
import SkillIconsJavascript from "@/components/SvgIcons/SkillIconsJavascript";
import { SkillIconsPythonDark } from "@/components/SvgIcons/SkillIconsPythonDark";
import { SkillIconsPythonLight } from "@/components/SvgIcons/SkillIconsPythonLight";
import { SkillIconsReactDark } from "@/components/SvgIcons/SkillIconsReactDark";
import { SkillIconsReactLight } from "@/components/SvgIcons/SkillIconsReactLight";
import { SkillIconsRuby } from "@/components/SvgIcons/SkillIconsRuby";
import { SkillIconsRust } from "@/components/SvgIcons/SkillIconsRust";
import { SkillIconsSwift } from "@/components/SvgIcons/SkillIconsSwift";
import { SkillIconsTailwindcssDark } from "@/components/SvgIcons/SkillIconsTailwindcssDark";
import { SkillIconsTailwindcssLight } from "@/components/SvgIcons/SkillIconsTailwindcssLight";
import { SkillIconsTypescript } from "@/components/SvgIcons/SkillIconsTypescript";
import { SkillIconsVuejsDark } from "@/components/SvgIcons/SkillIconsVuejsDark";
import { SkillIconsVuejsLight } from "@/components/SvgIcons/SkillIconsVuejsLight";
import { SkillIconsVuetifyDark } from "@/components/SvgIcons/SkillIconsVuetifyDark";
import { SkillIconsVuetifyLight } from "@/components/SvgIcons/SkillIconsVuetifyLight";

export type TechStackType = "language" | "framework";

interface TechStack {
  type: TechStackType;
  name: string;
  icon: any;
  lightIcon?: any;
  mastery: number;
  desc: string;
}

const LANGUAGE_STACKS: TechStack[] = [
  {
    type: "language",
    name: "HTML",
    icon: SkillIconsHtml,
    mastery: 4,
    desc: "div大法好！",
  },
  {
    type: "language",
    name: "CSS",
    icon: SkillIconsCss,
    mastery: 4,
    desc: "不如Tailwind",
  },
  {
    type: "language",
    name: "JavaScript",
    icon: SkillIconsJavascript,
    mastery: 5,
    desc: "最熟悉的语言",
  },
  {
    type: "language",
    name: "TypeScript",
    icon: SkillIconsTypescript,
    mastery: 4,
    desc: "将要成为最熟悉的语言",
  },
  {
    type: "language",
    name: "Ruby",
    icon: SkillIconsRuby,
    mastery: 1,
    desc: "写过CI脚本",
  },
  {
    type: "language",
    name: "Python",
    icon: SkillIconsPythonDark,
    lightIcon: SkillIconsPythonLight,
    mastery: 3,
    desc: "写CI脚本的主力语言",
  },
  {
    type: "language",
    name: "Bash",
    icon: SkillIconsBashDark,
    lightIcon: SkillIconsBashLight,
    mastery: 2,
    desc: "Hackers use Bash",
  },
  {
    type: "language",
    name: "Rust",
    icon: SkillIconsRust,
    mastery: 1,
    desc: "写过RustSDK",
  },
  {
    type: "language",
    name: "Swift",
    icon: SkillIconsSwift,
    mastery: 1,
    desc: "用UIKit写过仿飞书项目",
  },
];

const FRAMEWORK_STACKS: TechStack[] = [
  {
    type: "framework",
    name: "Tailwind CSS",
    icon: SkillIconsTailwindcssDark,
    lightIcon: SkillIconsTailwindcssLight,
    mastery: 4,
    desc: "用的比CSS多",
  },
  {
    type: "framework",
    name: "React.js",
    icon: SkillIconsReactDark,
    lightIcon: SkillIconsReactLight,
    mastery: 5,
    desc: "最熟悉的Web开发框架",
  },
  {
    type: "framework",
    name: "Vue.js",
    icon: SkillIconsVuejsDark,
    lightIcon: SkillIconsVuejsLight,
    mastery: 2,
    desc: "用过，但用的比较少",
  },
  {
    type: "framework",
    name: "Vuetify",
    icon: SkillIconsVuetifyDark,
    lightIcon: SkillIconsVuetifyLight,
    mastery: 4,
    desc: "写Vue的时候用的UI库",
  },
];

export const TECH_STACKS: TechStack[] = [
  ...LANGUAGE_STACKS,
  ...FRAMEWORK_STACKS,
];
