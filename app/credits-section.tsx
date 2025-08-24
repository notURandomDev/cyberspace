import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function HomePageCreditsSection() {
  const testimonials = [
    {
      quote: `Dave Gray 是我前端开发的启蒙导师 很多入门知识都是看他的 YouTube 教程学会的 其中包括三大件 HTML CSS JavaScript \n 以及后端框架 Express.js`,
      name: "Dave Gray",
      designation: "Developer, Instructor, and Content Creator",
      src: "https://avatars.githubusercontent.com/u/31679671?v=4",
      githubName: "gitdagray",
      youtubeName: "@DaveGrayTeachesCode",
    },
    {
      quote:
        "我特别喜欢 Sina 幽默风趣的 Style \n 他教会了我很多 JavaScript 的进阶概念 \n 在不同阶段观看 ColorCode 的视频 对JS会有不同的理解",
      name: "Sina Jazayeri",
      designation: '"20 Things JavaScript Developers Should Know"',
      src: "https://images.noturandomdev.tech/home/sina-cover.png",
      githubName: "ColorCode",
      youtubeName: "@ColorCode-io",
    },
    {
      quote:
        "JS Mastery 教会了我如何使用 React Native 和 Appwrite 进行全栈开发 \n 他的教程项目中不仅使用了开发的最佳实践 还融入了非常精美的 UI & UX 设计 \n",
      name: "Adrian Hajdin",
      designation: "Learn. Build. Deploy. Production-Ready Apps",
      src: "https://pbs.twimg.com/profile_images/1727253129513549824/EYZ8p0PT_400x400.jpg",
      githubName: "adrianhajdin",
      youtubeName: "@javascriptmastery",
    },
    {
      quote:
        "Sean\u00A0Allen YouTube 上的 UIKit 教程 \n 带我走进了 iOS 原生开发的世界 \n 他能将开发中会遇到的实际问题融入教学中 \n 理解起来毫不费劲",
      name: "Sean Allen",
      designation: "iOS Development Videos",
      src: "https://yt3.googleusercontent.com/wujHpEJt-XOr1fjzQW0-f9ko4eCFnlXqjhM5ecMtDzMi-3ezCor-UQ9OsydWOp_Z9dy5DdyX_Q=s900-c-k-c0x00ffffff-no-rj",
      githubName: "sallen0400",
      youtubeName: "@seanallen",
    },
  ];
  return (
    <section className="py-14">
      <h1 className="text-4xl px-4 md:text-5xl xl:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
        我的恩师们
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
